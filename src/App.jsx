import React from 'react';
import {Routes, Route} from "react-router-dom";
import ShowListPage from './pages/ShowListPage';
import ShowDetailPage from './pages/ShowDetailPage';

function App(){
return <div>

  <Routes>
    <Route path='/' element={<ShowListPage/>}/>
    <Route path= "show/:show_id" element={<ShowDetailPage/>}/>
  </Routes>
  
</div>
}

export default App;



