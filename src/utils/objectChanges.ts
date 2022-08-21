import { each, indexOf, isObject } from 'lodash'

type obj = Record<string, any>
/**
 *
 * @param a object with  properties to compare
 * @param b base object to compare against
 * @returns object with properties that have changed in @param a
 */

function objectChanges(a: obj, b: obj) {
  if (!a) return null
  if (!b) return a
  if (!Object.keys(a).length) return null
  if (!Object.keys(b).length) return a
  const r: obj = {}
  each(a, (v, k) => {
    if (b[k] === v) return
    if (Array.isArray(v)) {
      r[k] = compareArrays(v, b[k])
      return
    }
    r[k] = isObject(v)
      ? objectChanges(v, b[k])
      : v
  })
  return r
}

export function compareArrays(a: any[], b: any[]) {
  if (!Array.isArray(a) || !Array.isArray(b)) return null
  if (!a.length) return null
  if (!b.length) return a
  const r = []
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) continue
    isObject(a[i])
      ? r.push(objectChanges(a[i], b[indexOf(b, a[i])]))
      : r.push(a[i])
  }
  // eslint-disable-next-line no-console
  console.log(r)
  return r
}

// const obj1 = {
//   a: 3, b: 2, c: {
//     s: 'c', e: {
//     r:0, y:[1,2,3, {a:1, b:3}]
//   }
// } };
// const obj2 = {
//   a: 1, b: 2, c: {
//     q: 1, w: 2, e: {
//       r: 1, t: 2, y: [1,2, {a:1, b:3}]
//   }
// } };
