import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6,
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
  logoutContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: theme.colors.heading,
    fontSize: 30,
    fontFamily: theme.fonts.title700,
  },
  buttonNo: {
    flexDirection: 'row',
    width: 140,
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: theme.colors.heading,
    backgroundColor: theme.colors.secondary70,
    marginRight: 20,
  },
  buttonYes: {
    flexDirection: 'row',
    height: 45,
    width: 140,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.on,
    borderWidth: 1,
    backgroundColor: theme.colors.primary,
  }
})