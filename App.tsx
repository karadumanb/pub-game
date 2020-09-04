import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NotifyProvider from 'src/contexts/NotifyContext';
import useCachedResources from 'src/hooks/useCachedResources';
import useColorScheme from 'src/hooks/useColorScheme';
import Setup from 'src/lib/setup';
import Navigation from 'src/navigation';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Setup>
        <SafeAreaProvider>
          <NotifyProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </NotifyProvider>
        </SafeAreaProvider>
      </Setup>
    );
  }
}
