import Firebase from '../../shared/firebase.shared';
import { ExampleEnum } from '../enums/example.enum';
import { toast } from '../../shared/swal.shared';
import { Action } from '../interfaces/action.interface';

const firebase: Firebase = new Firebase();

export function setTestData(payload: Array<any>): Action {
  return {type: ExampleEnum.SET_TEST_DATA, payload};
}

export function getTestData(payload: string): Function {
  return async (dispatch: any) => {
    firebase.on(payload, (snapshot: any) => {
      dispatch(setTestData(snapshot.val()));
      toast('warning', 'Datos actualizados desde Firebase');
    });
  };
};

