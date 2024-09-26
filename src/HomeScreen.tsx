import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useInjection } from 'inversify-react';
import { IGreetingService } from './services/IGreetingService';
import TYPES  from './types/types';

const HomeScreen: React.FC = () => {
  const greetingService = useInjection<IGreetingService>(TYPES.IGreetingService);

  const greeting = greetingService.getGreeting();

  return (
    <View>
      <Text>{greeting}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  // ... your styles
});
