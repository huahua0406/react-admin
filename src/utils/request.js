import axios from 'axios';

// 创建axios 实例
const axiosInstance = axios.create({
	baseURL: 'https://www.easy-mock.com/mock/5a4896ba62de717d44f2406e/api/v1',
	timeout: 10000 // 请求超时时间
});

// 设置post请求头
axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axiosInstance.interceptors.request.use(
	config => {
        // 这里可以自定义一些config 配置, 比如headers添加token
        // token && (config.headers.Authorization = token)
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
			// 相应错误处理
			// 比如： token 过期， 无权限访问， 路径不存在， 服务器问题等
			switch (error.response.status) {
				case 401:
					break;
				case 403:
					break;
				case 404:
					break;
				case 500:
					break;
				default:
					console.log('其他错误信息');
			}
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;
