
'use client'; 

import { Provider } from 'react-redux';
import store from '../app/redux/store'; // Import your Redux store
import HomePage from './pages';

function Home() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default Home;