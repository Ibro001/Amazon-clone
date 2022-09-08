import axios from "axios";

const instance = axios.create({
    baseURL: 'https://amazon-clone-backend2.herokuapp.com'  /**Replace our axios URL i.e(http://localhost:3001) with the Heroku URL generated from deploying on Heroku */
});

export default instance;