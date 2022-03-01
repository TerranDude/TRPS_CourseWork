import './App.css';

import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import { AuthProvider } from './context/auth';
import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthRoute from './utils/AuthRoute';
import SinglePost from './pages/SinglePost'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
    <Container>
    <MenuBar/>
      <Routes> 
      
        <Route  path='/' element={<Home/>} />
        <Route  path='/login' element={<AuthRoute><Login/></AuthRoute>} />
        <Route  path='/register' element={<AuthRoute><Register/></AuthRoute>} />
        <Route path="/posts/:postId" element={<SinglePost/>}/>
      </Routes>
    </Container>
    </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
