import type { HuntApi } from './models';
import Parse from 'parse/react-native.js';

export const getHunts = async () => {
  //create your Parse Query using the Person Class you've created
  let query = new Parse.Query('Hunt');
  //run the query to retrieve all objects on Person class, optionally you can add your filters
  let queryResult = await query.findAll();

  return queryResult;
};

export const getHuntsFromCoords = async (coords: {
  latitude: number;
  longitude: number;
}) => {
  const location = new Parse.GeoPoint(coords);
  const distance = 4;
  const sorted = true;

  const query = new Parse.Query('Hunt');
  query.withinKilometers('location', location, distance, sorted);
  // Pizza places within 5km sorted by distance
  const hunts = await query.find();
  return hunts;
};
