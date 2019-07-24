import { createActions } from 'reduxsauce';
import {
  IStartupActionCreators,
  IStartupActionTypes,
} from '../Constants/Types';

/* ------------- Types and Action Creators ------------- */

const {
  Types,
  Creators,
}: {
  Types: IStartupActionTypes;
  Creators: IStartupActionCreators;
} = createActions({
  startup: null,
});

export const StartupTypes = Types;
export default Creators;
