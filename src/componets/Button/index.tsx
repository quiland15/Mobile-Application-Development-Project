import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({label="Sign In", color='#3498db', colortext='#fff', onPress}) => {
    return(
        <>
            <TouchableOpacity style={styles.button(color)} onPress={onPress}>
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
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  }),
  buttonText: colortext => ({
    color: colortext,
    fontSize: 19,
    fontWeight: '600',
  })
})