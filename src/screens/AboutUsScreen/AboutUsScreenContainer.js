import { compose, hoistStatics, withHandlers } from 'recompose';
import AboutUsScreenView from './AboutUsScreenView';
// import screens from '../../navigation/screens';

const enhancer = compose(
  withHandlers({
    
  }),
);

export default hoistStatics(enhancer)(AboutUsScreenView);
