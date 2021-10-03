import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/infoSection';
import Navbar from './components/Navbar';
import { InfoData } from './data/infoData';
import { SliederData } from './data/SliderData';
import GlobalStyle from './globalStyle';

function App() {

  const [isOpen, setIsOpen] = useState (false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
 <>
 <GlobalStyle />
  <Navbar toggle={toggle} />
  <Dropdown isOpen={isOpen} toggle={toggle} />
  <Hero slides={SliederData} />
  <InfoSection {...InfoData}/>
 </>
  );
}

export default App;
