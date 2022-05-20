import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/navbar';


class App extends Component {
  state={};

  constructor(props)
  {
    super(props);
    console.log('App constructor');
    this.state=this.props.something;
  }
  componentDidMount()
  {
    console.log('App mounted');
  }
  render() { 
    console.log("APP-rendered");
    return (
             <React.Fragment>
             <Navbar/>
           <main className="container">
           <counters/>
           </main>
           </React.Fragment>
    );
  }
}
 
export default App;


