import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';



ReactDOM.render(
<>
<BrowserRouter>
<MyApp />
</BrowserRouter>
 
  
  </>
  
  ,document.getElementById('root')
)