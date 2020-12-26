import React, { Component } from 'react';

class NoiDung extends Component {
    componentWillReceiveProps(nextProps, nextState) {
        console.log('componentWillReceiveProps của NoiDung.js');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate của NoiDung.js');
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate của NoiDung.js');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate của NoiDung.js');
    }
    

    render() {
        console.log('Render của NoiDung.js');
        
        return (
            <div>
                <h3> {this.props.ten} </h3>
            </div>
        );
    }
}

export default NoiDung;