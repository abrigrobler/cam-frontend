//Interface must be consistent with Strapi backend
export interface ProductImageInterface {
  id: number;
  name: string;
  alternativeText: string;
  url: string;
  formats: {
    medium: {
      name: string;
      url: string;
    };
    small: {
      name: string;
      url: string;
    };
    thumbnail: {
      name: string;
      url: string;
    };
  };
}

export interface ProductInterface {
  id: string;
  Name: string;
  Description: string;
  Price: number;
  Images: ProductImageInterface[];
  Category: string;
  Negotiable: boolean;
  Sold: boolean;
}

export const productCategories = [
  'rings',
  'bracelets',
  'necklaces',
  'jewellery',
  'homeware',
  'miscellaneous',
];
