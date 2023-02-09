// author: yoshino
import { getPrefix } from '../_utils/prefix'
import React, { useEffect, useRef } from 'react'
import './style.less'
import useCounter from 'ahooks/lib/useCounter'
import { classNames } from '../_utils/classNames'
import { useInterval, useUpdate } from 'ahooks'

interface ProgressProps {
  showText?: boolean
  colorful?: boolean
  value: number
  size?: 'small' | 'large' | 'middle'
  color?: 'primary' | 'secondary' | 'tertiary'
  onClick?: (e: MouseEvent) => void
}

function Progress(props: ProgressProps): JSX.Element {
  const [percent, { set }] = useCounter(props.value, { min: 0, max: 100 })
  const color = useRef<ProgressProps['color']>(props.color)
  const update = useUpdate()
  useInterval(
    () => {
      if (props.colorful !== true) return
      switch (color.current) {
        case 'primary':
          color.current = 'secondary'
          break
        case 'secondary':
          color.current = 'tertiary'
          break
        case 'tertiary':
          color.current = 'primary'
          break
        case undefined:
          color.current = 'primary'
      }
      update()
    },
    1000,
    { immediate: true }
  )
  useEffect(() => {
    set(props.value)
  }, [props.value])
  const mainName = getPrefix('progress')
  return (
    <div className={classNames(mainName, props, { color: color.current })}>
      <div className={`${mainName}-bar-container`}>
        <div
          className={`${mainName}-width-bar`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className={`${mainName}-text`}>
        {props.showText === true && `${percent}%`}
      </div>
    </div>
  )
}

export default Progress
