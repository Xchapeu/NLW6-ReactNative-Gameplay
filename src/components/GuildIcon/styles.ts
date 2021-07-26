import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  image: {
    height: 65,
    width: 61,
    borderRadius: 8,
  },
  container: {
    height: 65,
    width: 61,
    borderRadius: 8,
    backgroundColor: theme.colors.discord,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  }
})