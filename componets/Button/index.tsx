import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({label="Sign In", color='#3498db', colortext='#fff'}) => {
    return(
        <>
            <TouchableOpacity style={styles.button(color)}>
              <Text style={styles.buttonText(colortext)}>{label}</Text>
            </TouchableOpacity>
        </>
    )
}

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    width: '100%',
    backgroundColor: color,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  }),
  buttonText: colortext => ({
    color: colortext,
    fontSize: 18,
    fontWeight: '600',
  })
})