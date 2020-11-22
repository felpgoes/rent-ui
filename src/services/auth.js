import { parseISO, isBefore } from 'date-fns';

export const USER_KEY = '@rent-ai';

export const getLocalObj = (key) => JSON.parse(sessionStorage.getItem(key));

// User OAuth
export const getUserData = () => getLocalObj(USER_KEY)?.user;
export const getTokenData = () => getLocalObj(USER_KEY)?.token;

// Token
export const getTokenAccessToken = () =>
  getLocalObj(USER_KEY)?.token.accessToken;
export const getTokenCreated = () => getLocalObj(USER_KEY).created;
export const getTokenExpirationDate = () =>
  getLocalObj(USER_KEY)?.token.expiresAt;
export const getTokenAuthenticated = () => getLocalObj(USER_KEY).authenticated;
export const isAccessTokenValid = () =>
  isBefore(new Date(), parseISO(getTokenExpirationDate()));

// Refresh token
export const getRefreshToken = () => getLocalObj(USER_KEY).refreshToken;
export const getRefreshTokenExpirationDate = () =>
  getLocalObj(USER_KEY).refreshTokenExpiresAt;
export const isRefreshTokenValid = () =>
  isBefore(new Date(), parseISO(getRefreshTokenExpirationDate()));

export const movcadUpt = () => {
  sessionStorage.setItem('@movcad-upt', true);
};

export const persistData = (data) => {
  sessionStorage.setItem(USER_KEY, JSON.stringify(data));
};
export const excludeData = () => {
  sessionStorage.removeItem(USER_KEY);
};

export const setAuthorization = async (config) => {
  const token = getTokenAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
