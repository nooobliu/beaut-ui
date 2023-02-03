// author: yoshino
import { getPrefix } from '../_utils/prefix'
import React, { useEffect } from 'react'
import './style.less'
import useCounter from 'ahooks/lib/useCounter'
import { classNames } from '../_utils/classNames'

interface ProgressProps {
  showText?: boolean
  value: number
  size?: 'small' | 'large' | 'middle'
  color?: 'primary' | 'secondary' | 'tertiary'
  onClick?: (e: MouseEvent) => void
}

function Progress(props: ProgressProps): JSX.Element {
  const [percent, { set }] = useCounter(props.value, { min: 0, max: 100 })
  useEffect(() => {
    set(props.value)
  }, [props.value])
  const mainName = getPrefix('progress')
  return (
    <div className={classNames(mainName, props)}>
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
