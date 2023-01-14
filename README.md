# 开发说明
### 项目安装
`npm install`
`npm run storybook`
### 开发新组件
如果你想开发一个新组件,在components文件夹下新建一个文件夹即可.
具体形式可以参考components/Test文件夹.
### hooks
为了加快开发速度,本项目接入了ahooks.参考:https://ahooks.gitee.io/zh-CN .当然你也可以自己定义hooks,请编写在components/hooks文件夹中.在开发中建议不要在组件内使用过多useEffect,如果有必要,请封装成自定义hooks来引入.
### 代码规范
本项目已经配置eslint,请严格按照eslint中的代码规范来编写.如果eslint报错,并且你无法解决,可以分享到群里和群友交流.另外,请在组件的tsx中标明作者,详情可见components/Test/Test.tsx文件.
