import React from 'react';
import './App.css';
import Nave from './components/Nave'
import 'bootstrap/dist/css/bootstrap.min.css'
import  List  from './components/List'
import { Provider} from 'react-redux'
import store from './store'
 

function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <Nave />
      <List/>
      </div>
      </Provider>
   
  );
}

export default App;
