import { isObject, isString } from './is'

type ClassNamesArg = string | {}

export function classNames(...args: ClassNamesArg[]): string {
  const arr: string[] = []
  args.forEach(v => {
    if (isString(v)) {
      arr.push(v)
    } else if (isObject(v)) {
      for (const vKey in v) {
        if (isString(v[vKey])) {
          arr.push(vKey)
        }
      }
    }
  })
  return arr.join(' ')
}
