const products = document.getElementById('container-products');

// Al cargar la pagina
const fetchProducts = async () => {
    const response = await fetch('https://bsale-project-backend-production.up.railway.app/products');
    const data = await response.json();
    console.log(data);
    products.innerHTML = '';
    data.forEach((product) => {
        products.innerHTML += `
        <div class="product">
        <img src="${product.url_image}">
        <div class="product-info">
            <h4 class="title">${product.name}</h4>
            <p>Precio: $${product.price}</p>
            <p>Categoria: A-${product.category}</p>
        </div>
        </div>
        `;
    });  
    }
fetchProducts();

// Buscar un producto por termino

const getProductbyTerm = async(term) =>{
    const response = await fetch(`https://bsale-project-backend-production.up.railway.app/products/${term}`);
    const data = await response.json();
    console.log(data);
    products.innerHTML = '';
    data.forEach((product) => {
        products.innerHTML += `
        <div class="product">
        <img src="${product.url_image}">
        <div class="product-info">
            <h4 class="title">${product.name}</h4>
            <p>Precio: $${product.price}</p>
            <p>Categoria: A-${product.category}</p>
        </div>
        </div>
        `;
    });  
}
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e)
    const term = document.getElementById('name').value;
    getProductbyTerm(term);
});
