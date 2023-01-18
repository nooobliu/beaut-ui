// author:yoshino
import React from 'react'
import { useCounter } from 'ahooks'
import { classNames } from '../_utils/classNames'
import './style.less'
interface TestProps {
  init?: number
  color?: 'red' | 'green' | 'yellow' | 'default'
}

export default function Test ({ init = 0, color = 'default' }: TestProps): JSX.Element {
  const [current, { inc, dec }] = useCounter(init)
  return (
        <div className={classNames('test', color)}>
          <p>{'这是一个测试组件.你可以点击加减按钮,进行数值运算.'}</p>
          <button onClick={() => { inc() }}>+</button>
          <button onClick={() => { dec() }}>-</button>
          <div>{current}</div>
        </div>
  )
}
