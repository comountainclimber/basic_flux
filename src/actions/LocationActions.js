const alt = require('../alt');
const LocationSource = require('../sources/LocationSource')

class LocationActions {

  updateLocations(locations) {
    return locations;
  }

  fetchLocations() {
    return (dispatch) => {
      // we dispatch an event here so we can have "loading" state.
      dispatch();
      LocationSource.fetchLocations()
        .then((locations) => {
          // we can access other actions within our action through `this.actions`
          console.log(locations)
          this.updateLocations(locations);
        })
        .catch((errorMessage) => {
          this.locationsFailed(errorMessage);
        });
      }
  }

  addNewLocation(location){
    return (dispatch) => {
      dispatch()
      LocationSource.pushNewLocation(location)
      .then((locations) => {

        this.updateLocations(locations);
      })
      .catch((errorMessage) => {
        this.locationsFailed(errorMessage)
      })
    }
  }

  locationsFailed(errorMessage) {
    return errorMessage;
  }
}

module.exports = alt.createActions(LocationActions);