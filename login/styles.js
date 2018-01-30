import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2.5;
export const IMAGE_HEIGHT_SMALL = window.width / 4;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  linearGradientContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    alignItems: 'center'
  },
  viewInput: {
    flex: 1,
    flexDirection: 'row',
    // borderColor: 'white',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 50,
    // borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  viewTouchableOpacity: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  icon: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  input: {
    marginHorizontal: 10,
    marginVertical: 5,
    width: window.width - 30,
    color: 'white',
    fontSize: 17,
    padding: 5,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding: 10,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  register: {
    marginBottom: 20,
    width: window.width - 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'rgba(68, 160, 141,0.8)',
    borderRadius: 50,
  },
  inputsContainer: {
    flex: 1
  },
  fullWidthButton: {
    backgroundColor: 'blue',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullWidthButtonText: {
    fontSize: 24,
    color: 'white'
  }
});