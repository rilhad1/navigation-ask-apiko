import { compose, hoistStatics, withHandlers } from 'recompose';
import RestorePasswordScreenView from './RestorePasswordScreenView';
import screens from '../../navigation/screens';

const enhancer = compose(
  withHandlers({
    navigateToHome: props => () =>
      props.navigation.navigate(screens.Home),
  }),
);

export default hoistStatics(enhancer)(RestorePasswordScreenView);
