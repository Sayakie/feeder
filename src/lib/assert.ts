/**
 * Asserts union typed object to single type.
 *
 * @template T
 * @param {unknown} unionObject object that to make aassert to single type.
 * @returns {T}
 */
export function assert<T>(unionObject: unknown): asserts unionObject is T {
  return
}
