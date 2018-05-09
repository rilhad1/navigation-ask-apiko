import { compose, hoistStatics, withHandlers } from 'recompose';
import CreateQuestionScreenView from './CreateQuestionScreenView';
// import screens from '../../navigation/screens';

const enhancer = compose(
  withHandlers({
    
  }),
);

export default hoistStatics(enhancer)(CreateQuestionScreenView);
