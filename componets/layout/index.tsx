import React from "react";
import { ScrollView, StyleSheet } from "react-native";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            {children}
        </ScrollView>
    )
}

export default Layout;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 24,
    paddingTop: 80,
    alignItems: 'center',
  }
})