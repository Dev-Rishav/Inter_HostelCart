import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import App from './pages/Chat.jsx';
import './index.css'
import store from './Redux/store.js';
import {Provider} from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
