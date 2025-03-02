import {takeLatest, all, call, put} from 'redux-saga/effects'
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utile";
import {fetchCategoriesFailure, fetchCategoriesSuccess} from "./category.action";
import CATEGORIES_ACTION_TYPES from "./category.type";


export function* fetchCategoriesStartAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoriesStartAsync)
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)])
}