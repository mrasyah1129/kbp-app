
// API Endpoints Configuration
export const API_ENDPOINTS = {
  // Wellness endpoints
  wellness: {
    list: '/wellness',
    detail: (id: string | number) => `/wellness/${id}`,
    categories: '/wellness/categories',
    search: '/wellness/search',
  },
  
  // User endpoints
  user: {
    profile: '/user/profile',
    login: '/auth/login',
    logout: '/auth/logout',
    register: '/auth/register',
  },
  
  // News endpoints
  news: {
    list: '/news',
    detail: (id: string | number) => `/news/${id}`,
    categories: '/news/categories',
  },
  
  // Transportation endpoints
  transportation: {
    buses: '/transportation/buses',
    schedules: '/transportation/schedules',
    routes: '/transportation/routes',
  },
  
  // Attractions endpoints
  attractions: {
    list: '/attractions',
    detail: (id: string | number) => `/attractions/${id}`,
    categories: '/attractions/categories',
  },
  
  // Maps endpoints
  maps: {
    locations: '/maps/locations',
    search: '/maps/search',
  },
} as const;

// Helper function to build full URLs
export const buildUrl = (endpoint: string, baseUrl?: string): string => {
  const base = baseUrl || process.env.EXPO_PUBLIC_API_URL || 'https://api.kbpayuk.com';
  return `${base}${endpoint}`;
};
