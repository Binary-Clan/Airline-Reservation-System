import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8083/api"
})

class APIClient {
    endpoint

    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getAll = (config) => {
        return axiosInstance.get(this.endpoint, config).then(res => res.data)
    }

    get = (id) => { return axiosInstance.get(this.endpoint + "/" + id).then(res => res.data) }
}

export default APIClient