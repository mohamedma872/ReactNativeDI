// App.tsx
import React from 'react';
import { Provider } from 'inversify-react';
import { container } from './src/container'; // Use container from src/container.ts
import HomeScreen from './src/HomeScreen';

const App: React.FC = () => (
  <Provider container={container}>
    <HomeScreen />
  </Provider>
);

export default App;
