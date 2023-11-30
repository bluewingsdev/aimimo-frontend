import axios from 'axios';
import authHeader from './auth-header';

const axiosInstance = axios.create({
    //baseURL: `${baseUrl}`,
    headers: {
        ...authHeader()
    }
});

class Axios {
    //get호출
    get(url, data) {
        return axiosInstance.get(url, {
            data: data
        });
    }

    //post호출
    post(url, data) {
        return axiosInstance.post(url, {
                data : data
            })
            .then(response => {
                return response.data;
            });
    }
}

export default new Axios();