// 获取beaut前缀,eg: 传入button => beaut-button
export function getPrefix(name: string): `beaut-${string}` {
  return `beaut-${name}`
}
export function getNameFn(name: string) {
  return function getCs(suffix: string) {
    return `beaut-${name}-${suffix}`
  }
}
