import Head from "next/head";
import MyArticles from "../../components/MyArticles";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import Layout from "../../layout/Layout";

const articles = ({ posts, error }) => {
  return (
    <>
      <Head>
        <title>Frontend developer | Blog</title>
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
              posts {
                _id
                title
                dateAdded
                slug
                contentMarkdown
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
