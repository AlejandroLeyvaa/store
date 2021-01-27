import productTemplate from './components/product.js';
import getElements from './utils/getElements.js';

import './styles/main.css';
import './styles/tablet.css';
import './styles/desktop.css';

// window.addEventListener('load', getData);

const initialState = {
  cart: [],
}

const createStore = (reducer, initialState) => {
  let state = initialState;
  let updater = () => {};
  const getState = () => state;

  console.log('State', state);
  console.log(state === getState);

  const dispatch = (action) => {
    state = reducer(state, action);
    updater();
  }

  const subscribe = (listener) => {
    updater = listener;
  }

  return {
    getState,
    dispatch,
    subscribe,
  }
}

const reducer = (state, action) => {
  console.log('state', state, action)
  switch (action.type) {
    case 'addToCart':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
  }
}

const store = createStore(reducer, initialState);

const buy = (item) => {
  store.dispatch({
    type: 'addToCart',
    payload: item,
  })
}

function getData() {
  fetch('https://cross-platform.herokuapp.com/api/products/')
    .then((response) => response.json())
    .then((productData) => {
      const productsContainer = document.getElementById('products');
      productData.data.forEach((item) => {
        const { product_name, product_url, product_price } = item;
        const product = productTemplate(
          product_name,
          product_url,
          product_price
        );
        const createDiv = document.createElement('div');

        createDiv.className = 'Product-container';
        createDiv.innerHTML = product;
        productsContainer.appendChild(createDiv);
      });

      getElements(productData.data, buy, store);
    })
    .catch((err) => console.error(err));
}

getData();
