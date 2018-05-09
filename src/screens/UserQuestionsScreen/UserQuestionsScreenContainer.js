import { compose, hoistStatics, withHandlers } from 'recompose';
import UserQuestionsScreenView from './UserQuestionsScreenView';
import screens from '../../navigation/screens';

const enhancer = compose(
  withHandlers({
    navigateToDetailQuestion: props => () =>
      props.navigation.navigate(screens.DetailQuestion),
  }),
);

export default hoistStatics(enhancer)(UserQuestionsScreenView);
