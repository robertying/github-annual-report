import ApolloClient from "apollo-boost";
import axios from "axios";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token ? `bearer ${token}` : ""
      }
    });
  }
});

axios.defaults.baseURL = "https://api.github.com";

export default client;
