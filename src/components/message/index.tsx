import React, { useState } from 'react'
import styles from './index.module.less'

interface msgRes {
  msg: JSX.Element
  def: (cnt: string) => void
  danger: (cnt: string) => void
  success: (cnt: string) => void
  warn: (cnt: string) => void
}
const message = (): msgRes => {
  const [type, setType] = useState('default')
  const [content, setContent] = useState('123')
  const def = (cnt: string): void => {
    setContent(cnt)
    setType('default')
  }
  const danger = (cnt: string): void => {
    setContent(cnt)
    setType('danger')
  }
  const success = (cnt: string): void => {
    setContent(cnt)
    setType('success')
  }
  const warn = (cnt: string): void => {
    setContent(cnt)
    setType('warning')
  }
  const msg = (
    <div className={styles.message}>
      <div className={styles[type]}>{content}</div>
    </div>
  )
  return {
    msg,
    danger,
    success,
    warn,
    def
  }
}
export default message
