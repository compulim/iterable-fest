import { expect } from 'expect';
import { readableStreamValues } from 'iter-fest';

describe('readableStreamValues', () => {
  it('should work', async () => {
    const readableStream = new ReadableStream({
      start(controller) {
        controller.enqueue(1);
        controller.enqueue(2);
        controller.close();
      }
    });

    const values = [];

    for await (const value of readableStreamValues(readableStream)) {
      values.push(value);
    }

    expect(values).toEqual([1, 2]);
  });
});
