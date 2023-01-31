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
const Template: ComponentStory<typeof Progress> = args => (
  <Progress {...args}></Progress>
)

export const Primary = Template.bind({})
