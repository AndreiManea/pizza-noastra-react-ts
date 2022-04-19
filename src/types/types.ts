export interface Field {
  value: string;
  error: boolean;
}

export interface Form {
  name: Field;
  city: Field;
  address: Field;
  telephone: Field;
  mentions?: Field;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  extras?: { name: string; price: number; count?: number }[];
  type: string;
  sauce?: string;
  size?: string;
}

export interface IModalType {
  type: EModalType;
}

export enum EModalType {
  PIZZA = 'PizzaModal',
  CRISPY = 'CrispyModal',
  BURGER = 'BurgerModal',
  BUCKET = 'BucketModal',
  SUMMARY = 'SummaryModal'
}

export interface ModalProduct {
  name: string;
  id: string;
  size?: string;
  type: string;
  sauce?: string;
  extras?: { id: string; name: string; price: number; count?: number }[];
  bucket?: boolean;
  price?: number;
  largePrice?: number;
  mediumPrice?: number;
}
