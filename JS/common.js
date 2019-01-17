/*
* authod:TR
* Time:2019/1/17
* vesion:1.0
* */


/**
 * @getdayTime 获取当天时间年月日
 * @returns {string} 218-01-01
 */
export const getdayTime = () => {
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
    var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
    var dateStr = year + "-" + month + "-" + day;
    return dateStr;
};
