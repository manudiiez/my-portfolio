import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { GlobalStyles } from './styles/global';
import Index from './views/Index';
import Work from './views/Work';
import { useContext, useLayoutEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import { ThemeContextProvider } from './context/themeModeContext';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 1000);
  }, [location.pathname]);
  return children;
};

function App() {

  return (
    <div>
      <ThemeContextProvider>
        <GlobalStyles />
        {/* <Navbar/> */}
        <main>
          <Wrapper>
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/:id' element={<Work />} />
              <Route path='/prueba' element={<Navbar />} />
            </Routes>
          </Wrapper>
        </main>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
