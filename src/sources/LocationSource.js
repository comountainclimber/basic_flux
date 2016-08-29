const LocationActions = require('../actions/LocationActions');

let mockData = [
  { id: 0, name: 'Abu Dhabi' },
  { id: 1, name: 'Berlin' },
  { id: 2, name: 'Bogota' },
  { id: 3, name: 'Buenos Aires' },
  { id: 4, name: 'Cairo' },
  { id: 5, name: 'Chicago' },
  { id: 6, name: 'Lima' },
  { id: 7, name: 'London' },
  { id: 8, name: 'Miami' },
  { id: 9, name: 'Moscow' },
  { id: 10, name: 'Mumbai' },
  { id: 11, name: 'Paris' },
  { id: 12, name: 'San Francisco' }
];

const LocationSource = {
  fetchLocations() {
        return new Promise( (resolve, reject) => {
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
              //locationString
  pushNewLocation(location) {
    const locationId = mockData.length

    const postObject = {id: locationId, name: location}
      //simulate API call again
      return new Promise ( (resolve, reject) => {
        setTimeout( ()=> {
              if (true) {
                mockData.push(postObject)
                //this.fetchLocations()
                resolve(mockData)
              }
              else {
                reject('Something blew up')
              }
          }, 500);
        })
  }
}

module.exports = LocationSource;