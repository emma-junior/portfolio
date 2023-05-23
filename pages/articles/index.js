import Head from "next/head";
import ArticlesCard from "../../components/ArticlesCard";
import MyArticles from "../../components/MyArticles";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import Layout from "../../layout/Layout";

const articles = ({ posts, error }) => {
  console.log("error", error);
  return (
    <>
      <Head>
        <title>Frontend developer | Articles</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/photo.ico" />
      </Head>
      {!posts ? (
        <div className="text-white h-[90vh] grid place-items-center">
          Loading...
        </div>
      ) : (
        <Layout>
          <MyArticles posts={posts} />
        </Layout>
      )}
    </>
  );
};

export default articles;

export async function getStaticProps() {
  try {
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
                dateAdded
                slug
                brief
              }
            }
          }
        }
      `,
    });

    return {
      props: {
        posts: data.user.publication.posts,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
}
