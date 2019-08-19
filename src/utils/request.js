import axios from 'axios';

// 创建axios 实例
const axiosInstance = axios.create({
    baseURL: 'https://www.easy-mock.com/mock/5a4896ba62de717d44f2406e/api/v1',
    timeout: 10000 // 请求超时时间
});

axiosInstance.interceptors.request.use(
    config => {
        // 这里可以自定义一些config 配置, 比如headers添加token
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status) {
            return Promise.reject(error.response);
        }
    }
);

export default axiosInstance;
