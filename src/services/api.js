import axios from 'axios';

const BASE_URL = 'http://zssn-backend-example.herokuapp.com/api';

const PEOPLE_ENDPOINT = `${BASE_URL}/people`;
const REPORT_ENDPOINT = `${BASE_URL}/report`;

const getSurvivorByID = id => `${PEOPLE_ENDPOINT}/id`;

// survivor functions
const getSurvivors = () => 
  axios
    .get(`${PEOPLE_ENDPOINT}.json`)
    .then(response => response.data);


const submitSurvivor = survivor => 
  axios
    .post(`${PEOPLE_ENDPOINT}.json`, survivor)
    .then(response => response.data);

// report functions
const getInfected = () =>
  axios.get(`${REPORT_ENDPOINT}/infected.json`)
  
const getNonInfected = () =>
  axios.get(`${REPORT_ENDPOINT}/non_infected.json`)

const getPeopleInventory = () =>
  axios.get(`${REPORT_ENDPOINT}/people_inventory.json`)

const getInfectedPoints = () =>
  axios.get(`${REPORT_ENDPOINT}/infected_points.json`)

const getReports = () =>
  axios
    .all([getInfected(), getNonInfected(), getPeopleInventory(), getInfectedPoints()])
    .then(axios.spread(function (infected, nonInfected, peopleInventory, infectedPoints) {
      return {
        infected: infected.data.report,
        nonInfected: nonInfected.data.report,
        peopleInventory: peopleInventory.data.report,
        infectedPoints: infectedPoints.data.report
      }
    })
);

export default {
  getSurvivors,
  submitSurvivor,
  getReports
}
