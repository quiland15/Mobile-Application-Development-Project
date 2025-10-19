import React from "react";
import { Text, TextInput, StyleSheet } from "react-native";

const Textinput = ({placeholder="Email", text="Name", ...rest}) => {
    return(
        <>
            <Text style={styles.teks}>{text}</Text>
            <TextInput style={styles.input} placeholder={placeholder} {...rest} />
        </>
    )
}

export default Textinput;

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#52525272',
    },
    teks: {
        fontWeight: '600',
        fontSize: 17,
        alignSelf: 'flex-start',
        marginBottom: '10',
    }
})