import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 7;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    // height: 50,
    // backgroundColor: 'transparent',
    marginHorizontal: 10,
    marginVertical: 5,
    // paddingVertical: 5,
    // paddingHorizontal: 15,
    width: window.width - 30,
    // borderWidth: 1,
    // borderColor: 'white',
    // padding: 10,
    color: 'white',
    fontSize: 15
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding: 10,
    marginTop: 20
  },
  register: {
    marginBottom: 20,
    width: window.width - 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'rgba(255,255,255,.8)',
    borderRadius: 50
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