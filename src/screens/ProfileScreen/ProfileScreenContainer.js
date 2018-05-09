import { compose, hoistStatics, withHandlers } from 'recompose';
import ProfileScreenView from './ProfileScreenView';
import screens from '../../navigation/screens';

const enhancer = compose(
  withHandlers({
    
  }),
);

export default hoistStatics(enhancer)(ProfileScreenView);
