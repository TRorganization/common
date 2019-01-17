
### 项目目录说明
```
   rect-multi-page
         
         |--config
         |--node_modules
         |--public
         |--scripts             
         |--src
             |--component                   公共组件存放目录
             |--root                        多入口目录
                 |--admin                   入口一
                     |--App.css             组件样式
                     |--App.js              组件入口
                     |--index.htm           挂载模板
                     |--index.js            全局入口
                 |--index                   入口二
                     |--App.css             组件样式
                     |--App.js              组件入口
                     |--index.htm           挂载模板
                     |--index.js            全局入口
                 |--user                    入口三
                     |--App.module.css      局部组件样式（不会覆盖全局样式）
                     |--App.js              组件入口
                     |--index.htm           挂载模板
                     |--index.js            全局入口
             |--static                      静态文件存放目录
                 |--reset                   初始化样式        
         
         
```
### git地址
```
 https://github.com/luoxiapeng/react-multi-page
```

