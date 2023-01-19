export function isString(obj: unknown): obj is string {
  return Object.prototype.toString.call(obj).includes('String')
}
export function isObject(obj: unknown): obj is Record<string, unknown> {
  return Object.prototype.toString.call(obj).includes('Object')
}
export function isArray(obj: unknown): obj is unknown[] {
  return Object.prototype.toString.call(obj).includes('Array')
}
