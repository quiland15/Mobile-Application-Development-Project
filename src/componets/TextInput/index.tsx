import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Textinput = ({placeholder="Email"}) => {
    return(
        <>
            <TextInput style={styles.input} placeholder={placeholder}/>
        </>
    )
}

export default Textinput;

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#2c3e50',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    }
})