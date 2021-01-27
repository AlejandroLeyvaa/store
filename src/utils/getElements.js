function getElements(items, buy, store) {
  // console.log(']I', items, setState)
  const buttons = document.querySelectorAll('.addProduct');
  const productsInCart = document.getElementById('cart');

  console.log(buttons);
  buttons.forEach((button, i) => {
    button.addEventListener('click', (e) => {
      const item = items[i];
      store.subscribe(() => {
        productsInCart.innerText = store.getState().cart.length;
      });
      buy(item);
    });
  });
}

export default getElements;
