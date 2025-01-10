import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRouter } from 'expo-router';

const EntryScreen = () => {
  const router = useRouter();

  useEffect(() => {
    // Navigate to the Home screen after 5 seconds
    const timer = setTimeout(() => {
      router.push('/home');
    }, 4000);

    return () => clearTimeout(timer); // Clear timer if the component unmounts
  }, [router]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/plant-animation.json')} // Adjust the path if needed
        autoPlay
        loop={false} // Stops the animation after one cycle
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background
  },
  animation: {
    width: 300, // Adjust size as needed
    height: 300,
  },
});

export default EntryScreen;
