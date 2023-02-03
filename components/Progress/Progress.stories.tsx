import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Progress from './Progress'
const componentMeta: ComponentMeta<typeof Progress> = {
  // 标题
  title: 'Progress',
  // 指明组件
  component: Progress
}
export default componentMeta
// 写成函数的形式,方便Storybook进行解析
const Template: ComponentStory<typeof Progress> = args => (
  <Progress {...args}></Progress>
)

export const Primary = Template.bind({})
// 可以如此设置默认参数
Primary.args = {
  value: 50
}
