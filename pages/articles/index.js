import ArticlesCard from "../../components/ArticlesCard";
import MyArticles from "../../components/MyArticles";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import Layout from "../../layout/Layout";

const articles = ({ posts, error }) => {
  console.log("error", error);
  return !posts ? (
    <div className="text-white h-[90vh] grid place-items-center">
      Loading...
    </div>
  ) : (
    <div className="lg:mx-2">
      <Layout>
        <MyArticles posts={posts} />
      </Layout>
    </div>
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
