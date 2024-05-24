/**
 * Returns the index of the first element in the iterable where predicate is true, and -1
 * otherwise.
 *
 * @param predicate find calls predicate once for each element of the iterable, in ascending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
 *
 * @param thisArg If provided, it will be used as the this value for each invocation of
 * predicate. If it is not provided, undefined is used instead.
 */
export function iterableFindIndex<T>(
  iterable: Iterable<T>,
  predicate: (value: T, index: number, obj: Iterable<T>) => unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thisArg?: any
): number {
  let index = 0;

  if (typeof predicate !== 'function') {
    throw new TypeError(`${predicate} is not a function`);
  }

  const boundPredicate = predicate.bind(thisArg);

  for (const value of iterable) {
    if (boundPredicate(value, index, iterable)) {
      return index;
    }

    index++;
  }

  return -1;
}
