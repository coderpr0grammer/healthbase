import './App.css';

import DynamicList from './Components/DynamicList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DynamicList />}/>;
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
