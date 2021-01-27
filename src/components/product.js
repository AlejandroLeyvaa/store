function productTemplate(productName, productUrl, productPrice) {
  const template = `
  <figure class="Product-figure">
    <img src="${productUrl}" alt="${productName}">
  </figure>
  <div class="Product-info">
    <div class="Product-name">
      <h2>${productName}</h2>
    </div>
    <div class="Product-desc">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed illo itaque neque autem consequuntur dignissimos in doloremque, aspernatur at cumque natus rerum corporis? Fugit earum, ratione animi odio qui dolor.</p>
    </div>
    <div class="Product-sell">
      <span class="Product-price">$${productPrice} MXN</span>
      <div class="Product-button-container">
        <button class="button addProduct">
          Buy
        </button>
      </div>
    </div>
  </div>
  `;
  return template;
}

export default productTemplate;