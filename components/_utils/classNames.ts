import { isBoolean, isObject, isString } from './is'

type ClassNamesArg = string | {}
// classNames是一个非常实用的函数.他能够智能化的将组件的中props转化为类名.函数接受两项:一项为组件的前缀名,第二项为任意个字符串或者对象.
export function classNames(
  mainName: `beaut${string}`,
  ...args: ClassNamesArg[]
): string {
  const arr: string[] = []
  arr.push(mainName)
  args.forEach(v => {
    if (isString(v)) {
      arr.push(`${mainName}-${v}`)
    } else if (isObject(v)) {
      for (const vKey in v) {
        const value = vKey === 'children' ? null : v[vKey]
        if (isString(value)) {
          arr.push(`${mainName}-${value}`)
        } else if (isBoolean(value)) {
          if (value) {
            arr.push(`${mainName}-${vKey}`)
          }
        }
      }
    }
  })
  return arr.join(' ')
}
