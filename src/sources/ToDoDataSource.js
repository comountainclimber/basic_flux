const moment = require('moment')

const ToDoActions = require('../actions/ToDoActions');

let mockData = [
  { id: 0, description: 'Take the dog for a walk.', timestamp:moment().format('MMMM Do YYYY, h:mm:ss a')},
  { id: 1, description: 'Schedule dentist appointment.', timestamp:moment().format('MMMM Do YYYY, h:mm:ss a') },
  { id: 2, description: 'Do laundry.', timestamp:moment().format('MMMM Do YYYY, h:mm:ss a')},
];

const ToDoDataSource = {
  fetchToDos() {
        return new Promise( (resolve, reject) => {
          console.log("AJAX call to the server...")
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          setTimeout( () => {

            // change this to `false` to see the error action being handled.
            if (true) {
              // resolve with some mock data
              resolve(mockData);
            } else {
              reject('Things have broken');
            }
          }, 500);
        });

     //  success: LocationActions.updateLocations,
     //  error: LocationActions.locationsFailed,
     //  loading: LocationActions.fetchLocations
  },

  deleteToDo(index) {
    console.log(index)
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        if (true){
          mockData.splice(index, 1)
          
          resolve(mockData)
        }
        else {
          reject("something exploded")
        }
      }, 500)
    })
    
  },
              //locationString
  pushNewToDo(toDo) {
    const toDoId = mockData.length

    const toDoObject = {id: toDoId, description: toDo, timestamp:moment().format('MMMM Do YYYY, h:mm:ss a')}
      //simulate API call again
      return new Promise ( (resolve, reject) => {
        setTimeout( ()=> {
              if (true) {
                mockData.push(toDoObject)
                resolve(mockData)
              }
              else {
                reject('Something blew up')
              }
          }, 500);
        })
  }
}

module.exports = ToDoDataSource;