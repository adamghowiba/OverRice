export interface BaseFood {
  src: string;
  title: string;
  sides: string;
  price?: number;
  description: string;
}

export interface Meats {
  title: string;
  description: string;
}

export interface Mains extends BaseFood {
  includes: string[];
  meats?: Meats[];
}

export interface Foods {
  Mains: Mains[];
  Pupus: BaseFood[];
}
