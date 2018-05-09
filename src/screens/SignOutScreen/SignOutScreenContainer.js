import { compose, hoistStatics, withHandlers } from 'recompose';
import SignOutScreenView from './SignOutScreenView';
import screens from '../../navigation/screens';

const enhancer = compose(
  withHandlers({
    unauthorize: props => () =>
      props.navigation.navigate(screens.UnauthorizedApplication),
  }),
);

export default hoistStatics(enhancer)(SignOutScreenView);
