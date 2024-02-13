import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Main from './Main';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import FirstPage1 from './FirstPage1';
import FirstPage2 from './FirstPage2';
import FirstPage3 from './FirstPage3';
import FirstPage4 from './FirstPage4';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='FirstPage' element={<FirstPage/>} />
          <Route path='FirstPage1' element={<FirstPage1/>} />
          <Route path='FirstPage2' element={<FirstPage2/>} />
          <Route path='FirstPage3' element={<FirstPage3/>} />
          <Route path='FirstPage4' element={<FirstPage4/>} />
          <Route path='SecondPage' element={<SecondPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
