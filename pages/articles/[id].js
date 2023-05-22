import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import HashnodeContent from "../../helper/HashnodeContent";

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
            content
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
  return !post ? (
    <div className="text-white h-[90vh] grid place-items-center">
      Loading...
    </div>
  ) : (
    <div className="">
      <h2>{post.title}</h2>
      <HashnodeContent content={post?.contentMarkdown} />
    </div>
  );
};

export default article;
