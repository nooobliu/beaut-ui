import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'
const componentMeta: ComponentMeta<typeof Button> = {
  // 标题
  title: 'Button',
  // 指明组件
  component: Button
}
export default componentMeta
const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>测试</Button>
)

export const Primary = Template.bind({})
