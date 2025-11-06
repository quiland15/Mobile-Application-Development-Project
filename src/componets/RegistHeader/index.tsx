import React from "react";
import { Text, StyleSheet } from "react-native";

const RegistHeader = () => {
    return(
        <>
            <Text style={styles.title}>Registration</Text>
        </>
    )
}

export default RegistHeader;

const styles = StyleSheet.create ({
  title: {
    fontSize: 45,
    fontWeight: '700',
    color: '#000000ff',
    alignSelf: 'flex-start',
    marginBottom: '37',
  } 
})