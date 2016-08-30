const alt = require('../alt');
const ToDoDataSource = require('../sources/ToDoDataSource')

class ToDoActions {

  updateToDos(toDos) {
    return toDos;
  }

  fetchToDos() {
    console.log("fetching todos")
    return (dispatch) => {
      // we dispatch an event here so we can have "loading" state.
      dispatch();
      ToDoDataSource.fetchToDos()
        .then((toDos) => {
          // we can access other actions within our action through `this.actions`
          console.log(toDos)
          this.updateToDos(toDos);
        })
        .catch((errorMessage) => {
          this.toDosFailed(errorMessage);
        });
      }
  }

  addToDo(toDo){
    return (dispatch) => {
      dispatch()
      ToDoDataSource.pushNewToDo(toDo)
      .then((toDos) => {

        this.updateToDos(toDos);
      })
      .catch((errorMessage) => {
        this.toDosFailed(errorMessage)
      })
    }
  }

  deleteToDo(index){
    return(dispatch) =>{
      dispatch()
      ToDoDataSource.deleteToDo(index)
      .then((toDos) => {
          // we can access other actions within our action through `this.actions`
          console.log(toDos)
          this.updateToDos(toDos);
        })
        .catch((errorMessage) => {
          this.toDosFailed(errorMessage);
        });
      }
    }
  

  toDosFailed(errorMessage) {
    return errorMessage;
  }
}

module.exports = alt.createActions(ToDoActions);