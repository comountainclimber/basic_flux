import React, { Component } from 'react'
import Spinner from '../images/spinner.gif'
const LocationStore = require('../stores/LocationStore');
const LocationActions = require('../actions/LocationActions')

export default class Locations extends Component {
  constructor(props) {
    super(props)

    this.onChange = _onChange.bind(this)
    this.renderLocations = _renderLocations.bind(this)
    this.renderLocationInput = _renderLocationInput.bind(this)
    //this.state = {}


    this.state = {
      country: null
    }
    
  } 

  componentWillMount() {
    this.setState(LocationStore.getState())
  }

  componentDidMount() {
    LocationStore.listen(this.onChange);
    LocationActions.fetchLocations();

  }

  componentWillUnmount() {
     LocationStore.unlisten(this.onChange);
  }

  render() {
    //console.log(this.state.country)
    //console.log(this.state)
    if (this.state.errorMessage) {
        return (
          <div>Something is wrong</div>
        );
      }

    else if (!this.state.locations.length) {
      return (
        <div>
          <img src={Spinner}/>
        </div>
      )
    }

    else {
      return (
        <div>
          {this.renderLocationInput()}
          {this.renderLocations()}
        </div>
      )
    } 
  }

}
//<input type='text'> </input>
function _renderLocationInput() {
  return(
    <div>
      <h3> Enter your favorite location here :) </h3>
      <input type='text' value={this.state.country} onChange={ (e)=> { this.setState({country: e.target.value}) }}/>
      <input type='submit' 
        onClick={
          ()=>{
            LocationActions.addNewLocation(this.state.country)
            this.setState({country:null})
          }
        }/>
    </div>
  )
}


function _onChange(state) {
    this.setState(state);
}

function _renderLocations() {
  // console.log("sdffsdfdf")
    return (
       <ul>
        {this.state.locations.map((location, i) => {
          return (
            <li key={i}>{location.name}</li>
          );
        })}
      </ul>
    )
  }