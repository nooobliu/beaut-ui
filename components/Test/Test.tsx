// author:yoshino
import React from 'react'
import { useCounter } from 'ahooks'
interface TestProps {
  init?: number
}

export default function Test ({ init = 0 }: TestProps): JSX.Element {
  const [current, { inc, dec }] = useCounter(init)
  return (
        <div className="test-box">
          <p>{'这是一个测试组件.你可以点击加减按钮,进行数值运算.'}</p>
          <button onClick={() => { inc() }}>+</button>
          <button onClick={() => { dec() }}>-</button>
          <div>{current}</div>
        </div>
  )
}
