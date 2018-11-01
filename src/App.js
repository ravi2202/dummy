import React, { Component } from 'react';

// class App extends React.Component {

//     constructor(props) {

//         console.log('constructor called')

//         super(props);

//         this.state = {

//             count: 0

//         };

//         this.Add = this.Add.bind(this);

//         this.Remove = this.Remove.bind(this);

//     }



//     componentWillMount(){

//         console.log('componentWillMount called')

//     }

//     componentDidMount() {

//         console.log('componentDidMount called')

//     }

//     Add(){

//         this.setState({count: this.state.count + 1})

//     }

//     Remove(){

//         this.setState({count: this.state.count - 1})

//     }

//     componentWillReceiveProps(){

//         console.log('componentWillReceiveProps called')

//     }

//     shouldComponentUpdate(){

//         console.log('shouldComponentUpdate called');

//         return true

//     }

//     componentWillUpdate(){

//         console.log('componentWillUpdate called')

//     }

//     componentDidUpdate(){

//         console.log('componentDidUpdate called');

//     }

//     render() {

//         console.log('render called');

//         return (

//             <div>

//                 <div>

//                     <h1>{this.state.count}</h1>

//                 </div>

//                 <button onClick={this.Add}>

//                     <span>+(Add)</span>

//                 </button>

//                 <button onClick={this.Remove}>

//                     <span>-(Remove)</span>

//                 </button>

//             </div>

//         );

//     }

// }

// class App extends React.Component{
//     constructor(props){
//         console.log("constructor calling");
//         super(props);
//         this.state= {
//             count: 0
//             }
//         this.Add = this.Add.bind(this);
//         this.Remove = this.Remove.bind(this);

//     }
//     componentWillMount(){
//         console.log("componentWillMount calling !!!!!");
//     }

//     componentDidMount(){
//         console.log("componentDidMount calling !!!!!")
//         }

//     Add(){
//         this.setState({count: this.sate.count+2});

//     }
//     Remove(){
//         this.setState({count: this.staet.count-2})
//     }
//     componentWillReceiveProps(){

//     console.log(" componentWillReceiveProps calling !!!!!");
//     }
//     shouldComponentUpdate(){
//         console.log("shouldComponentUpdate calling !!!!!");
//     }
//     componentWillUpdate(){
//         console.log("componentWillUpdate calling !!!!!");
//     }
//     componentDidUpdate(){
//         console("componentDidUpdate calling !!!!!!");
//     }
//     render(){
//         console.log("Render calling   !!!!!");
//         return(
//             <div>
//                 <div>
//                     <h1>{this.state.count}</h1>
//                 </div>
//                 <button onClick={this.Add}> Add </button>
//                 <button onClick={this.Remove}> Remove </button>
//             </div>
//         );
//     }

// }


////////////// form    //////////////////////

// class App extends React.Component {

//    constructor(props) {
//       super(props);

//       this.state = {
//          data: 'Initial data...'
//       }

//       this.updateState = this.updateState;
//       this.updateState1 = this.updateState1;
//    };

//     updateState = (e) => {
//       this.setState({data: e.target.value});
//     }
//     updateState1 = (e) => {
//       this.setState({data: e.target.value});
//     }

//    render() {
//       return (
//          <div>
//             <input type = "text"
//                onChange = {this.updateState} />
//                <input type="email" onChange = {this.updateState1} />
//             <h4>{this.state.data}</h4>
//          </div>
//       );
//    }
// }


/*
 * Components
 */
//////////////////////////////////////////
/////////// KEY //////////////////////////
////////////////////////////////////////////
// class App extends React.Component {
//    constructor() {
//       super();
//
//       this.state = {
//          show_data : false,
//          data:
//          [
//             {
//                component: 'First...',
//                status: 'single',
//                id: 1
//             },
//
//             {
//                component: 'Second...',
//                status: 'single',
//                id: 2
//             },
//
//             {
//                component: 'Third...',
//                status: 'single',
//                id: 3
//             }
//          ]
//       }
//
//    }
//
//    pleaseChange = () => {this.setState({show_data:!this.state.show_data})};
//    render() {
//       return (
//          <div>
//             <div>
//             <button onClick={this.pleaseChange} >click </button>
//             {
//               this.state.show_data && this.state.data.map((dynamicComponent, i) =>  <Content
//                   key = {i}  componentData = {dynamicComponent} />)
//                 }
//             </div>
//          </div>
//       );
//    }
// }
//
// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <div>{this.props.componentData.component}</div>
//             <div>{this.props.componentData.id}</div>
//             <div>{this.props.componentData.status}</div>
//           </div>
//       );
//    }
// }

///////////////////////////////////////////
//////////////// routers //////////////////
//////////////////////////////////////////

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li><Link to = "/home">Home</Link></li>
               <li><Link to = "/about">About</Link></li>
               <li><Link to = "/contact">Contact</Link></li>
            </ul>

           {this.props.children}
         </div>
      )
   }
}


class  Home  extends React.Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}


class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}



class Contact extends React.Component {
   render() {
      return (
         <div>
            <h1>Contact...</h1>
         </div>
      )
   }
}



export default App;
