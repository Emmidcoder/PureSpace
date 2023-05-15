import React, { useEffect,} from 'react';
import Header from './component/header/Header';
import MainSection from './component/MainSection/MainSection';


function App() {
  useEffect(() => {
    document.body.classList.add('body')
  }, [])

  return (
    <React.Fragment>
      <Header />
      <MainSection/>
    </React.Fragment>
  );
}

export default App;
