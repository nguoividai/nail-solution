import { Effect, SimpleEffect } from 'redux-saga/effects';

export type ActionSaga<T = null> = {
  type: string;
  payload?: T | null;
};

export type ReducerSaga<T> = (state: T, actions: ActionSaga<T>) => T;
