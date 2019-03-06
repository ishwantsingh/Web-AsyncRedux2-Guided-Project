import { watchRequests } from './requests';


export default function* rootSaga() {
  return yield [
    watchRequests(),
  ];
}
