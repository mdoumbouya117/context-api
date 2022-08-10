import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound';
import Characters from './pages/Characters';
import Books from './pages/Books';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
            <Route
              path='/'
              element={<Books />}
            />
            <Route
              path='/characters'
              element={<Characters />}
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
