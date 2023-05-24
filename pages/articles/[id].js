import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import HashnodeContent from "../../helper/HashnodeContent";
import Image from "next/image";
import back from "../../assets/arrow.svg";
import { BsCalendar3 } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import Link from "next/link";
import Header from "../../components/Header";
const readingTime = require("reading-time");

export const getStaticPaths = async () => {
  const client = new ApolloClient({
    uri: "https://api.hashnode.com/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetUserArticles {
        user(username: "emmanuel31") {
          publication {
            posts(page: 0) {
              _id
              title
              brief
              slug
            }
          }
        }
      }
    `,
  });

  const paths = data.user.publication.posts.map((post) => {
    return {
      params: { id: post.slug.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  try {
    const client = new ApolloClient({
      uri: "https://api.hashnode.com/",
      cache: new InMemoryCache(),
    });

    const { data } = await client.query({
      query: gql`
        query GetUserById($id: String!) {
          post(slug: $id, hostname: "emmanuel-eze.hashnode.dev") {
            title
            slug
            dateAdded
            contentMarkdown
          }
        }
      `,
      variables: {
        id: id,
      },
    });

    return {
      props: {
        post: data.post,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};

const article = ({ post }) => {
  const dateString = post.dateAdded;
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const readtime = readingTime(post.contentMarkdown);

  return !post ? (
    <div className="text-white h-[90vh] grid place-items-center">
      Loading...
    </div>
  ) : (
    <div>
      <div className="lg:hidden">
        <Header />
      </div>
      <div className="lg:w-[70%] w-[90%] mx-auto my-12">
        <Link href="/articles">
          <Image
            className="cursor-pointer"
            src={back}
            width={80}
            height={40}
            alt=""
          />
        </Link>
        <div className="flex space-x-5 my-6 text-[#777778]">
          <p className="flex items-center text-sm">
            <BsCalendar3 className="mr-1" />
            {date.toLocaleString("en-US", options)}
          </p>
          <p className="flex items-center text-sm">
            <BiTimeFive className="mr-1" />
            {readtime.text}
          </p>
        </div>
        <h1 className="text-3xl mb-16">{post.title}.</h1>
        <HashnodeContent content={post?.contentMarkdown} />
      </div>
    </div>
  );
};

export default article;
