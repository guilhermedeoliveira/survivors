import axios from 'axios';

const BASE_URL = 'http://zssn-backend-example.herokuapp.com/api';

const PEOPLE_ENDPOINT = `${BASE_URL}/people`;
const REPORT_ENDPOINT = `${BASE_URL}/report`;

const getSurvivorByID = id => `${PEOPLE_ENDPOINT}/id`;

const getSurvivors = () => 
  axios
    .get(`${PEOPLE_ENDPOINT}.json`)
    .then(response => response.data);

const submitSurvivor = survivor => 
  axios
    .post(`${PEOPLE_ENDPOINT}.json`, survivor)
    .then(response => response.data);

export default {
  getSurvivors,
  submitSurvivor
}