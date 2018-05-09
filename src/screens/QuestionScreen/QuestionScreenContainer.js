import { compose, hoistStatics, withHandlers } from 'recompose';
import QuestionScreenView from './QuestionScreenView';
import screens from '../../navigation/screens';

const enhancer = compose(
  withHandlers({
    
  }),
);

export default hoistStatics(enhancer)(QuestionScreenView);
