# eventSubscribe_ikk


全局事件订阅系统

## 简介
该系统允许代码定义应用程序的特定事件，该事件可以传递自定义参数，自定义参数包含订阅者所需要的值。其目的是避免订阅者和发布者产生依赖关系

## 安装
``` 
# install dependencies
npm install eventSubscribe_ikk

```

## 项目结构

```
│  package.json
│  README.md
│  tsconfig.json
├─dist
│  │  DetailFunc.js
│  └─ EventSubscribe.js
└─src
   │  DetailFunc.ts
   └─ EventSubscribe.ts
   

```

## 如何发布
- 发布命令

    ```brash

    npm run release 

    ```

## 组件说明
   
- **全局工具方法**

| 方法 | 说明 | 输入 |输出|
| ------ | ------ | ------ |------|
| subscribe() | 订阅事件 | IEvent&IEventCallback | object|
| notify() | 发布事件  |IEvent&...Arg| object |
| unsubscribe() | 取消订阅事件 | IEvent&IEventCallback | object |
| unsubscribeAll() | 清空一个事件的全部回调 | IEvent&IEventCallback | object |
| clear() | 清空全部的回调事件 |  | object |

