import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Test from './Test'
const componentMeta: ComponentMeta<typeof Test> = {
  // 标题
  title: 'Test',
  // 指明组件
  component: Test,
  // 指定控制类型.详见:https://storybook.js.org/docs/react/essentials/controls#annotation
  argTypes: {
    init: {
      control: { type: 'number', min: 1, max: 30, step: 2 }
    },
    color: {
      control: { type: 'radio', options: ['default', 'red', 'green', 'yellow'] }
    }
  }
}
export default componentMeta
const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />

export const Primary = Template.bind({})
export const Second = Template.bind({})
Primary.args = {
  init: 2
}
