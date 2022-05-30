import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  result: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'right',
  },
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  resultLittle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  button: {
    height: 60,
    width: 60,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
