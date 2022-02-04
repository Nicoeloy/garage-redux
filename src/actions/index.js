const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

export const FETCH_CARS = 'FETCH_CARS';
export const ADD_CAR = 'ADD_CAR';


export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_CARS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function addCar(garage, car, callback) {
  const url = `${BASE_URL}/${garage}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  }).then(r => r.json())
    .then(() => callback());

  return {
    type: ADD_CAR,
    payload: request // Will be resolved by redux-promise
  };
}
