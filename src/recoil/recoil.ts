import { atom } from 'recoil';
import { CartItem, Form, IModalType, ModalProduct } from '../types/types';

const NULL_FORM: Form = {
  name: { value: '', error: false },
  city: { value: 'Selectati Localitatea', error: false },
  address: { value: '', error: false },
  telephone: { value: '', error: false },
  mentions: { value: '', error: false }
};

const NULL_CART_ITEM: CartItem = {
  id: 'null',
  name: '',
  price: 0,
  extras: [],
  type: ''
};

export const ordersForm = atom<Form>({
  key: 'ordersForm',
  default: NULL_FORM
});

export const cart = atom<CartItem[]>({
  key: 'cart',
  default: []
});

export const cartItm = atom<CartItem>({
  key: 'cartItm',
  default: NULL_CART_ITEM
});

export const modalType = atom<IModalType>({
  key: 'modalType',
  default: { type: null }
});

export const modalProduct = atom<ModalProduct>({
  key: 'modalProduct',
  default: null
});

export const orderSuccess = atom<boolean>({
  key: 'orderSuccess',
  default: false
});

export const cartAnimation = atom({
  key: 'cartAnimation',
  default: {
    pizza: false,
    burger: false,
    crispy: false,
    bucket: false
  }
});
