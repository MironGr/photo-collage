import React from 'react';

import './App.scss';

import { MainArea } from 'src/components/mainArea/index'
import { Header } from 'src/components/header/index'
import { Settings } from 'src/components/settings/index'

const App: React.FC = () => {
  return (
    <div className='root-wrapper'>
      <Header/>
      <div className='workspace'>
        <MainArea />
        <Settings/>
      </div>
    </div>
  );
}

export default App;
