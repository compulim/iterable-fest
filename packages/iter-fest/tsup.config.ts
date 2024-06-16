import { defineConfig } from 'tsup';

export default defineConfig([
  {
    dts: true,
    entry: {
      'iter-fest': './src/index.ts',
      'iter-fest.asyncGeneratorWithLastValue': './src/asyncGeneratorWithLastValue.ts',
      'iter-fest.asyncIteratorMap': './src/asyncIteratorMap.ts',
      'iter-fest.asyncIteratorToAsyncIterable': './src/asyncIteratorToAsyncIterable.ts',
      'iter-fest.generatorWithLastValue': './src/generatorWithLastValue.ts',
      'iter-fest.iterableWritableStream': './src/iterableWritableStream.ts',
      'iter-fest.iteratorAt': './src/iteratorAt.ts',
      'iter-fest.iteratorConcat': './src/iteratorConcat.ts',
      'iter-fest.iteratorDrop': './src/iteratorDrop.ts',
      'iter-fest.iteratorEntries': './src/iteratorEntries.ts',
      'iter-fest.iteratorEvery': './src/iteratorEvery.ts',
      'iter-fest.iteratorFilter': './src/iteratorFilter.ts',
      'iter-fest.iteratorFind': './src/iteratorFind.ts',
      'iter-fest.iteratorFindIndex': './src/iteratorFindIndex.ts',
      'iter-fest.iteratorFindLast': './src/iteratorFindLast.ts',
      'iter-fest.iteratorFindLastIndex': './src/iteratorFindLastIndex.ts',
      'iter-fest.iteratorFlatMap': './src/iteratorFlatMap.ts',
      'iter-fest.iteratorForEach': './src/iteratorForEach.ts',
      'iter-fest.iteratorFrom': './src/iteratorFrom.ts',
      'iter-fest.iteratorIncludes': './src/iteratorIncludes.ts',
      'iter-fest.iteratorIndexOf': './src/iteratorIndexOf.ts',
      'iter-fest.iteratorJoin': './src/iteratorJoin.ts',
      'iter-fest.iteratorKeys': './src/iteratorKeys.ts',
      'iter-fest.iteratorMap': './src/iteratorMap.ts',
      'iter-fest.iteratorReduce': './src/iteratorReduce.ts',
      'iter-fest.iteratorSlice': './src/iteratorSlice.ts',
      'iter-fest.iteratorSome': './src/iteratorSome.ts',
      'iter-fest.iteratorTake': './src/iteratorTake.ts',
      'iter-fest.iteratorToArray': './src/iteratorToArray.ts',
      'iter-fest.iteratorToIterable': './src/iteratorToIterable.ts',
      'iter-fest.iteratorToSpliced': './src/iteratorToSpliced.ts',
      'iter-fest.iteratorToString': './src/iteratorToString.ts',
      'iter-fest.observable': './src/Observable.ts',
      'iter-fest.observableFromAsync': './src/observableFromAsync.ts',
      'iter-fest.observableSubscribeAsReadable': './src/observableSubscribeAsReadable.ts',
      'iter-fest.readableStreamFrom': './src/readableStreamFrom.ts',
      'iter-fest.readerValues': './src/readerValues.ts',
      'iter-fest.symbolObservable': './src/SymbolObservable.ts'
    },
    format: ['cjs', 'esm'],
    sourcemap: true
  }
]);
