
export const API_CONFIG = {
  BASE_URL: process.env.EXPO_PUBLIC_API_URL || 'https://api.kbpayuk.com',
  TIMEOUT: 10000,
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

export const ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh',
  
  // Wellness
  WELLNESS: '/wellness',
  HOSPITALS: '/wellness/hospitals',
  MATERNITY_HOMES: '/wellness/maternity-homes',
  
  // Attractions
  ATTRACTIONS: '/attractions',
  ATTRACTION_DETAIL: (id: string) => `/attractions/${id}`,
  
  // Transportation
  BUS_SCHEDULES: '/transportation/bus',
  SHUTTLE_SCHEDULES: '/transportation/shuttle',
  
  // News & Events
  NEWS: '/news',
  EVENTS: '/events',
  
  // Maps & Locations
  LOCATIONS: '/locations',
  NEARBY: '/locations/nearby',
};
