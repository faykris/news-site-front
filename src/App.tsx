import React from 'react';
import './App.scss';
import Websites from './components/Websites/Websites';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

const App: React.FC = () => {
  return (
    <div className="App">
      <Websites />
      <Header />
      <Article />
    </div>
  );
}

export default App;
