import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCountries } from '../../api/home';
import { fetchCountriesRequest, fetchCountriesSuccess, fetchCountriesFailure } from '../slices/homeSlice';

function* fetchCountriesSaga(): Generator {
  try {
    const countries = yield call(fetchCountries);
    yield put(fetchCountriesSuccess(countries as any[]));
  } catch (error: any) {
    yield put(fetchCountriesFailure(error.message));
  }
}

export default function* homeSaga() {
  yield takeLatest(fetchCountriesRequest.type, fetchCountriesSaga);
}
