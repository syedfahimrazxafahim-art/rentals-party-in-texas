export type PageTab = 'home' | 'services' | 'fleet' | 'experiences' | 'destinations' | 'pricing' | 'gallery' | 'reviews' | 'contact';

export interface Amenity {
  id: string;
  name: string;
  description: string;
  category: 'sound' | 'comfort' | 'party' | 'safety';
  icon: string;
  highlight?: boolean;
}

export interface DeckHotspot {
  id: string;
  title: string;
  x: number; // percentage across boat (0-100)
  y: number; // percentage down boat (0-100)
  description: string;
  feature: string;
  icon: string;
  badgeColor: 'pink' | 'cyan' | 'green' | 'yellow';
}

export interface ExperiencePackage {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  duration: string;
  price: number;
  originalPrice?: number;
  tag: string;
  color: 'pink' | 'cyan' | 'green' | 'purple';
  highlights: string[];
  popular?: boolean;
  idealFor: string;
  imageUrl?: string;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  location: string;
  vibe: string;
  launchPoint: string;
  keySpots: string[];
  bestTime: string;
  description: string;
  popularEvents: string;
  color: 'pink' | 'cyan' | 'green';
  imageUrl?: string;
}


export interface PricingPackage {
  id: string;
  hours: number;
  title: string;
  price: number;
  originalPrice?: number;
  savings?: number;
  popular?: boolean;
  features: string[];
  recommendedFor: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  lake: string;
  comment: string;
  event: string;
  avatarBg: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'glow' | 'day' | 'dj' | 'birthdays' | 'fleet';
  description: string;
  dateTag: string;
  location: string;
  featured?: boolean;
  accentColor: string;
  stats?: string;
  imageUrl: string;
}

export interface BookingFormState {
  destination: string;
  experienceType: string;
  date: string;
  timeSlot: string;
  durationHours: number;
  guestCount: number;
  addOnIslandDock: boolean;
  addOnLiveDJ: boolean;
  addOnGlowPack: boolean;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  notes: string;
}
