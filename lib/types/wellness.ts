
export interface WellnessLocation {
  id: string;
  name: string;
  type: 'hospital' | 'maternity_home' | 'clinic';
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  image: string;
  description: string;
  facilities: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  reviews: number;
  isOpen: boolean;
  operatingHours: {
    [key: string]: {
      open: string;
      close: string;
    };
  };
}

export interface WellnessCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  locations: WellnessLocation[];
}

export interface WellnessResponse {
  categories: WellnessCategory[];
  featured: WellnessLocation[];
  totalCount: number;
}
