import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Test from './Test'
import './style.less'
const componentMeta: ComponentMeta<typeof Test> = {
  /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
  // 标题
  title: 'Test',
  // 指明组件
  component: Test
}
export default componentMeta
export const Primary: ComponentStory<typeof Test> = () => <Test init={2}/>
