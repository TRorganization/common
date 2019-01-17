/*
* authod:TR
* Time:2019/1/17
* vesion:1.0
* */
import BScroll from 'better-scroll';
import md5 from 'js-md5';
/**
 * 检查密码强度
 * @param str
 * @returns {number}
 */
export const checkPwd = str => {
    var Lv = 0;
    if (str.length < 6) {
        return Lv;
    }
    if (/[0-9]/.test(str)) {
        Lv++;
    }
    if (/[a-z]/.test(str)) {
        Lv++;
    }
    if (/[A-Z]/.test(str)) {
        Lv++;
    }
    if (/[\.|-|_]/.test(str)) {
        Lv++;
    }
    return Lv;
};
/**
 * md加密函数
 * @param mKey Appkey
 * @param iArg 请求参数
 * @returns {string}
 */
export const getSign = (mKey, iArg) => {
    var temp = [];
    var ss = [];
    for (var k in Object.keys(iArg)) {
        var ks = Object.keys(iArg)[k];
        var vs = Object.values(iArg)[k];
        // if (v == "IM_KeyID" || k == "IM_KeyID") {
        //     continue;
        // }
        var i = ks + "=" + vs;
        ss.push(i);
    }
    let tt = '';
    for (let ad in ss.sort()) {
        tt = ss;
    }
    temp = tt;
    var m = 'key=' + mKey;
    temp.push(m);
    return md5(temp.join("&")).toUpperCase();
};
/**
 * 将字符串转成md5
 * @param tr
 * @returns {PromiseLike<ArrayBuffer> | *}
 */
export const md5 = tr => {
    var md5sum = crypto.createHash('md5');
    md5sum.update(str);
    str = md5sum.digest('hex');
    return str;
};
/**
 * 获取多少天后的日期
 * @param AddDayCount
 * @returns {number}
 * @constructor
 */
export const GetDay = (AddDayCount) => {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);
    var days = dd.getDay();
    return days;
};
/**
 * 获取当天年月日
 * @returns {string} 2018-10-01
 */
export const getdayTime = () => {
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
    var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
    var dateStr = year + "-" + month + "-" + day;
    return dateStr;
};
/**
 * 计算天数
 *
 * @param start 开始时间2019/01/10
 * @param end   结束时间2019/01/17
 * @returns {number}
 */
export const time = (start, end) => {
    var date1 = new Date(start);
    var date2 = new Date(end);
    var s1 = date1.getTime(),
        s2 = date2.getTime();
    var total = Math.floor((s2 - s1) / (24 * 3600 * 1000));
    return total;
};
/**
 * 获取传入的时候7天后的时间 如2019/1/17
 * @param time_str 2019-01-17
 * @returns {string} 2019-01-24
 */
export const time_end = time_str => {
    var dd = new Date(time_str);
    dd.setDate(dd.getDate() + 7);   //获取AddDayCount天后的日期
    var year = dd.getFullYear();
    var mon = dd.getMonth() + 1;                             //获取当前月份的日期
    var day = dd.getDate();
    var day_tiem = year + '-' + (mon < 10 ? ('0' + mon) : mon) + '-' + (day < 10 ? ('0' + day) : day);
    return day_tiem;
};
/**
 * 页面倒计时
 * @param sec 秒
 */
export const countdown = sec => {
    let that = this;
    setTimeout(function () {
        var hour = 0;
        var minute = 0;
        var second = 0;
        var interval = setInterval(function () {
            if (sec >= 60) {
                minute = Math.floor(sec / 60);
                second = sec % 60;
                if (minute >= 60) {
                    hour = Math.floor(minute / 60);
                    minute = minute % 60;
                } else {
                    hour = 0;
                }
            } else {
                second = sec;
                hour = 0;
                minute = 0;
            }
            hour = parseInt(hour) < 10 && parseInt(hour) > 0 ? '0' + hour : hour;
            minute = parseInt(minute) < 10 && parseInt(minute) > 0 ? '0' + minute : minute;
            second = parseInt(second) < 10 && parseInt(second) > 0 ? '0' + second : second;
            var countdownStr = '剩余时间:' + hour + ':' + minute + ':' + second;
            console.log(countdownStr);
            that.time = countdownStr;
            sec--;
            if (sec <= 0) {
                that.isDisable = true;
                that.bgc = "#999";
                that.time = "超时操作";
                clearInterval(interval);
            }
        }, 1000);
    }, 1000);

};

/**
 * 根据日期获取年龄
 * @param status 日期 ：2019/01/17
 * @returns {number}
 * @constructor
 */
export const Age = status => {
    var aDate = new Date();
    var thisYear = aDate.getFullYear();
    var bDate = new Date(status);
    var brith = bDate.getFullYear();
    var age = (thisYear - brith);
    return age;
};
/**
 * 给指定的字符串打**
 * @param a  字符串
 * @returns {string | * | void}
 */
export const password = a => {
    var html = a;
    var uw = html.replace(/^(.{2})(.{2})(.*)$/, '$1***$3');
    return uw;
};
/**
 * 纵向滚动
 * @param DOM 盒子的dom元素
 * @constructor
 */
export const Scroll_Y = DOM => {
    let menuScroll = new BScroll(DOM, {
        click: true,
        scrollY: true,
        probeType: 3
    });

};
/**
 * 横向滚动
 * @param DOM
 * @constructor
 */
export const Scroll_X = DOM => {
    let menuScroll = new BScroll(DOM, {
        click: true,
        scrollX: true,
        probeType: 3
    });
};
/**
 * 点击滚动到中间
 * @returns {{scroll: ((x?: number, y?: number) => void) | ((options?: ScrollToOptions) => void), iscrollCenter: iscrollCenter, _initTabListWidth: _initTabListWidth}}
 * @constructor
 */
export const TouchScroll = () => {
    var iscroll = function (Dom, DomTow, DomChild, index) {
        // 初始化
        // 必须保证DOM加载完毕
        let scroll = new BScroll(Dom, {
            scrollX: true,
            click: true
        });
        this.scrollmethod = scroll;
        //计算滑动的总宽
        this._initTabListWidth(DomTow, DomChild);
        //初始化滑到中心
        this.iscrollCenter(DomChild, index++);
        this.iscrollCenter(DomChild, index++);
    };
    //点击当前滑到中心
    var iscrollCenter = function (DomChild) {
        /*滑动到指定索引的导航节点，并将其显示在可视区*/
        this.scrollmethod.scrollToElement(DomChild, 300, -(DomChild.clientWidth) * 2 - (DomChild.clientWidth) / 5, true)
        this.scrollmethod.refresh();

    };
    //计算滑动的总宽
    var _initTabListWidth = function (DomTow, DomChild) {
        DomTow.style.width = (DomChild.clientWidth + 1) * DomTow.children.length + 'px';
    };
    return {
        scroll: scroll,
        iscrollCenter: iscrollCenter,
        _initTabListWidth: _initTabListWidth

    };
    // 首次进去调用
    //初始化滑动模块
    //    this.$nextTick(() => {
    //        let i = ss[0].index;                             //获取索引值
    //    let wrapper = document.querySelector('.wrapper') //获取固定宽度的div
    //    let DomTow = document.querySelector('.content')  //获取最长的div
    //    let DomChild =  this.$refs.tabList.children[i]   //获取索引值的div
    //    console.log(this)
    //    this.TouchScroll().iscroll(wrapper,DomTow,DomChild,i)
    // });

    // 点击时
    //点击滑到中心
    // let DomChild =  this.$refs.tabList.children[index]
    // this.TouchScroll().iscrollCenter(DomChild,index++)

};
/**
 * 缓存
 * @set设置
 * @param key存储的键
 * @param value 存储的值
 * @returns {*}
 * @constructor
 */
export const Cache = () => {
    var ms = "mystorage";
    var storage = window.localStorage;
    if (!window.localStorage) {
        alert("浏览器支持localstorage");
        return false;
    }
    var set = function (key, value) {
        //存储
        var mydata = storage.getItem(ms);
        if (!mydata) {
            this.init();
            mydata = storage.getItem(ms);
        }
        mydata = JSON.parse(mydata);
        mydata.data[key] = value;
        storage.setItem(ms, JSON.stringify(mydata));
        return mydata.data;

    };
    var get = function (key) {
        //读取
        var mydata = storage.getItem(ms);
        if (!mydata) {
            return false;
        }
        mydata = JSON.parse(mydata);
        return mydata.data[key];
    };
    var remove = function (key) {
        //读取
        var mydata = storage.getItem(ms);
        if (!mydata) {
            return false;
        }
        mydata = JSON.parse(mydata);
        delete mydata.data[key];
        storage.setItem(ms, JSON.stringify(mydata));
        return mydata.data;
    };
    var clear = function () {
        //清除对象
        storage.removeItem(ms);
    };
    var init = function () {
        storage.setItem(ms, '{"data":{}}');
    };
    return {
        set: set,
        get: get,
        remove: remove,
        init: init,
        clear: clear
    };
    // console.log(this.GetConfig.Cache().set('tqtest','11111'));
    // console.log(this.GetConfig.Cache().get('tqtest'));//修改
    // console.log(mystorage.set('tqtest1','newtqtestcontent1'));//修改
    // console.log(mystorage.get('tqtest'));//读取
    // console.log(mystorage.remove('tqtest'));//删除
    // mystorage.clear();//整体清除
};
/**
 * 当前页面刷新一次
 */
export const reload = () => {
    if (location.href.indexOf('#reloaded') == -1) {
        location.href = location.href + "#reloaded";
        location.reload();
    }
};
/**
 * 定时三秒
 * @param Dom 盒子显示隐藏
 * @param sec 描述
 * @constructor
 */
export const ClearInterval = (Dom, sec) => {
    let self = this;
    let interval = window.setInterval(function () {
        self.Dom = true;
        if ((sec--) <= 0) {
            sec = sec;
            window.clearInterval(interval);
        }
    }, 1000);
};
/**
 * 业务报错，例如自己定义的603，700
 * @param code
 * @returns {string}
 * @constructor
 */
export const RetCodeError = code => {
    var code_dec = "业务繁忙，请稍后再试";
    var content = code + code_dec;
    return content;
}
/**
 * http报错 例如404,500
 * @param code
 * @returns {string}
 * @constructor
 */
export const HttpCodeError = code => {
    var dec = "网络异常，请稍后再试";
    var content = code + dec;
    return content;
};
/**
 * 更具身份证获取性别
 * @param psidno 身份证
 * @returns {*}
 * @constructor
 */
export const Getsex = psidno => {
    var sexno, sex;
    if (psidno.length == 18) {
        sexno = psidno.substring(16, 17);
    } else if (psidno.length == 15) {
        sexno = psidno.substring(14, 15);
    } else {
        // this.txt_msg='身份证格式有误,请核对';
        // this.show=true;
        alert("身份证格式有误,请核对");
        return false;
    }
    var tempid = sexno % 2;
    if (tempid == 0) {
        sex = '女';
    } else {
        sex = '男';
    }
    return sex;
};
/**
 * 根据身份证获取出生日期
 * @param psidno 身份证号
 * @returns {*}
 * @constructor
 */
export const GetBirthday = psidno => {
    var birthdayno, birthdaytemp;
    if (psidno.length == 18) {
        birthdayno = psidno.substring(6, 14);
    } else if (psidno.length == 15) {
        birthdaytemp = psidno.substring(6, 12);
        birthdayno = "19" + birthdaytemp;
    } else {
        alert("身份证格式有误,请核对");
        return false;
    }
    var birthday = birthdayno.substring(0, 4) + "-" + birthdayno.substring(4, 6) + "-" + birthdayno.substring(6, 8);
    return birthday;
};
/**
 * 音频加载
 * @param src
 * @param callback
 */
export const loadAudio = (src, callback) => {
    var audio = new Audio(src);
    audio.onloadedmetadata = callback;
    audio.src = src;
}


/**
 * 光标所在位置插入字符，并设置光标位置
 *
 * @param {dom} 输入框
 * @param {val} 插入的值
 * @param {posLen} 光标位置处在 插入的值的哪个位置
 */
export const setCursorPosition = (dom, val, posLen) => {
    var cursorPosition = 0;
    if (dom.selectionStart) {
        cursorPosition = dom.selectionStart;
    }
    this.insertAtCursor(dom, val);
    dom.focus();
    console.log(posLen);
    dom.setSelectionRange(dom.value.length, cursorPosition + (posLen || val.length));
}

/**
 * 光标所在位置插入值
 * @param dom
 * @param val
 */
export const insertAtCursor = (dom, val) => {
    if (document.selection) {
        dom.focus();
        sel = document.selection.createRange();
        sel.text = val;
        sel.select();
    } else if (dom.selectionStart || dom.selectionStart == '0') {
        let startPos = dom.selectionStart;
        let endPos = dom.selectionEnd;
        let restoreTop = dom.scrollTop;
        dom.value = dom.value.substring(0, startPos) + val + dom.value.substring(endPos, dom.value.length);
        if (restoreTop > 0) {
            dom.scrollTop = restoreTop;
        }
        dom.focus();
        dom.selectionStart = startPos + val.length;
        dom.selectionEnd = startPos + val.length;
    } else {
        dom.value += val;
        dom.focus();
    }
}
/**
 * @param {String|Number} timeStamp 时间戳
 * @returns {String} 相对时间字符串
 */
export const getRelativeTime = timeStamp => {
    // 判断当前传入的时间戳是秒格式还是毫秒
    const IS_MILLISECOND = isMillisecond(timeStamp)
    // 如果是毫秒格式则转为秒格式
    if (IS_MILLISECOND) Math.floor(timeStamp /= 1000)
    // 传入的时间戳可以是数值或字符串类型，这里统一转为数值类型
    timeStamp = Number(timeStamp)
    // 获取当前时间时间戳
    const currentTime = Math.floor(Date.parse(new Date()) / 1000)
    // 判断传入时间戳是否早于当前时间戳
    const IS_EARLY = isEarly(timeStamp, currentTime)
    // 获取两个时间戳差值
    let diff = currentTime - timeStamp
    // 如果IS_EARLY为false则差值取反
    if (!IS_EARLY) diff = -diff
    let resStr = ''
    const dirStr = IS_EARLY ? '前' : '后'
    // 少于等于59秒
    if (diff <= 59) resStr = diff + '秒' + dirStr
    // 多于59秒，少于等于59分钟59秒
    else if (diff > 59 && diff <= 3599) resStr = Math.floor(diff / 60) + '分钟' + dirStr
    // 多于59分钟59秒，少于等于23小时59分钟59秒
    else if (diff > 3599 && diff <= 86399) resStr = Math.floor(diff / 3600) + '小时' + dirStr
    // 多于23小时59分钟59秒，少于等于29天59分钟59秒
    else if (diff > 86399 && diff <= 2623859) resStr = Math.floor(diff / 86400) + '天' + dirStr
    // 多于29天59分钟59秒，少于364天23小时59分钟59秒，且传入的时间戳早于当前
    else if (diff > 2623859 && diff <= 31567859 && IS_EARLY) resStr = getDate(timeStamp)
    else resStr = getDate(timeStamp, 'year')
    return resStr
}

export function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') {
            return ['日', '一', '二', '三', '四', '五', '六'][value]
        }
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}

export function formatTime(time, option) {
    time = +time * 1000
    const d = new Date(time)
    const now = Date.now()

    const diff = (now - d) / 1000

    if (diff < 30) {
        return '刚刚'
    } else if (diff < 3600) {
        // less 1 hour
        return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
        return '1天前'
    }
    if (option) {
        return parseTime(time, option)
    } else {
        return (
            d.getMonth() +
            1 +
            '月' +
            d.getDate() +
            '日' +
            d.getHours() +
            '时' +
            d.getMinutes() +
            '分'
        )
    }
}

/**
 * 根据一天时间内执行方法，例如想在07：00到10:00关闭页面
 * @param startH 开始时间小时
 * @param startM 开始时间分钟
 * @param endH   结束时间小时
 * @param endM   结束时间分钟
 * @param Url    原本的url
 * @param ToUrl  时间到的时候跳转的页面
 * @constructor
 */
export function Timer(startH, startM, endH, endM, Url, ToUrl) {
    var _this = this;
    var timeTask = setInterval(function () {
        var xhr = null;
        if (window.XMLHttpRequest) {
            xhr = new window.XMLHttpRequest();
        } else { // ie
            xhr = new ActiveObject("Microsoft")
        }

        xhr.open("GET", "/", true);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            var time, date;
            if (xhr.readyState == 2) {
                time = xhr.getResponseHeader("Date");
                date = new Date(time);
                var h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                var m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
                var nowTime = `${h}:${m}:${s}`;
                console.log(nowTime);
                _this.millisecond = h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
                // 开始时间：
                _this.star = startH * 60 * 60 * 1000 + startM * 60 * 1000;
                // 结束时间
                _this.end = endH * 60 * 60 * 1000 + endM * 60 * 1000;
                if (_this.millisecond >= _this.star && _this.millisecond < _this.end) {
                    _this.$router.push({
                        path: ToUrl,
                        query: {}
                    });
                } else if (_this.millisecond > _this.end) {
                    _this.$router.push({
                        path: Url,
                        query: {}
                    });
                    clearInterval(timeTask);
                }


            }
        }


    }, 1000);


}

/**
 *get getByteLen 获取输入框的长度
 * @param {Sting} val input value
 * @returns {number} output value
 */
export function getByteLen(val) {
    let len = 0
    for (let i = 0; i < val.length; i++) {
        if (val[i].match(/[^\x00-\xff]/gi) != null) {
            len += 1
        } else {
            len += 0.5
        }
    }
    return Math.floor(len)
}

/**
 * 深度拷贝
 * @param source 拷贝的对象
 * @returns {*}
 */
export function deepClone(source) {
    if (!source && typeof source !== 'object') {
        throw new Error('error arguments', 'shallowClone')
    }
    const targetObj = source.constructor === Array ? [] : {}
    Object.keys(source).forEach(keys => {
        if (source[keys] && typeof source[keys] === 'object') {
            targetObj[keys] = deepClone(source[keys])
        } else {
            targetObj[keys] = source[keys]
        }
    })
    return targetObj
}

/**
 * 切换类名
 * @param element 元素
 * @param className 对应的类名
 */
export function toggleClass(element, className) {
    if (!element || !className) {
        return
    }
    let classString = element.className
    const nameIndex = classString.indexOf(className)
    if (nameIndex === -1) {
        classString += '' + className
    } else {
        classString =
            classString.substr(0, nameIndex) +
            classString.substr(nameIndex + className.length)
    }
    element.className = classString
}

/**
 * 将url的参数转成对象形式
 * @param url
 * @returns {*}
 */
export function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
        '"}'
    )
}
export function param(json) {
    if (!json) return ''
    return cleanArray(
        Object.keys(json).map(key => {
            if (json[key] === undefined) return ''
            return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
        })
    ).join('&')
}

/**
 * 获取url中的参数转成对象
 * @param url
 * @returns {{}}
 */
export function getQueryObject(url) {
    url = url == null ? window.location.href : url
    const search = url.substring(url.lastIndexOf('?') + 1)
    const obj = {}
    const reg = /([^?&=]+)=([^?&=]*)/g
    search.replace(reg, (rs, $1, $2) => {
        const name = decodeURIComponent($1)
        let val = decodeURIComponent($2)
        val = String(val)
        obj[name] = val
        return rs
    })
    return obj
}