import './App.css';
import React,{Component} from 'react'
import Itemgrid from './Items/itemgrid'
import Navbar from './Items/navbar'

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <Navbar/>
        <main className="container">
          <Itemgrid/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
