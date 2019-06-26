import { Action } from "../interfaces/action.interface";
import { ExampleEnum } from '../enums/example.enum';

export const testData = (state = {}, action: Action) => {
  switch(action.type) {
    case ExampleEnum.SET_TEST_DATA: return action.payload;
    default: return state;
  }
}