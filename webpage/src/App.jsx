import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { GlobalStyles } from './styles/global';
import Index from './views/Index';
import Work from './views/Work';
import { useLayoutEffect } from 'react';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    if(location.hash === '#projects'){
      document.documentElement.scrollTo(0, 700);
    }else{
      document.documentElement.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <div>
      <GlobalStyles />
      <header>Header</header>
      <main>
        <Wrapper>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/:id' element={<Work />} />
          </Routes>
        </Wrapper>
      </main>
    </div>
  );
}

export default App;
