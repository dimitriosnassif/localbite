import React from 'react';
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>LocalBite</Text>
                <Text style={styles.slogan}>Join the community of home-based restaurants.</Text>
                <Text style={styles.subSlogan}>Get food delivered from your favorite neighborhood chefs.</Text>
                <TouchableOpacity style={styles.signupButton} onPress={() => {/* Add in the signup logic */}}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton} onPress={() => {/* Add in the signin logic */}}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '30%', // Pushes the content up
    },
    title: {
        fontSize: 48, // Adjust as needed
        fontWeight: 'bold',
        color: '#4a4a4a', // Adjust the color to match the image
        marginBottom: 12, // Adds spacing between the title and slogan
    },
    slogan: {
        fontSize: 26, // Adjust as needed
        color: '#4a4a4a', // Adjust the color to match the image
        marginBottom: 4, // Adds spacing between the slogan and subslogan
    },
    subSlogan: {
        fontSize: 18, // Adjust as needed
        color: '#a9a9a9', // Adjust the color to match the image
        marginBottom: 32, // Adds spacing before the buttons
    },
    signupButton: {
        width: '80%', // Adjust as needed
        backgroundColor: '#f57c00', // Orange color for the sign-up button
        padding: 20, // Adds padding inside the button
        borderRadius: 10, // Rounded corners
        marginBottom: 12, // Adds spacing between the sign-up and login buttons
    },
    loginButton: {
        width: '80%', // Adjust as needed
        backgroundColor: '#ffa726', // Lighter orange color for the login button
        padding: 20, // Adds padding inside the button
        borderRadius: 10, // Rounded corners
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff', // White color for the button text
        fontSize: 20, // Adjust as needed
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;