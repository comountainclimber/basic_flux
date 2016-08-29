const alt = require('../alt');
const LocationActions = require('../actions/LocationActions');

class LocationStore {
  constructor() {
    this.locations = [];
    this.errorMessage = null;
    this.bindListeners({
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
      handleFetchLocations: LocationActions.FETCH_LOCATIONS,
      handleLocationsFailed: LocationActions.LOCATIONS_FAILED,
      handleFetchLocations: LocationActions.ADD_NEW_LOCATION
    });
  }

  handleUpdateLocations(locations) {
    this.locations = locations;
    this.errorMessage = null;
  }
  handleFetchLocations() {
    // reset the array while we're fetching new locations so React can
    // be smart and render a spinner for us since the data is empty.
    this.locations = [];
  }

  handleUpdateLocations(locations) {
    this.locations = locations;
  }

  handleLocationsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

module.exports = alt.createStore(LocationStore, 'LocationStore');