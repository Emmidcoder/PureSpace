import React, { useEffect,} from 'react';
import Header from './component/header/Header';
import MainSection from './component/MainSection/MainSection';
import Footer from './component/Footer';


function App() {
  useEffect(() => {
    document.body.classList.add('body')
  }, [])

  return (
    <React.Fragment>
      <Header />
      <MainSection />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
