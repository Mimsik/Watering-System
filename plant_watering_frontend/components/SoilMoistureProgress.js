import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const SoilMoistureProgress = ({ percentage }) => {
  return (
    <View style={{ alignItems: 'center', marginVertical: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Soil Moisture Level</Text>
      <AnimatedCircularProgress
        size={200} // Increased size
        width={20} // Increased thickness
        fill={percentage}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
        rotation={0}
        lineCap="round"
      />
      <Text style={{ fontSize: 16, marginTop: 10 }}>{percentage}%</Text>
    </View>
  );
};

export default SoilMoistureProgress;
