export interface Plan {
  id: string;
  name: string;
  speed: string; // e.g. "400 Mega"
  download: string; // e.g. "400 Mbps"
  upload: string; // e.g. "200 Mbps"
  price: number;
  period: string; // e.g. "/mês"
  features: string[];
  isPopular?: boolean;
  type: 'residential' | 'business';
  whatsAppLink: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  rating: number;
  text: string;
  avatarUrl?: string;
}

export interface CityCoverage {
  id: string;
  name: string;
  status: 'disponivel' | 'parcial' | 'brevemente';
  coordinates: { x: number; y: number }; // Relative coordinates for interactive map visualizer
  tech: string[]; // e.g., ["Fibra Óptica 100%", "Wi-Fi 6", "Suporte 24h", "5G FWA"]
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
