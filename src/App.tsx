import React from 'react';
import './App.css';

// Import the AppStore and create it
import { useProvider } from 'mobx-store-provider';
import AppRoutes from './components/appRouter/AppRouter';

import AppStore from './stores/appStore';
const appStore = AppStore.create();

function App() {
   const Provider = useProvider(AppStore);
   return (
      <Provider value={appStore}>
         <AppRoutes />
      </Provider>
   );
}

export default App;
