/**
 * api接口的统一管理
 */

// example
import example from '@/api/example';
// 用户相关接口
import user from '@/api/user';
// 其他模块的接口……

// 导出接口
export default {
    ...example,
    ...user
    // ……
};
