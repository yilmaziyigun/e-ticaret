// 1. Ürün Veritabanı (Zara ve Mavi Benzeri)
const products = [
    {
        id: 1,
        brand: "ZARA",
        name: "Oversize Blazer Ceket",
        price: 1899,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        brand: "MAVI",
        name: "Slim Fit Jean",
        price: 950,
        image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        brand: "ZARA",
        name: "Basic Beyaz Gömlek",
        price: 690,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        brand: "MAVI",
        name: "Denim Ceket",
        price: 1250,
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        brand: "ZARA",
        name: "Keten Pantolon",
        price: 1100,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        brand: "MAVI",
        name: "Logo Baskılı T-Shirt",
        price: 350,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];

// Sepet Dizisi
let cart = [];

const productListElement = document.getElementById('product-list');
const cartItemsElement = document.getElementById('cart-items');
const cartSidebar = document.getElementById('cart-sidebar');
const totalElement = document.getElementById('total-price');
const cartCountElement = document.getElementById('cart-count');

// Sayfa Yüklenince Ürünleri Listele
function initApp() {
    products.forEach(product => {
        const productBox = document.createElement('div');
        productBox.classList.add('product-box');
        productBox.innerHTML = `
            <img src="${product.image}" alt="" class="product-img">
            <h2 class="product-brand">${product.brand}</h2>
            <h3 class="product-title">${product.name}</h3>
            <span class="product-price">${product.price} TL</span>
            <i class="fa-solid fa-cart-plus add-cart" onclick="addToCart(${product.id})"></i>
        `;
        productListElement.appendChild(productBox);
    });
}

// Sepeti Aç/Kapa
function toggleCart() {
    cartSidebar.classList.toggle('active');
}

// Sepete Ekle
function addToCart(id) {
    // Ürünü bul
    const product = products.find(p => p.id === id);
    
    // Sepette var mı kontrol et
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        alert("Bu ürün zaten sepetinizde!");
    } else {
        cart.push(product);
        updateCart();
        // Sepeti otomatik aç (kullanıcı görsün diye)
        if(!cartSidebar.classList.contains('active')){
            toggleCart();
        }
    }
}

// Sepetten Çıkar
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Sepeti Güncelle (HTML Render + Toplam Fiyat)
function updateCart() {
    // 1. HTML'i temizle
    cartItemsElement.innerHTML = "";
    
    let totalPrice = 0;

    // 2. Yeni listeyi yaz
    cart.forEach(item => {
        totalPrice += item.price;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-box-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="" class="cart-img">
            <div class="detail-box">
                <div class="cart-product-title">${item.brand} ${item.name}</div>
                <div class="cart-price">${item.price} TL</div>
            </div>
            <i class="fa-solid fa-trash cart-remove" onclick="removeFromCart(${item.id})"></i>
        `;
        cartItemsElement.appendChild(cartItem);
    });

    // 3. Toplam Fiyatı ve İkon Sayısını Güncelle
    totalElement.innerText = totalPrice + " TL";
    cartCountElement.innerText = cart.length;
}

// Uygulamayı Başlat
initApp();
