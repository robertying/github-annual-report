import ApolloClient from "apollo-boost";
import axios from "axios";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: "bearer 50b343b21f06c58b29769c1c22e5bd8d09306fbd"
  }
});

axios.defaults.baseURL = "https://api.github.com";

export default client;
