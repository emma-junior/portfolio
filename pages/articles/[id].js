import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

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
};
const article = ({ post }) => {
  return !post ? (
    <div className="text-white h-[90vh] grid place-items-center">
      Loading...
    </div>
  ) : (
    <div className="text-white h-[90vh] grid place-items-center">
      <h3>
        Apologies, this page is under construction.
        <br />
        Please check back tomorrow
        <br />
        But you can you can also read through{" "}
        <a
          href="https://emmanuel-eze.hashnode.dev/beginners-guide-to-coding"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 cursor-pointer"
        >
          HERE
        </a>
      </h3>
    </div>
  );
};

export default article;
