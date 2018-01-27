import React, { Component } from 'react';
import {
  View, TextInput, Text, ScrollView, Image, Button, Animated, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, Vibration,
  TouchableHighlight, Dimensions
} from 'react-native';

const window = Dimensions.get('window');
const width = window.width;
const height = window.height;

import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import logo from './assets/wb-logo.png';
import bg from './assets/bg.png';
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
    // Animated.timing(this.imageHeight, {
    //   duration: event.duration,
    //   toValue: IMAGE_HEIGHT_SMALL,
    // }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };


  keyboardDidShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: 300,
      toValue: width / 3,
    }).start();
  };

  keyboardDidHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: 300,
      toValue: IMAGE_HEIGHT,
    }).start();
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{
          flex: 1,
          alignItems: 'stretch'
        }}>
          <Image
            source={bg}
            style={{ flex: 1, height: height, width: width }}>
          </Image>
        </View>

        <LinearGradient
          colors={['rgba(68, 160, 141,1)', 'rgba(9, 54, 55,1)']}
          // colors={['#44A08D', '#093637']}
          // colors={['#134e5e', '#71b280']}
          style={styles.linearGradientContainer}
        >
          <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]} />
          <ScrollView style={{ flex: 1 }}>
            <KeyboardAvoidingView
              style={styles.container}
              behavior="padding"
            >
              <View style={styles.viewInput}>
                <View style={styles.icon}>
                  <Ionicons name="md-person" size={32} color="white" />
                </View>
                <View style={{ flex: 5 }}>
                  <TextInput
                    underlineColorAndroid='transparent'
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,.5)"
                    returnKeyType="next"
                    returnKeyLabel="next"
                    onSubmitEditing={(event) => {
                      this.refs.password.focus();
                    }}
                  />
                </View>
              </View>
              <View style={styles.viewInput}>
                <View style={styles.icon}>
                  <Ionicons name="md-lock" size={32} color="white" />
                </View>
                <View style={{ flex: 5 }}>
                  <TextInput
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,.5)"
                    returnKeyType="next"
                    ref='password'
                  />
                </View>
              </View>
              <View style={styles.viewTouchableOpacity}>
                <TouchableOpacity style={styles.register} underlayColor={'gray'}>
                  <Text style={{ color: "white", fontSize: 20 }}>Login</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </LinearGradient>

      </View>
    );
  }
};
export default Login;