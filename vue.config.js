/**
 * Created by BigZ on 2019/1/11.
 */
//解决本地打开index.html资源路径问题
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/'
}