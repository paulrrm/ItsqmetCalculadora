import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import CalculatorScreen from './presentation/screens/CalculatorScreen';
import { styles } from './config/theme/app-theme';

export default function App() {
  return (
    <View style={styles.background}>
      <CalculatorScreen />
    </View>
  );
}



