import axios from 'axios';

const service = axios.create({
        baseURL: 'http://276119q7b5.zicp.vip:10829/',
        timeout: 10000
    }
)


service.interceptors.request.use((config) => {
    return config
})


service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code != 200) {
            return false
        }

        return res;
    },
    error => {
        return Promise.reject(error);
    }
)



export default service


