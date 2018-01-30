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

class SignupPage extends Component {
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
                                <Ionicons name="md-call" size={32} color="white" />
                            </View>
                            <View style={{ flex: 5 }}>
                                <TextInput
                                    underlineColorAndroid='transparent'
                                    style={styles.input}
                                    placeholder="លេខទូរស័ព្ទ"
                                    placeholderTextColor="rgba(255,255,255,.5)"
                                    keyboardType="numeric"
                                // onSubmitEditing={(event) => {
                                //   this.refs.password.focus();
                                // }}
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
export default SignupPage;