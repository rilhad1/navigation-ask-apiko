import { compose, hoistStatics, withHandlers } from 'recompose';
import SignUpScreenView from './SignUpScreenView';
import screens from '../../navigation/screens';

const enhancer = compose(
  withHandlers({
    navigateToSignIn: props => () =>
      props.navigation.navigate(screens.SignIn),
    signUp: props => () =>
      props.navigation.navigate(screens.AuthorizedApplication),
  }),
);

export default hoistStatics(enhancer)(SignUpScreenView);
