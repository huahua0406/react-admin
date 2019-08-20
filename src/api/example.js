/**
 * example模块接口列表
 */
import request from '@/utils/request';

export default {
    // get
    getPost(id) {
        return request({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'get',
            params: { id }
        });
    },
    // post
    postForm(data) {
        return request({
            url: 'https://jsonplaceholder.typicode.com/login',
            method: 'post',
            data
        });
    },
    // post 自定义header
    upload(formData) {
        return request({
            method: 'post',
            url: '/upload',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    }
};
