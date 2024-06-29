import { expect } from 'expect';
import { iteratorConcat } from 'iter-fest';

describe('iterableConcat', () => {
  it('should work', () => expect(Array.from(iteratorConcat([1, 2].values(), [3, 4].values()))).toEqual([1, 2, 3, 4]));
});
