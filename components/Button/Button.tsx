// author: yoshino
import { getPrefix } from '../_utils/prefix'
import { classNames } from '../_utils/classNames'
import React from 'react'
import './style.less'
interface ButtonProps {
  size?: 'small' | 'middle' | 'large'
  type?: 'primary' | 'default' | 'text' | 'link'
  shape?: 'default' | 'circle'
  onClick?: (e: MouseEvent) => void
  children?: string
}

function Button(props: ButtonProps): JSX.Element {
  const mainName = getPrefix('button')
  return (
    <button className={classNames(mainName, props)}>{props.children}</button>
  )
}

export default Button
