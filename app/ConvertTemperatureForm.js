import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, Stack as MaterialStack, Text, TextInput } from "@react-native-material/core";

export default function ConvertTemperatureForm() {
    return (
        <MaterialStack>
            <View style={styles.headline}>
                <Text variant="h6">Convertidor de Temperaturas</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text variant="body1" style={styles.fieldLabel}>Grados Celsius:</Text>
                <TextInput variant="standard" />
            </View>
            <View style={styles.inputContainer}>
                <Text variant="body1" style={styles.fieldLabel}>Grados Fahrenheit:</Text>
                <TextInput variant="standard" editable={ false }/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="CONVERTIR" style={styles.formButton} />
            </View>
        </MaterialStack>
    )
}

const styles = StyleSheet.create({
    headline: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        fontSize: 15,
    },
    buttonContainer: {
        marginTop: 20,
        marginRight: 80,
        marginLeft: 80,
    },
    fieldLabel: {
        color: '#666666',
    },
    formButton: {
        shadowOffset: 0,
    }
});