// import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './component/Header';
// import Newspost from './component/Newspost';
import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import ExplorePage from './pages/ExplorePage';
import YourFeed from './pages/YourFeed';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider, RegisterContextProvider } from './UserContext';
import PostPage from './pages/PostPage';
import ChoosePref from './pages/ChoosePref';
import CardTry from './pages/CardTry';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';


const theme = createTheme({
  // Define your custom theme here
});


function App() {
  const location = useLocation();

  const rootStyles = {
    minHeight: '800px',
    width: '100%',
    backgroundSize: 'cover',
    // Optionally, conditionally override styles based on location.pathname
    ...(location.pathname === '/' || location.pathname === '/login' ? { backgroundImage: 'url("../imgs/img2.png")',} : {})
  };


  return (
    <div id="root" style={rootStyles}>
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <RegisterContextProvider>
      
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<IndexPage />}></Route>

                  <Route path={"/login"} element={<LoginPage />}></Route>

                  <Route path={"/register"} element={<RegisterPage />}></Route>
                  <Route path={"/choose"} element={<ChoosePref />}></Route>

                  <Route path={"/yourfeed"} element={<YourFeed />}></Route>
                  <Route path={"/explore"} element={<ExplorePage />}></Route>

                  <Route path={"/cardTry"} element={<CardTry />}></Route>

                  <Route path={"/post/:id"} element={<PostPage />}></Route>
                </Route>

                <Route path={"/post/:id"} element={<PostPage />}></Route>
              </Routes>
          
          </RegisterContextProvider>
        </UserContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
