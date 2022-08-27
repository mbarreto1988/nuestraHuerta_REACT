import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import SectionsInDb from './SectionsInDb';
import ProductList from './ProductList';
import UserList from './UserList';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <Routes>
          <Route path='/' element={<ContentWrapper />}/>
          <Route path='/categories' element={<CategoriesInDb />} />
          <Route path='/sections' element={<SectionsInDb />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/users' element={<UserList />} />
          <Route path="*" element={<NotFound />} />
          </Routes>          
        </div>
    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;

//probando, probando
//probando, probando
//probando, probando
//probando, probando
//probando, probando



