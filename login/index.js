import React, { Component } from 'react';
import {
  View, TextInput, Text, ScrollView, Image, Button, Animated, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, Vibration,
  TouchableHighlight, Dimensions
} from 'react-native';

import LoginPage from "./LoginPage.js";
import SignupPage from "./SignupPage.js";

// keyboard
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// tab
import { TabViewAnimated, TabBar, SceneMap, ScrollEvent } from 'react-native-tab-view';
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
const LoginRoute = () => <LoginPage />;
const SignupRoute = () => <SignupPage />;


const window = Dimensions.get('window');
const width = window.width;
const height = window.height;

import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import logo from '../assets/wb-logo.png';
// import bg from './assets/bg.png';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

class Login extends Component {
  constructor(props) {
    super(props);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  componentWillMount() {
    if (Platform.OS == 'ios') {
      this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
      this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    } else {
      this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
      this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };


  keyboardDidShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: 300,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardDidHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: 300,
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  // tab
  state = {
    index: 0,
    routes: [
      { key: 'login', title: 'ចូលប្រើ' },
      { key: 'signup', title: 'ចុះឈ្មេាះ' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props}
    style={{ backgroundColor: 'transparent' }}
    labelStyle={{ color: 'white', fontSize: 20 }}
    // tabStyle={{ backgroundColor: 'blue' }}
    indicatorStyle={{ backgroundColor: 'rgba(68, 160, 141,1)' }}
  />;

  _renderScene = SceneMap({
    login: LoginRoute,
    signup: SignupRoute,
  });

  // keyboard scroll
  _scrollToInput(reactNode) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.scrollToFocusedInput(reactNode)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['rgba(68, 160, 141,1)', 'rgba(9, 54, 55,1)']}
          style={styles.linearGradientContainer}
        >
          <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]} />
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TabViewAnimated
              style={{ flex: 1 }}
              navigationState={this.state}
              renderScene={this._renderScene}
              renderHeader={this._renderHeader}
              onIndexChange={this._handleIndexChange}
              initialLayout={initialLayout}
            />
          </View>
        </LinearGradient>
      </View>
    );
  }
};
export default Login;