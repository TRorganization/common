/*
* authod:TR
* Time:2019/1/17
* vesion:1.0
* */

import wx from 'weixin-js-sdk'
Vue.prototype.wx=wx;
/**
 * @goback 退出微信公众号，退到首页
 * @param 
 */
export const goback = () => {
    WeixinJSBridge.call('closeWindow');
};