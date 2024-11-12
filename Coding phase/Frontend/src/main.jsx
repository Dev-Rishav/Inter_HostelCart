import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import App from './pages/Chat.jsx';
import './index.css'
import store from './Redux/store.js';
import {Provider} from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
