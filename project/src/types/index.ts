export interface ConcreteProduct {
  id: number;
  name: string;
  basePrice: number;
  additivePrice: number;
  description: string;
  image: string;
}

export interface StoneProduct {
  id: number;
  size: string;
  price: number;
  description: string;
  image: string;
  applications: string[];
}

export interface Equipment {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

export interface ContactInfo {
  address: string;
  phones: string[];
  email: string;
}