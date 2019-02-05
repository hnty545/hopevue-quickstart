# hopevue

hopevue 是支持 H5 与微信小程序（MP）跨平台的开发与构建框架。基本思想是数据层、逻辑层复用，UI 界面各自独立实现。

- `mpvue`：通过 mpvue 获得使用 vue 编写 MP 的体验。
- `vant`、`vant-weapp`：选择 vant、vant-weapp 均出自有赞，控件的使用方式相对统一。
- `vue-router`：H5 方面通过 vue-router 管理路由。
- `mpvue-router-patch`：MP 方面通过 mpvue-router-patch 达到与 vue-router 类似的路由使用方式。
- `vuex`：集成 vuex 管理数据流。
- `axios`：集成 axios 处理数据接口调用。
- `async-validator`：集成 async-validator 处理表单数据效验。
- `eruda`：H5 控制台调试工具。

## 构建路径

### 构建命令

package.json 中定义了若干命令

- H5  
  调试：dev-[环境 dev、test、prod]  
  打包：build-[环境 dev-test-prod]
- MP  
  调试：暂时还没有调试方法
  打包：build-[环境 dev、test、prod]-mp

### 构建入口

- H5：main.js、App.vue
- MP：main-mp.js、App-mp.vue

### 构建配置

- H5：build
- MP：build-mp

## 开发方式

### 环境变量

- 在 config 下的 base.env.js、dev.env.js、test.env.js、prod.env.js 中定义了若干环境变量。

  `RUN_TYPE`：编译方式 [ build 、 dev ]  
  `TARGET_PLATFORM`：编译平台 [ h5 、 mp ]  
  `NODE_ENV`：接口环境 [ development 、 testing 、 production ]  
  `CUSTOM_PARAMS`：自定义参数，其中`DEBUG` 在 RUN_TYPE = build & NODE_ENV = productiond 时为 true，其他为 false；`baseURL`是解析之后的接口地址；`debugApiPath`是解析之后接口代理名称。
  `*已存在的参数不要修改`

- 可以通过在 `CUSTOM_PARAMS` 对象里新增变量来进行扩展，在代码中通过 `process.env.CUSTOM_PARAMS` 方式使用他。

### 数据接口

- 在 `config/baseUrl.js` 中支持配置多个接口来源，并支持为每个接口来源配置 dev、test、prod 环境地址。
- 在 apis 中通过 `baseUrl.api1.name` 指定接口来源。

### 数据流

- 在 store 下实现数据流，使用 vuex 模块定义，`state` 定义数据对象，`mutations` 定义数据改变方法，`actions` 定义数据逻辑，`getters` 定义数据获取。
- 遵循 vuex 规范，务必使用`mutations`方式修改数据，`actions`中通常处理从接口获取数据并加以处理。

### UI 界面

- 在 views 下实现 UI 界面，一个界面新建一个目录，其中 H5 界面命名为 `index.vue`，MP 界面命名为 `index-mp.vue`，并以 `main.js` 为入口。
- 在 components 下实现组件，通常也需要分 H5 和 MP 两个版本来实现。
- H5 的 vant 组件已使用 `babel-plugin-import` 动态载入。
- MP 的 weapp 组件在 static 下，通过 `App-mp.vue` 中 config 统一载入。
  `*Notify组件修改了源码，改变了属性名与vant的一致`
- plugins 中提供了 `LoadingTask` 封装了界面加载提示，需要将界面中 `Notify` 传入 `initNotify(Notify)`来初始化。提供了 `NotifyHelper` 封装 vant 的 `Notify` 组件，可以在界面组件中调用，使用方法可看 demo 界面，同样需要将界面中 `Notify` 传入 `initNotify(Notify)`来初始化。

### 路由

- H5 的路由定义在 `router` 中，目前 H5 是 `SPA` 方式实现。
- MP 的路由定义在 `App-mp.vue` 中，通过 `mpvue-router-patch` 实现与 `vue-router` 类似的使用方式。

## 感言

本人是 H5 技术的初学者，之前做过后台开发，现在主要是做安卓开发。对于 H5 技术栈，我主要学习途径是查阅各个技术框架的官方文档，以及从 git 上的开源项目吸取经验。  
很庆幸有 github 这么好的开源学习环境，身边做 H5 开发的朋友不多，遇到问题在网络群里交流，或者从搜索引擎查询，有时候也很难得到解决，把官方文档的基础了解一遍再从开源项目入手，从各位大神的项目里学到很多，这种方式很有效率，让我比较快的入门。
