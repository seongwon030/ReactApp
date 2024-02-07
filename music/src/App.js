import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Main from './Main';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='FirstPage' element={<FirstPage/>} />
          <Route path='SecondPage' element={<SecondPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
