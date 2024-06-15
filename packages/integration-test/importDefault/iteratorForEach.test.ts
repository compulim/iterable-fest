import { iteratorForEach } from 'iter-fest';

test('iteratorForEach should work', () => {
  const callbackfn = jest.fn();

  iteratorForEach([1, 2, 3].values(), callbackfn);

  expect(callbackfn).toHaveBeenCalledTimes(3);
});
