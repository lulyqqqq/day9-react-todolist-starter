import axios from "axios";
import NotFoundPage from "../components/NotFoundPage";

const instance = axios.create({
    baseURL: "https://67495c0a868020296630a78d.mockapi.io/api/v1/",
})

let start = Date.now()
instance.interceptors.request.use(
    (config) => {
        config.metadata = {start: new Date()}
        start = Date.now();
        console.log("work stark:", start)
        console.log("Request:", config);
        return config;
    },
    (error) => {
        console.log("error:", error);
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    (response) => {
        const duration = new Date() - response.config.metadata.start
        console.log("timeSheep:", Date.now() - start)
        console.log("url:%s\n", response.config.baseUrl + response.config.url);
        console.log("method:%s\n", response.config.method);
        console.log("duration time:", duration)
        console.log(`url:${response.config.url} method:${response.config.method} duration time:${duration}`)
        console.log(response);
        return response;
    },
    (error) => {
        if (error.response.status === 404) {
            window.location.href = "/notPage"
        }
        if (error.response && error.response.status === 500) {
            window.location.href = "/hard-stop"
        }
        console.log("error:", error);
        return Promise.reject(error);
    },
)


export default instance