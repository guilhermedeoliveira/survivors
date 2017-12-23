import axios from 'axios';

const BASE_URL = 'http://zssn-backend-example.herokuapp.com/api';

const PEOPLE_ENDPOINT = `${BASE_URL}/people`;
const REPORT_ENDPOINT = `${BASE_URL}/report`;

const getPeopleEndpoint = id => `${PEOPLE_ENDPOINT}/id`;

export const submitSurvivor = survivor => 
  axios
      .post(`${PEOPLE_ENDPOINT}.json`, survivor)
      .then(response => response.data);

export default {
  submitSurvivor
}