import { compose, hoistStatics, withHandlers } from 'recompose';
import SignInScreenView from './SignInScreenView';
import screens from '../../navigation/screens';

const enhancer = compose(
  withHandlers({
    navigateToRestorePassword: props => () =>
      props.navigation.navigate(screens.RestorePassword),
  }),
);

export default hoistStatics(enhancer)(SignInScreenView);
