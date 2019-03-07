import fetchQuotes from './fetchQuotes';


export default function* rootSaga() {
  return yield* [fetchQuotes()];
}
