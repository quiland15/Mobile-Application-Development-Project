import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Login() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      {/* Input Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#7f8c8d"
        keyboardType="email-address"
      />

      {/* Input Password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#7f8c8d"
        secureTextEntry
      />

      {/* Tombol Login */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Link Lupa Password */}
      <Text style={styles.link}>Forgot Password?</Text>

      {/* Link Daftar */}
      <View style={styles.registerRow}>
        <Text style={styles.registerText}>Don't have an account? </Text>
        <Text style={[styles.registerText, styles.link]}>Sign Up</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 24,
    paddingTop: 80,
    alignItems: 'center',
  },
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
  },
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
  },
  button: {
    width: '100%',
    backgroundColor: '#3498db',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  link: {
    color: '#3498db',
    fontSize: 14,
    marginTop: 16,
  },
  registerRow: {
    flexDirection: 'row',
    marginTop: 24,
  },
  registerText: {
    fontSize: 14,
    color: '#2c3e50',
  },
});