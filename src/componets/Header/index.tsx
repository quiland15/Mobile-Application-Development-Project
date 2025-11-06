import React from "react";
import { Text, StyleSheet } from "react-native";

const Header = () => {
    return(
        <>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
        </>
    )
}

export default Header;

const styles = StyleSheet.create ({
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 32,
  }  
})