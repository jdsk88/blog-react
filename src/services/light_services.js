import {domainUrl} from "../constants/types";
import axios from 'axios'

export const fetchLights = () => {
  return axios.post(`${domainUrl}/lights`);
};