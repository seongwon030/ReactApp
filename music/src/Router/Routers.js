import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "../Components/ScrollToTop";

import Main from '../Pages/Main/Main';
import FirstPage from '../Pages/FirstTest/FirstPage';
import FirstPage1 from '../Pages/FirstTest/FirstPage1';
import FirstPage2 from '../Pages/FirstTest/FirstPage2';
import FirstPage3 from '../Pages/FirstTest/FirstPage3';
import FirstPage4 from '../Pages/FirstTest/FirstPage4';
import SecondPage from '../Pages/SecondTest/SecondPage';
import ScrollToTop from '../Components/ScrollToTop';

export const Routers = () => {
    return (
    <BrowserRouter>
        <ScrollToTop/>
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
    );
}