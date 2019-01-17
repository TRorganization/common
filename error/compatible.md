### 兼容性处理方法
```
   兼容ES6
    "babel": "^6.23.0",
    "babel-core": "^6.23.1",
    "babel-loader": "^6.2.4",
    "babel-plugin-transform-runtime": "^6.12.0",
    "babel-preset-es2015": "^6.9.0"
    
    入口引入：
    import 'babel-polyfill';
    import Es6Promise from 'es6-promise';
    require('es6-promise').polyfill();
    Es6Promise.polyfill();
    
```
 ### input兼容问题
 ```
  安卓端写input type="button"
  ios端input type="button" 样式不起效果，或者样式颜色浅
 ```
 
 ### 公众号兼容性问题
 ```
   flex兼容问题
   解决方案：
     autoprefixe插件 加入头前缀
   或者手动：
      display: flex;
      display:-webkit-box;
      display:-webkit-flex;
      
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
 ```
 ### 滑动条
 ```
  页面超出100%：
    安卓：oveflow:auto 滑动不会卡顿
    ios：卡顿现象
    
  解决方法：
    下载：
        npm install better-scroll --save-dev
    加入：
        import BScroll from 'better-scroll';
    初始化调用：
        this.Scroll();
    方法：
        /*
         @this.$refs.menuWrapper 包裹着遍历子元素的大盒子
        */
        Scroll(){
            let menuScroll=new BScroll(this.$refs.menuWrapper,{
                click:true,
                scrollY: true,
                probeType:3
                });                    
        }  
 ```