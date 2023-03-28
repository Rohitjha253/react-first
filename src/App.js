import logo from './logo.svg';
import React from 'react'

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  const name = 'nkdebug';
  const x = true;


  return (
    <div className="container">
      <Header></Header>
      <Footer></Footer>
    </div>
    
  );
}

// class App extends React.Component {
//     render() {
//       return <h1>Welcome from React Class</h1>
//     }
// }

export default App;
