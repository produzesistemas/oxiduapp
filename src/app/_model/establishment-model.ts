import { City } from './city-model';

export class Establishment {
    id: number;
    name: string;
    details: string;
    imageName: string;
    publicPlace: string;
    postalCode: string;
    telephone: string;
  district: string;
  subCategoryId: number;
  cityId: number;
    state: string;
    email: string;
    facebook: string;
    instagram: string;
    description: string;
    webSite: string;
    city: City;
    isPartner: boolean; 
    whatsApp: string;

    public constructor(init?: Partial<Establishment>) {
        Object.assign(this, init);
    }
}
