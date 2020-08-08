import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8257e5',
    padding: 40,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    maxWidth: 160,
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFF',
    marginVertical: 40,
  },
});

export default styles;
