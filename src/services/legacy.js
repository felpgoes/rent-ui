import axios from 'axios';

import { setAuthorization } from './auth';

const { REACT_APP_MOVCAD_LEGACY } = process.env;

export const legacyURL = axios.create({
    baseURL: `${REACT_APP_MOVCAD_LEGACY}`,
});

legacyURL.interceptors.request.use(async (config) => setAuthorization(config));
