/* Genel Ayarlar */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f4f4;
    color: #333;
}

/* Header Tasarımı */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 20px 5%;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo h1 {
    color: #ff5722;
    font-size: 24px;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li a {
    text-decoration: none;
    color: #333;
    margin: 0 15px;
    font-weight: 500;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #ff5722;
}

.cart-icon {
    position: relative;
    cursor: pointer;
    font-size: 20px;
}

#cart-count {
    position: absolute;
    top: -8px;
    right: -10px;
    background: #ff5722;
    color: #fff;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
}

/* Hero Banner */
.hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    height: 400px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
}

.hero h2 {
    font-size: 40px;
    margin-bottom: 10px;
}

.hero button {
    padding: 10px 20px;
    background-color: #ff5722;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
}

/* Ürünler Alanı */
.container {
    padding: 40px 5%;
}

.container h2 {
    text-align: center;
    margin-bottom: 30px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.product-card {
    background: #fff;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 15px;
}

.product-card h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.product-card .price {
    color: #ff5722;
    font-weight: bold;
    font-size: 18px;
    display: block;
    margin-bottom: 15px;
}

.add-btn {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    transition: background 0.3s;
}

.add-btn:hover {
    background-color: #ff5722;
}

/* Footer */
footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 20px;
    margin-top: 40px;
}