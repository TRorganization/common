/*
  @author  SmallLuo
  @email   949123073@qq.com
  @vesion  1.0
  @description
 */
/**
 * 检验字符串
 * @param str
 * @returns {Promise<any>}
 */
export const str_init = str => {
    return new Promise((resolve, reject) => {
        if (str !== null && Object.prototype.toString.call(str).slice(8, -1) === 'String') {
            return;
        } else {
            return reject("字符串格式有误");
        }
    });

};
/**
 * 指定位置的字符
 * @param string
 * @param i
 * @returns {string}
 */
export const str_lc = (string, i) => {
    str_init(string);
    return string.charAt(i);
};
/**
 * 返回字符串的一个子串，传入参数是起始位置和结束位置。
 * @param string
 * @param start 开始位置
 * @param end   结束位置
 * @returns {string}
 */
export const str_check = (string, start, end) => {
    str_init(string);
    if (start != null && end == null) {
        return string.substring(start);
    } else {
        return string.substring(start, end);
    }
};
/**
 * 字符串截取
 * @param string
 * @param start 开始截取的位置
 * @param end   结束位置
 * @returns {T[] | SharedArrayBuffer | Uint8ClampedArray | Uint32Array | Blob | Int16Array | any}
 */
export const str_slice = (string, start, end) => {
    str_init(string);
    if (start != null && end == null) {
        return string.slice(start);
    } else {
        return string.slice(start, end);
    }
};
/**
 * 字符串搜索匹配
 * @param string
 * @param key
 * @returns {boolean}
 */
export const str_find = (string, key) => {
    str_init(string);
    if (string.search(key) >= 0) {
        return true;
    } else {
        return false;
    }
};
/**
 * 字符串转小写
 * @param string
 * @returns {string}
 */
export const str_LC = string => {
    str_init(string);
    return string.toLowerCase();
};
/**
 * 将字符串转为大写
 * @param string
 * @returns {string}
 */
export const str_UP = string => {
    str_init(string);
    return string.toUpperCase();
};
/**
 * 替换字符串
 * @param string
 * @returns {string}
 */
export const str_replace = string => {
    str_init(string);
    let a = string.substr(0, 2) + '***' + string.substr(5, string.split('').length);
    return a;
};
/**
 * 字符串转数字
 * @param string
 * @returns {number}
 */
export const str_parseInt = string => {
    str_init(string);
    return parseInt(string);
};
/**
 * 字符串转DOM
 * @param htmlString
 * @returns {Element}
 */
export const str_ToDom = htmlString => {
    var div = document.createElement("div");
    div.innerHTML = htmlString;
    return div.children[0];
};
/**
 * 字符串拼接
 * @param str1
 * @param str2
 * @returns {string}
 */
export const str_concat=(str1,str2) =>{
    return `${str1}${str2}`
}

/**
 * 数组操作方法初始化，判断是否为一个数组
 * @param Arr
 * @returns {Promise<any>}
 * @constructor
 */
export const Arr_init = Arr => {
    return new Promise((resolve, reject) => {
        if (Arr != null && Object.prototype.toString.call(Arr) === '[object Array]') {
            return;
        } else {
            return reject("数组格式有误");
        }
    });

};
/**
 * 删除数组的第一个
 * @param Arr
 * @returns {*}
 * @constructor
 */
export const Arr_shift = Arr => {
    Arr_init(Arr);
    let arr = Arr;
    arr.shift();
    return arr;
};
/**
 * 在数组前面追加元素
 * @param Arr
 * @param souce
 * @returns {*}
 * @constructor
 */
export const Arr_unshift = (Arr, souce) => {
    Arr_init(Arr);
    let arr = Arr;
    arr.unshift(souce);
    return arr;
};
/**
 * 在数组的指定位置增加元素
 * @param Arr
 * @param souce
 * @param start
 * @param ending
 * @constructor
 */
export const Arr_fill = (Arr, souce, start, ending) => {
    Arr_init(Arr);
    Arr.fill(souce, start, ending);
};
/**
 * 删除数组最后一项
 * @param Arr
 * @returns {*}
 * @constructor
 */
export const Arr_pop = Arr => {
    Arr_init(Arr);
    let arr = Arr;
    arr.pop();
    return arr;
};
/**
 * 数组末追加
 * @param Arr
 * @returns {*}
 * @constructor
 */
export const Arr_push = Arr => {
    Arr_init(Arr);
    let arr = Arr;
    arr.push();
    return arr;
};
/**
 *  两个数组连接
 * @param Arr1
 * @param Arr2
 * @returns {T[] | string}
 * @constructor
 */
export const Arr_concat = (Arr1, Arr2) => {
    Arr_init(Arr1);
    Arr_init(Arr2);
    let arr = Arr1.concat(Arr2);
    return arr;
};
/**
 * 将数组反序
 * @param Arr
 * @returns {*}
 * @constructor
 */
export const Arr_reverse = Arr => {
    Arr_init(Arr);
    let arr = Arr;
    arr.reverse();
    return arr;
};
/**
 * 将数组进行排序
 * @param Arr
 * @returns {*}
 * @constructor
 */
export const Arr_sort = Arr => {
    Arr_init(Arr);
    let arr = Arr;
    arr.sort();
    return arr;
};
/**
 * 截取数组元素
 * @param Arr
 * @param start
 * @param end
 * @returns {T[] | SharedArrayBuffer | Uint8ClampedArray | Uint32Array | Blob | Int16Array | *}
 * @constructor
 */
export const Arr_slice = (Arr, start, end) => {
    Arr_init(Arr);
    let arr = Arr;
    let a = arr.slice(start, end);
    return a;
};
/**
 * 判断元素存在数组中
 * @param Arr
 * @param child
 * @returns {*}
 * @constructor
 */
export const Array_Judge = (Arr, child) => {
    Arr_init(Arr);
    var target;
    if (Arr.indexOf(child) == 0) {
        target = true;
    } else if (Arr.indexOf(child) == -1) {
        target = false;
    }
    return target;
};
/**
 * 判断元素存在数组中
 * @param Arr
 * @param child
 * @constructor
 */
export const Array_Judge2 = (Arr, child) => {
    Arr_init(Arr);
    Arr.find((value, index, arr) => {
        return value == child;
    });
};
/**
 * 数组转对象
 * @param Arr
 * @returns {{}}
 * @constructor
 */
export const Arr_ToObj = Arr => {
    Arr_init(Arr);
    let obj = {};
    Arr.forEach(item => {
        obj[item] = item;
    });
    return obj;
};
/**
 * 判断两个数组是否相等
 * @param arr1
 * @param arr2
 * @returns {boolean}
 */
export  const arrayEqual=(arr1, arr2)=>{
    if(arr1 === arr2) return true;
    if(arr1.length != arr2.length) return false;
    for(var i = 0; i < arr1.length; ++i) {
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}
/**
 * 给数组_对象中追加对应的key
 * @param Arr
 * @param name
 * @param key
 * @returns {*}
 * @constructor
 */
export const Arr_add=(Arr,name,key)=>{
    Arr_init(Arr);
    Arr.forEach(data=>{
        data.name=key;
    })
    return Arr;
}
/**
 * 删除数组_对象对应的key
 * @param Arr
 * @param name
 * @returns {Promise<any>}
 * @constructor
 */
export const Arr_del=(Arr,name)=>{
    Arr_init(Arr);
    return new Promise((resolve,reject)=>{
        Arr.forEach(data=>{
            if(data.hasOwnProperty(name) == true){
                delete data[name];
            }else {
                reject("传递的key有误")
            }

        })
        resolve(Arr);
    })
}
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const getIntersection = (arr1, arr2) => {
    let len = Math.min(arr1.length, arr2.length)
    let i = -1
    let res = []
    while (++i < len) {
        const item = arr2[i]
        if (arr1.indexOf(item) > -1) res.push(item)
    }
    return res
}
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => {
    return Array.from(new Set([...arr1, ...arr2]))
}
/**
 * 删除数组_对象对应的key
 * @param Obj
 * @returns {Promise<any>}
 * @constructor
 */
export const Obj_init = Obj => {
    return new Promise((resolve, reject) => {
        if (Obj != null && Object.prototype.toString.call(Obj) === '[object Object]') {
            return;
        } else {
            return reject("对象格式有误");
        }
    });

};
/**
 * 对象增加属性
 * @param Obj
 * @param key
 * @param value
 * @returns {*}
 * @constructor
 */
export const Object_add = (Obj, key, value) => {
    Obj_init(Obj);
    Obj[key] = value;
    return Obj;
};
/**
 * 判断对象是否存在该属性
 * @param Obj
 * @param key
 * @returns {boolean}
 * @constructor
 */
export  const Object_in=(Obj,key) => {
    Obj_init(Obj);
    return key in Obj ? true : false;
}
/**
 * 删除对象中的key
 * @param Obj
 * @param key
 * @returns {*}
 * @constructor
 */
export const Object_delect = (Obj, key) => {
    this.Obj_init(Obj);
    delete Obj[key];
    return Obj;
};
/**
 * 判断对象是否存在
 * @param Object
 * @param child
 * @returns {*}
 * @constructor
 */
export const Object_Judge = (Object, child) => {
    Obj_init(Object);
    var Object_Boolen;
    if (Object.hasOwnProperty(child) == true) {
        Object_Boolen = true;
    } else if (Object.hasOwnProperty(child) == false) {
        Object_Boolen = false;
    }
    return Object_Boolen;
};
/**
 * 两个对象属性比较
 * @param obj1
 * @param obj2
 * @param key
 * @returns {boolean}
 * @constructor
 */
export const Object_quite = (obj1, obj2, key) => {
    Obj_init(obj1);
    Obj_init(obj2);
    return Object.is(obj1[key], obj2[key]);
};
/**
 * 合并对象
 * @param obj1
 * @param obj2
 * @returns {any & any}
 * @constructor
 */
export const Object_assign = (obj1, obj2) => {
    Obj_init(obj1);
    Obj_init(obj2);
    let NewObject = Object.assign(obj1, obj2);
    return NewObject;
};
/**
 * 修改对象里面的属性
 * @param obj
 * @param key
 * @param value
 * @returns {*}
 * @constructor
 */
export const Object_revise = (obj, key, value) => {
    Obj_init(obj);
    obj[key] = value;
    return obj;
};
/**
 * 对象转成数组
 * @param Obj
 * @returns {Array}
 * @constructor
 */
export const Obj_ToArr = Obj => {
    this.Obj_init(Obj);
    let array = [];
    for (let key in Obj) {
        array.push({
            data: key
        });

    }
    return array;
};
/**
 * 判断两个对象是否相等
 * @param obj1
 * @param obj2
 * @returns {*}
 */
export const diff = (obj1,obj2) =>{
    var o1 = obj1 instanceof Object;
    var o2 = obj2 instanceof Object;
    if(!o1 || !o2){/*  判断不是对象  */
        return obj1 === obj2;
    }

    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
        //Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
    }

    for(var attr in obj1){
        var t1 = obj1[attr] instanceof Object;
        var t2 = obj2[attr] instanceof Object;
        if(t1 && t2){
            return diff(obj1[attr],obj2[attr]);
        }else if(obj1[attr] !== obj2[attr]){
            return false;
        }
    }
    return true;
}
/**
 * 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
 * 如果没有传入key这个参数，则判断obj对象是否有键值对
 * @param obj
 * @param key
 * @returns {*}
 */
export const hasKey = (obj, key) => {
    if (key) return key in obj
    else {
        let keysArr = Object.keys(obj)
        return keysArr.length
    }
}

/**
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 */
export const objEqual = (obj1, obj2) => {
    const keysArr1 = Object.keys(obj1)
    const keysArr2 = Object.keys(obj2)
    if (keysArr1.length !== keysArr2.length) return false
    else if (keysArr1.length === 0 && keysArr2.length === 0) return true
    /* eslint-disable-next-line */
    else return !keysArr1.some(key => obj1[key] != obj2[key])
}
/**
 * json初始化
 * @param json
 * @returns {Promise<any>}
 * @constructor
 */

export const Json_init = json => {
    return new Promise((resolve, reject) => {
        if (JSON.parse(json) == true) {
            return;
        } else {
            return reject("json格式错误");
        }
    });

};
/**
 *  json转成数组
 * @param json
 * @returns {any[]}
 */
export const json_ToArr = json => {
    Json_init(json);
    var arr = Array.from(json);
    return arr;
};
/**
 * 从一个对象中解析出字符串
 * @param obj
 * @returns {string}
 * @constructor
 */
export const JSON_str= obj => {
    let str=JSON.stringify(obj);
    return str;
}
/**
 * 从一个字符串解析成json
 * @param str
 * @returns {any}
 * @constructor
 */
export const JSON_parse = str => {
    let json=JSON.parse(str);
    return json;
}
/**
 * 遍历初始化
 * @param arr
 * @returns {Promise<any>}
 */
export const foreact_init = arr => {
    return new Promise((resolve, reject) => {
        if (Object.prototype.toString.call(arr) ==='[object Array]') {
            return;
        } else {
            return reject("传递的数据类型有误");
        }
    });


};
/**
 * for循环，返回时一个对象
 * @param arr
 * @returns {{}}
 */
export const for_arr = arr => {
    foreact_init(arr);
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i];
    }
    return obj;
};
/**
 * 返回时一个对象
 * @param arr
 * @returns {{}}
 */
export const for_of = arr => {
    foreact_init(arr);
    var obj = {};
    for (let item of arr) {
        obj[item] = item;

    }
    return obj;
};
/**
 * 返回是一个对象
 * @param arr
 * @returns {{}}
 */
export const for_In = arr => {
    foreact_init(arr);
    var obj = {};
    for (let item in arr) {
        obj[item] = item;
    }
    return obj;
};
/**
 * 返回时一个对象
 * @param arr
 * @returns {{}}
 */
export const for_entries = arr => {
    foreact_init(arr);
    var obj = {};
    for (let [index, val] of arr.entries()) {
        obj[index] = val;
    }
    return obj;
};
// export const forEach = (arr, fn) => {
//     if (!arr.length || !fn) return
//     let i = -1
//     let len = arr.length
//     while (++i < len) {
//         let item = arr[i]
//         console.log(item);
//         fn(item, i, arr)
//     }
// }
/**
 * 返回时一个对象
 * @param arr
 * @returns {{}}
 */
export const map = arr => {
    foreact_init(arr);
    var obj = {};
    arr.map((data) => {
        obj[data] = data;
    });
    return obj;
};
/**
 * 返回时一个对象
 * @param arr
 * @returns {{}}
 */
export  const some = arr => {
    foreact_init(arr);
    var obj = {};
    arr.some(x=>{
        obj[x]=x;
    });
    return obj;

}
/**
 * Set数据结构应用,可以去重
 * @param arr
 * @returns {Set<any>}
 * @constructor
 */
export  const Set_arr = arr => {
    Arr_init(arr);
    return new Set(arr);
}
/**
 * set增加
 * @param arr
 * @param key
 * @returns {Set<any>}
 * @constructor
 */
export  const Set_add = (arr,key) =>{
    Arr_init(arr);
    let setArr=new Set(arr);
    return setArr.add(key)
}
/**
 * set删除
 * @param arr
 * @param key
 * @returns {any}
 * @constructor
 */
export  const Set_delete = (arr,key) =>{
    Arr_init(arr);
    let setArr=new Set(arr);
    return setArr.has(key)?setArr.delete(key):setArr
}
/**
 * set 查找
 * @param arr
 * @param key
 * @returns {boolean}
 * @constructor
 */
export  const Set_has =(arr,key) => {
    Arr_init(arr);
    let setArr=new Set(arr);
    return setArr.has(key);
}
/**
 * 清除set
 * @param arr
 * @constructor
 */
export  const Set_clear = arr =>{
    Arr_init(arr);
    let setArr=new Set(arr);
    return setArr.clear();
}
/**
 * set 遍历循环，返回一个对象
 * @param arr
 * @returns {{}}
 * @constructor
 */
export  const Set_for = arr => {
    Arr_init(arr);
    var obj = {};
    let setArr=new Set(arr);
    for (let item of setArr){
        obj[item]=item;
    }
    return obj;
}
/**
 * set 遍历循环，返回一个对象
 * @param arr
 * @returns {{}}
 * @constructor
 */
export const Set_forEach = arr =>{
    Arr_init(arr);
    var obj={};
    let setArr=new Set(arr);
    setArr.forEach(item =>{
        obj[item]=item;
    })
    return obj;
}
/**
 * 获取set的长度
 * @param arr
 * @returns {number}
 * @constructor
 */
export const Set_size= arr =>{
    Arr_init(arr);
    let setArr=new Set(arr);
    return setArr.size;

}
/**
 *  map函数的使用
 *  增加
 * @param key
 * @param val
 * @returns {Map<any, any>}
 */

export const mapSet=(key,val)=>{
    let map=new Map();
    return map.set(key,val)
}
/**
 * 获取
 * @param key
 * @param val
 */
export const mapGet=(key,val)=>{
    return key.get(val)
}
/**
 * 删除
 * @param key
 * @param val
 */
export const mapDelete=(key,val)=>{
    return key.delete(val);
}
/**
 * 查找
 * @param key
 * @param val
 */
export const mapHas=(key,val) =>{
    return key.has(val);
}
/**
 * 清除
 * @param key
 */
export  const mapClear=(key)=>{
    return key.clear();
}
/**
 * Proxy代理方法的使用
 * @returns {{add: add, name: string}}
 */
export  const proxy=()=>{
    return new Proxy({
        // 被处理（相当于data）
        add:function () {
            console.log('add');
        },
        name:''
    },{
        // 处理前钩子函数改变第一个函数的值这里相当于created
        get:function (target,key) {
            console.log("hahah");
            return target[key];
        },
        set:function (target,key,value,receiver) {
            console.log(`    setting ${key} = ${value}`);
            return target[key] = value;
        }
    })

}

/**
 * 检测类名
 * @param ele
 * @param name
 */
export const hasClass = (ele, name) => {
    return ele.className.match(new RegExp('(\\s|^)' + name + '(\\s|$)'));
};
/**
 * 添加类名
 * @param ele
 * @param name
 */
export const addClass = (ele, name) => {
    if (!this.hasClass(ele, name)) ele.className += " " + name;
};
/**
 * 删除类名
 * @param ele
 */
export const removeClass = ele => {
    if (this.hasClass(ele, name)) {
        var reg = new RegExp('(\\s|^)' + name + '(\\s|$)');
        ele.className = ele.className.replace(reg, '');
    }
};
/**替换类名
 * @param ele
 * @param oldName
 * @param newName
 */
export const replaceClass = (ele, oldName, newName) => {
    this.removeClass(ele, oldName);
    this.addClass(ele, newName);
};
/**
 * 获取兄弟节点
 * @param ele
 * @returns {Array}
 */
export const siblings = ele => {
    //console.log(ele.parentNode)获取父节点
    var chid = ele.parentNode.children, eleMatch = [];
    for (var i = 0, len = chid.length; i < len; i++) {
        if (chid[i] != ele) {
            eleMatch.push(chid[i]);
        }
    }
    return eleMatch;
};

/*获取行间样式属性*/
/*
 * obj: dom节点
 * attr:节点属性
 * */
export const getStyle = (obj, attr) => {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
};
/**
 * 去除空格
 * @param {str}
 * @param {type}
 *    type: 1-所有空格 2-前后空格 3-前空格 4-后空格
 * @return {String}
 */
export const trim = (str, type) => {
    type = type || 1;
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
};
/**
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function () {
    if (document.addEventListener) {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler)
            }
        }
    }
})()

/**
 * @description 解绑事件 off(element, event, handler)
 */
export const off = (function () {
    if (document.removeEventListener) {
        return function (element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler)
            }
        }
    }
})()




