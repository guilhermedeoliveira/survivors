import axios from 'axios';

const BASE_URL = 'http://zssn-backend-example.herokuapp.com/api';

const PEOPLE_ENDPOINT = `${BASE_URL}/people`;
const REPORT_ENDPOINT = `${BASE_URL}/report`;

const getSurvivorByID = id => `${PEOPLE_ENDPOINT}/id`;

const getSurvivors = () => 
  axios
    .get(`${PEOPLE_ENDPOINT}.json`)
    .then(response => response.data);

const getReports = () => {
  axios.all([
    axios.get(`${REPORT_ENDPOINT}/infected.json`),
    axios.get(`${REPORT_ENDPOINT}/non_infected.json`),
    axios.get(`${REPORT_ENDPOINT}/people_inventory.json`),
    axios.get(`${REPORT_ENDPOINT}/infected_points.json`)
  ])
  .then(arr => {
    return {
      infected: arr[0].data.report,
      nonInfected: arr[1].data.report,
      peopleInventory: arr[2].data.report,
      infectedPoints: arr[3].data.report
    }
  });
};

const submitSurvivor = survivor => 
  axios
    .post(`${PEOPLE_ENDPOINT}.json`, survivor)
    .then(response => response.data);

export default {
  getSurvivors,
  submitSurvivor,
  getReports
}