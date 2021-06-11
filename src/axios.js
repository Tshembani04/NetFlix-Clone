import axios from "axios";

//Initialize axios for appending the url

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});


// instance allows us to use-outside the function instances
export default instance;
