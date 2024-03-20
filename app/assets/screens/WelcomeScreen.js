import React from 'react';
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            source={require('C:\\Projects\\LocalBite\\app\\assets\\images\\welcomescreen2.jpg')}
            style={styles.background}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.title}>LocalBite</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.getStartedText}>Get started with LocalBite</Text>
                <TouchableOpacity style={styles.continueButton} onPress={() => {/* Add your continue logic here */}}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    titleContainer: {
        marginTop: 50,
        marginLeft: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        textShadowColor: 'rgba(0, 0, 0, 0.30)',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 7,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
    },
    getStartedText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 16,
    },
    continueButton: {
        width: '80%',
        backgroundColor: '#f57c00',
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    continueButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;