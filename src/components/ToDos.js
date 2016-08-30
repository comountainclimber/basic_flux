import React, { Component } from 'react'
import Spinner from '../images/spinner.gif'
const ToDoStore = require('../stores/ToDoStore');
const ToDoActions = require('../actions/ToDoActions')

export default class Locations extends Component {
  constructor(props) {
    super(props)

    this.onChange = _onChange.bind(this)
    this.renderToDos = _renderToDos.bind(this)
    this.renderToDoInput = _renderToDoInput.bind(this)
    //this.state = {}


    this.state = {
      toDo: null
    }
    
  } 

  componentWillMount() {
    this.setState(ToDoStore.getState())
  }

  componentDidMount() {
    ToDoStore.listen(this.onChange);
    ToDoActions.fetchToDos();
  }

  componentWillUnmount() {
     ToDoStore.unlisten(this.onChange);
  }

  render() {
    //console.log(this.state.country)
    //console.log(this.state)
    if (this.state.errorMessage) {
        return (
          <div>Something is wrong</div>
        );
      }

    else if (!this.state.toDos.length) {
      return (
        <div className="to-do-container">
        <div>
              <h3> Max's Amazing Flux ToDos</h3>
              </div>
          <img src={Spinner}/>
        </div>
      )
    }

    else {
      return (
        <div className="to-do-container">
          {this.renderToDoInput()}
          {this.renderToDos()}
        </div>
      )
    } 
  }

}
//<input type='text'> </input>
function _renderToDoInput() {
  return(
    <div>
      <h3> Max's Amazing Flux ToDos</h3>
      <input type='text' value={this.state.toDo} onChange={ (e)=> { this.setState({toDo: e.target.value}) }}/>
      <input type='submit' 
        onClick={
          ()=>{
            ToDoActions.addToDo(this.state.toDo)
            this.setState({toDo:null})
          }
        }/>
    </div>
  )
}


function _onChange(state) {
    this.setState(state);
}

function _renderToDos() {
  // console.log("sdffsdfdf")
    return (
        this.state.toDos.map((toDo, i) => {
          return (
            <div key={i} className="to-do-card">
            <div className="row justify-right">
              <i 
                onClick={()=>{ToDoActions.deleteToDo(i)}}
                className="fa fa-times-circle fa-lg close-icon" aria-hidden="true"></i>
            </div>
              <div>{toDo.description}</div>
              <div className="timestamp">{toDo.timestamp}</div>
            </div>  
          )
        }))
}
    
    