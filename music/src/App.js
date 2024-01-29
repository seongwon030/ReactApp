import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Main from './Main';
import FirstPage from './FirstPage';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='FirstPage' element={<FirstPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
