import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';

import { CreatePostsScreen } from './screens';
import { Container } from './components';

export default function App() {
  const [ isFontsLoaded ] = useFonts({
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'), //500
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'), //400
  });

  if (!isFontsLoaded) {
    return <Container />
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
          <CreatePostsScreen />
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};