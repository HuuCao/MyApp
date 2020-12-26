import React, { Component } from 'react';
import './App.css';
import NoiDung from './noiDung';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai:"khoitao",
      trangthai2:"khoitao2"
    }
  }
  
  componentDidMount() {
    console.log('componentDidMount da chay roi !');
  }
  componentWillMount() {
    console.log('componentWillMount da in ra man hinh');
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate đã được khởi động');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate đã được khởi động');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate đã được khởi động');
  }

  capNhatState = () => {
    this.setState({
      trangthai:"CapNhat1",
      trangthai2:"CapNhat2"
    });
  }
  

  render() {
    console.log(this.state.trangthai);
    

    return (
      <div className="App">
        <NoiDung ten={this.state.trangthai2}/>
        <button onClick = {() => {this.capNhatState()}}>Click vao day de update</button>
      </div>
    );
  }
}

export default App;

