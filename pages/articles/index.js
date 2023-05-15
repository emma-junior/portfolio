import ArticlesCard from "../../components/ArticlesCard";
import MyArticles from "../../components/MyArticles";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const articles = ({ posts }) => {
  console.log("posts", posts);
  return (
    <div className=" lg:mx-2">
      <MyArticles posts={posts} />
    </div>
  );
};
export default articles;

export async function getStaticProps() {
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

  return {
    props: {
      posts: data.user.publication.posts,
    },
  };
}
