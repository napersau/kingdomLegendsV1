export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
  },
  GAME: {
    GET_STATE: '/api/game/state',
    UPDATE: '/api/game/update',
  },
  PLAYER: {
    GET_PROFILE: '/api/player/profile',
    UPDATE_PROFILE: '/api/player/profile',
  },
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  GAME: '/game',
  PROFILE: '/profile',
};

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
};
