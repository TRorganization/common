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

/**
 * 微信支付
 * @param params
 * @param url 成功跳转的url
 */
export const jsApiCall = (params,url) => {
    let that = this
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
            'appId': params.appId,
            'timeStamp':params.timeStamp,
            'nonceStr': params.nonceStr,
            'package': params.package,
            'signType': params.signType,
            'paySign': params.paySign
        },
        res=>{
            if (res.err_msg === 'get_brand_wcpay_request:ok') {
                // 微信支付成功
                that.$router.push({path:url,query:{}})
            } else if (res.err_msg === 'get_brand_wcpay_request:cancel') {
                // 用户取消支付
                // that.$router.replace({name:'fullOrder',query:{id:'1'}})
            } else if (res.err_msg === 'get_brand_wcpay_request:fail') {
                // 支付失败
            }
        }
    );
}
export const callWxPay = (params,url) => {
    if (typeof WeixinJSBridge == "undefined"){
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', this.jsApiCall(params,url), false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', this.jsApiCall(params,url));
            document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall(params,url));
        }
    }else{
        this.jsApiCall(params,url);
    }
}
/**
 * 微信定位功能
 */
export const getShopWxConfig = () =>{
    let that = this;
    let params = {
        url: 'http://www.123.com/shop/index1.html'
    }
    getShopWxConfigData(params).then(res => {
        console.log(res)
        wx.config({
            debug: false,
            appId: res.appId,
            nonceStr: res.nonceStr,
            timestamp: res.timestamp,
            url: res.url,
            signature: res.signature,
            jsApiList: [
                'checkJsApi', 'openLocation', 'getLocation'
            ],
        })
        wx.checkJsApi({
            jsApiList: ['getLocation'],
            success: function (res) {
                if (res.checkResult.getLocation == false) {
                    alert('你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！');
                    return;
                }
            }
        });
        wx.ready(function () {
//                wx.invoke('getLocation', 'openLocation', {}, function(res) {
//                    //alert(res.err_msg + "唯一");
//                });
            wx.getLocation({
                success: function (res) {
//                                console.log(res)
                    that.pointY = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    that.pointX = res.longitude; // 经度，浮点数，范围为180 ~ -180。

                    that.point = new BMap.Point(that.pointX,that.pointY);
                    that.marker = new BMap.Marker(that.point); // 创建点

                    that.getShopFjStudio()
                },
                cancel: function (res) {
                    alert('用户拒绝授权获取地理位置');
                    that.getShopFjStudio()
                }
            });
        });

        wx.error(function (res) {
            that.getShopFjStudio()
        });
    }).catch(res => {
        console.log(res)
    })
}
/**
 * @synopsis 签名算法
 *
 * @param jsapi_ticket 用于签名的 jsapi_ticket
 * @param url 用于签名的 url ，注意必须动态获取，不能 hardcode
 *
 * @returns
 */
export const sign = (jsapi_ticket, url) =>{
    var ret = {
        jsapi_ticket: jsapi_ticket,
        nonceStr: this.createNonceStr(),
        timestamp: this.createTimestamp(),
        url: url
    };
    var string =this.raw(ret);
    // 请求传递，jsSHA是一个构造函数。里面有gg这个方法用户将
    jsSHA = this.require('jssha');
    shaObj = new jsSHA(string, 'TEXT');
    ret.signature = shaObj.getHash('SHA-1', 'HEX');
    return ret;
};
export const createNonceStr =  () =>{
    return Math.random().toString(36).substr(2, 15);
};

export const createTimestamp =  () => {
    return parseInt(new Date().getTime() / 1000) + '';
};
export const raw = args =>{
    var keys = Object.keys(args);
    keys = keys.sort();
    var newArgs = {};
    keys.forEach(key=> {
        newArgs[key.toLowerCase()] = args[key];
    });

    var string = '';
    for (var k in newArgs) {
        string += '&' + k + '=' + newArgs[k];
    }
    string = string.substr(1);
    return string;
};

// module.exports = sign;

