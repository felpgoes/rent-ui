import axios from 'axios';

import { setAuthorization } from './auth';

export const OAuth = axios.create({
  baseURL: `https://rent-ai-api.herokuapp.com`,
});

export const PlacesAPI = axios.create({
  baseURL: `https://rent-ai-api.herokuapp.com`,
});
export const UsersAPI = axios.create({
  baseURL: `https://rent-ai-api.herokuapp.com`,
});

PlacesAPI.interceptors.request.use(async (config) => setAuthorization(config));
UsersAPI.interceptors.request.use(async (config) => setAuthorization(config));
