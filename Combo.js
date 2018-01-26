import React, { Component } from 'react';
import {
  View, TextInput, Text, ScrollView, Image, Button, Animated, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, Vibration,
  TouchableHighlight
} from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import logo from './logo.png';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

class Demo extends Component {
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
      toValue: IMAGE_HEIGHT,
    }).start();
  };


  keyboardDidShow = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardDidHide = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <LinearGradient
          colors={['#00c6ff', '#0072ff']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
            alignItems: 'center'
          }}
        >
          <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]} />
          <ScrollView style={{ flex: 1 }}>
            <KeyboardAvoidingView
              style={styles.container}
              behavior="padding"
            >
              <View style={{ flex: 1, padding: 10, flexDirection: 'row', borderColor: 'white', borderRadius: 50, borderWidth: 1, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Ionicons name="md-person" size={32} color="white" />
                </View>
                <View style={{ flex: 5 }}>
                  <TextInput
                    underlineColorAndroid='transparent'
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="white"
                  />
                </View>
              </View>
              <View style={{ flex: 1, padding: 10, flexDirection: 'row', borderColor: 'white', borderRadius: 50, borderWidth: 1, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Ionicons name="md-lock" size={32} color="white" />
                </View>
                <View style={{ flex: 5 }}>
                  <TextInput
                    underlineColorAndroid='transparent'
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="white"
                  />
                </View>
              </View>
              <View>
                <TouchableOpacity style={styles.register}><Text>Done</Text></TouchableOpacity>
              </View>



              <TextInput
                underlineColorAndroid='transparent'
                style={styles.input}
                placeholder="Enter password"
                placeholderTextColor="white"
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </LinearGradient>
      </View>

    );
  }
};

export default Demo;