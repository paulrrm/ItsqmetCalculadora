import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import CalculatorScreen from './presentation/screens/CalculatorScreen';
import { globalStyles } from './config/theme/app-theme';

export default function App() {
  return (
    <View style={globalStyles.background}>
      <CalculatorScreen />
    </View>
  );
}



