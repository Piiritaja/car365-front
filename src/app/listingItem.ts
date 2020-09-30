export interface ListingItem {
  id: string;
  title: string;
  description: string;
  status: string;
  ownerId: string;
  listedCarId: string;
  price: number;
  location: string;
  images: string[];
}
