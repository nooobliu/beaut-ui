// author: yoshino
import { getPrefix } from '../_utils/prefix'
import { classNames } from '../_utils/classNames'
import React from 'react'
import './style.less'
interface ProgressProps {
  size?: 'small' | 'middle' | 'large'
  type?: 'primary' | 'default' | 'text' | 'link'
  shape?: 'default' | 'circle'
  onClick?: (e: MouseEvent) => void
  children?: string
}

function Progress(props: ProgressProps): JSX.Element {
  const mainName = getPrefix('progress')
  return <div className={classNames(mainName, props)}>{props.children}</div>
}

export default Progress
