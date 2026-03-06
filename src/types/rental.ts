export interface Host {
  name?: string;
  picture?: string;
}

export interface Rental {
  id?: string;
  title?: string;
  cover?: string;
  pictures?: string[];
  description?: string;
  host?: Host;
  rating?: string;
  location?: string;
  equipments?: string[];
  tags?: string[];
}

export interface NormalizedRental extends Rental {
  id: string;
  title: string;
  cover: string;
  description: string;
  location: string;
  host: {
    name: string;
    picture: string;
  };
  images: string[];
  totalImages: number;
  locationTags: string[];
  ratingValue: number;
  locationRatingMax: number;
}
