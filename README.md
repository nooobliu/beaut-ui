# 开发说明

### 项目安装

`npm install`
`npm run storybook`

### 开发新组件

如果你想开发一个新组件,在 components 文件夹下新建一个文件夹即可.
具体形式可以参考 components/Test 文件夹.

### hooks

为了加快开发速度,本项目接入了 ahooks.参考:https://ahooks.gitee.io/zh-CN .当然你也可以自己定义 hooks,请编写在 components/\_hooks 文件夹中.在开发中建议不要在组件内使用过多 useEffect,如果有必要,请封装成自定义 hooks 来引入.

### 代码规范

本项目已经配置 eslint,请严格按照 eslint 中的代码规范来编写.如果 eslint 报错,并且你无法解决,可以分享到群里和群友交流.另外,请在组件的 tsx 中标明作者,详情可见 components/Test/Test.tsx 文件.

### husky 集成

本项目配置 husky 会在代码提交前对代码进行检查，存在不符合规范的代码会禁止提交

### git 规范

本项目使用 commitlint，必须满足格式规范才能提交成功，尽量保证做一件事情提交一次，不要堆积到一起提交(只是 commit，不代表要 push)，如果觉得手写规范形式过于麻烦，请使用 pnpm git-cz 替代 git commit -m "fix(account)：修复 xxx 的 bug"，不明白 commitlint 有什么用可以查阅https://github.com/conventional-changelog/commitlint
开发时，每个人开一个自己的开发分支如：dev-xxx 并在上面进行自己的业务。每次写代码前都请记得 pull 一下主分支，每次提交后都记得上 github 上提 pr。千万千万不要动不属于自己负责模块的代码，如有误操作，请立即回退

### E2E 测试

本项目采用 cypress 进行组件测试，测试时候请运行 pnpm cypress
