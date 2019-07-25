import { put, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

// process STARTUP actions
export function* startup(api) {
  try {
    const apiResponse = yield api({
      method: 'GET',
      url: '/todos/1',
    });
    console.log('api response ', apiResponse);
  } catch (error) {
    console.log('error ', error);
  }
}
