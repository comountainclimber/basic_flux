const alt = require('../alt');
const ToDoActions = require('../actions/ToDoActions');

class ToDoStore {
  constructor() {
    this.toDos = [];
    this.errorMessage = null;
    this.bindListeners({
      handleUpdateToDos: ToDoActions.UPDATE_TO_DOS,
      handleFetchToDos: ToDoActions.FETCH_TO_DOS,
      handleFetchToDos: ToDoActions.ADD_TO_DO,
      handleFetchToDos: ToDoActions.DELETE_TO_DO
    });
  }

  handleUpdateToDos(toDos) {
    this.toDos = toDos;
    this.errorMessage = null;
  }

  handleFetchToDos() {
    console.log("resetting array")
    // reset the array while we're fetching new locations so React can
    // be smart and render a spinner for us since the data is empty.
    this.toDos = [];
  }


  // handleUpdateToDos(locations) {
  //   this.locations = locations;
  // }

  handleToDos(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

module.exports = alt.createStore(ToDoStore, 'ToDoStore');