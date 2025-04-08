import axios from "axios";


const api = axios.create({
    baseURL:"http://jsonplaceholder.typicode.com",
    timeout: 10000,
    // headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer`,
    // }
})
    


export default api;