/* eslint-disable @typescript-eslint/no-var-requires */
const { iteratorIndexOf } = require('iter-fest');

test('iteratorIndexOf should work', () => expect(iteratorIndexOf([1, 2, 3].values(), 2)).toBe(1));
