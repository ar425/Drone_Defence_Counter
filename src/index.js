import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class Post extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        count: 0
      };
    }


    counter() {
      this.setState({
        count: this.state.count + 1
      });
    };
    
    

    render(){
      return(
        <div className="post">
          <p>This is the first post and it is wonderful.</p>
          <button className="countr" onClick={() => this.counter()}>Like</button>
          <p className="number">{this.state.count}</p>
        </div>
      );
    }

}



 


ReactDOM.render(
  <Post />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
