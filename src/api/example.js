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
    },
    getImgList(){
        return request({
            method: 'get',
            url: 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/25/1'
        });
    },
    getTableList(data){
        return request({
            method: 'post',
            url:'https://www.easy-mock.com/mock/592501a391470c0ac1fab128/ms/table/list',
            data
        })
    }
};
