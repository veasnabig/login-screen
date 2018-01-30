import React, { Component } from 'react';
import {
  View, TextInput, Text, ScrollView, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, Vibration,
  TouchableHighlight, Dimensions
} from 'react-native';

// keyboard
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles.js';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

class LoginPage extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
        <ScrollView style={{ flex: 1 }}>
          <KeyboardAvoidingView
            style={styles.container}
            behavior="position"
          >
            <View style={styles.viewInput}>
              <View style={styles.icon}>
                <Ionicons name="md-person" size={32} color="white" />
              </View>
              <View style={{ flex: 5 }}>
                <TextInput
                  underlineColorAndroid='transparent'
                  style={styles.input}
                  placeholder="ឈ្មេាះអ្នកប្រើប្រាស់"
                  placeholderTextColor="rgba(255,255,255,.5)"
                  returnKeyType="next"
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
                  placeholder="លេខសម្ងាត់"
                  placeholderTextColor="rgba(255,255,255,.5)"
                  ref='password'
                />
              </View>
            </View>
            <View style={styles.viewTouchableOpacity}>
              <TouchableOpacity style={styles.register} underlayColor={'gray'}>
                <Text style={{ color: "white", fontSize: 17 }}>បញ្ជូន</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
};
export default LoginPage;