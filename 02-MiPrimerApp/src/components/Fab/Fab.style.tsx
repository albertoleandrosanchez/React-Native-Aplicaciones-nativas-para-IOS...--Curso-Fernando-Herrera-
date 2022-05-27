import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  fabText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  fabLocation: {
    position: 'absolute',
    bottom: 20,
    borderRadius: 100,
  },
  fabLocationBR: {
    right: 20,
  },
  fabLocationBL: {
    left: 20,
  },
});

export default styles;
