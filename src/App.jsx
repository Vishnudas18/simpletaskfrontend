import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Admin from './Components/Admin';
import Add from './Components/Add';
import View from './Components/View';
import Edit from './Components/Edit';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/*http://localhost:3000/ */}
        <Route path='/' element={<Admin/>}/>
        {/*http://localhost:3000/add */}
        <Route path='add' element={<Add/>}/>
        {/*http://localhost:3000/view/:id */}
        <Route path='view/:id' element={<View/>}/>
        {/*http://localhost:3000/edit/:id */}
        <Route path='edit/:id' element={<Edit/>}/>
        {/*http://localhost:3000/edithuhi*/}
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
