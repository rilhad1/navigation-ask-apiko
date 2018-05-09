import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 25,
  },
  btn: {
    padding: 10,
    backgroundColor: colors.backgroundBtn,
  },
});

export default styles;
