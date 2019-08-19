/**
 * user模块接口列表
 */

import request from '@/utils/request'; // 导入http中创建的axios实例

export default {
    // 登录
    login(data) {
        return request({
            url: '/login',
            method: 'post',
            data
        });
    },
    // 登出
    logout() {
        // todo:
    }
};
