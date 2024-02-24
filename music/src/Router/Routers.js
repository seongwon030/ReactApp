import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Main from '../Pages/Main/Main';
import ScrollToTop from '../Components/ScrollToTop';

import FirstPage from '../Pages/FirstTest/FirstPage';
import FirstPage1 from '../Pages/FirstTest/FirstPage1';

import SecondPage from '../Pages/SecondTest/SecondPage';
import SecondPage1 from '../Pages/SecondTest/SecondPage1';
import SecondPage2 from '../Pages/SecondTest/SecondPage2';
import SecondPage3 from '../Pages/SecondTest/SecondPage3';
import SecondPage4 from '../Pages/SecondTest/SecondPage4';

// 라우터 hook

export const Routers = () => {
    return (
    <RecoilRoot>
    <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='FirstPage' element={<FirstPage/>} />
          <Route path='FirstPage1' element={<FirstPage1/>} />
          <Route path='SecondPage' element={<SecondPage/>} />
          <Route path='SecondPage1' element={<SecondPage1/>} />
          <Route path='SecondPage2' element={<SecondPage2/>} />
          <Route path='SecondPage3' element={<SecondPage3/>} />
          <Route path='SecondPage4' element={<SecondPage4/>} />
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    );
}