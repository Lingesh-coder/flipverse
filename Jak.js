const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 1250.45,
        category: "fiction",
        description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
        rating: 4,
        image: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 1130.54,
        category: "fiction",
        description: "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature, winning the Pulitzer Prize.",
        rating: 5,
        image: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        price: 4999.88,
        category: "fiction",
        description: "Nineteen Eighty-Four (also stylised as 1984) is a dystopian social science fiction novel and cautionary tale written by the English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.",
        rating: 4,
        image: "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 4,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        price: 1575,
        category: "science",
        description: "A Brief History of Time: From the Big Bang to Black Holes is a book on theoretical cosmology by English physicist Stephen Hawking. It was first published in 1988. Hawking wrote the book for readers without prior knowledge of physics and people who are just interested in learning something new.",
        rating: 4,
        image: "https://th.bing.com/th/id/R.598f8136bde8c7f17cab8e9646c89b88?rik=TZY%2fXUlOKZBh6Q&riu=http%3a%2f%2fimg1.imagesbn.com%2fp%2f9780553103748_p0_v2_s260x420.jpg&ehk=G2tS3fBBfXWw%2bYYBMPktUn3J%2fVr7A100lRVMg%2bJGgyI%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        id: 5,
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        price: 1475,
        category: "science",
        description: "The Selfish Gene is a 1976 book on evolution by the ethologist Richard Dawkins, in which the author builds upon the principal theory of George C. Williams's Adaptation and Natural Selection (1966). Dawkins uses the term 'selfish gene' as a way of expressing the gene-centred view of evolution (as opposed to the views focused on the organism and the group), popularising ideas developed during the 1960s by W. D. Hamilton and others.",
        rating: 5,
        image: "https://th.bing.com/th/id/OIP.-gpWoEG-4kWY7HlcCKKeyAAAAA?rs=1&pid=ImgDetMain"
    },
    {
        id: 6,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        price: 1899,
        category: "non-fiction",
        description: "Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari, first published in Hebrew in Israel in 2011 based on a series of lectures Harari taught at The Hebrew University of Jerusalem, and in English in 2014. The book surveys the history of humankind from the evolution of archaic human species in the Stone Age up to the twenty-first century, focusing on Homo sapiens.",
        rating: 5,
        image: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 7,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        price: 2250.99,
        category: "fantasy",
        description: "The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, intended to be Earth at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work.",
        rating: 5,
        image: "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 8,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 1199,
        category: "fantasy",
        description: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.",
        rating: 4,
        image: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg"
    }				
];

const bookCatalog = document.getElementById('book-catalog');
const bookDetails = document.getElementById('book-details');
const shoppingCart = document.getElementById('shopping-cart');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cartBtn = document.getElementById('cart-btn');
const backBtn = document.getElementById('back-btn');
const closeCart = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const navLinks = document.querySelectorAll('nav a');
const notification = document.getElementById('notification');

let cart = [];

function displayBooks(booksToDisplay) {
    bookCatalog.innerHTML = '';
    
    if (booksToDisplay.length === 0) {
        const noBooksMessage = document.createElement('div');
        noBooksMessage.className = 'no-books-found';
        noBooksMessage.innerHTML = `
            <i class="fas fa-book-open"></i>
            <p>No books found matching your criteria</p>
            <p>Try a different search term or category</p>
        `;
        bookCatalog.appendChild(noBooksMessage);
        return;
    }
    
    booksToDisplay.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <div class="book-image">
                <img src="${book.image}" alt="${book.title}">
            </div>
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="author">by ${book.author}</p>
                <p class="price">₹${book.price.toFixed(2)}</p>
                <p class="category">${book.category}</p>
                <div class="rating">${'★'.repeat(book.rating)}${'☆'.repeat(5 - book.rating)}</div>
                <button class="add-to-cart" data-id="${book.id}">Add to Cart</button>
            </div>
        `;
        
        bookCard.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart')) {
                showBookDetails(book.id);
            }
        });
        
        bookCatalog.appendChild(bookCard);
    });
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const bookId = parseInt(button.getAttribute('data-id'));
            addToCart(bookId);
        });
    });
}

function showBookDetails(bookId) {
    const book = books.find(b => b.id === bookId);
    
    if (book) {
        document.getElementById('details-img').src = book.image;
        document.getElementById('details-title').textContent = book.title;
        document.getElementById('details-author').textContent = `by ${book.author}`;
        document.getElementById('details-price').textContent = `₹${book.price.toFixed(2)}`;
        document.getElementById('details-category').textContent = book.category;
        document.getElementById('details-rating').innerHTML = `${'★'.repeat(book.rating)}${'☆'.repeat(5 - book.rating)}`;
        document.getElementById('details-description').textContent = book.description;
        document.getElementById('details-add-to-cart').setAttribute('data-id', book.id);
        document.getElementById('qty-value').textContent = '1';
        
        const addToCartBtn = document.getElementById('details-add-to-cart');
        const newAddToCartBtn = addToCartBtn.cloneNode(true);
        addToCartBtn.parentNode.replaceChild(newAddToCartBtn, addToCartBtn);
        
        newAddToCartBtn.addEventListener('click', () => {
            const bookId = parseInt(newAddToCartBtn.getAttribute('data-id'));
            const quantity = parseInt(document.getElementById('qty-value').textContent);
            addToCart(bookId, quantity);
        });
        
        bookCatalog.classList.add('hidden');
        bookDetails.classList.remove('hidden');
    }
}
function addToCart(bookId, quantity = 1) {
    const book = books.find(b => b.id === bookId);
    
    if (book) {
        const existingItem = cart.find(item => item.id === bookId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: book.id,
                title: book.title,
                price: book.price,
                image: book.image,
                quantity: quantity
            });
        }
        
        updateCart();
        showNotification(`${book.title} added to cart`);
    }
}

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
                <div class="cart-item-actions">
                    <button class="qty-btn decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn increase" data-id="${item.id}">+</button>
                    <button class="cart-item-remove" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `₹${total.toFixed(2)}`;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(button.getAttribute('data-id'));
            updateCartItemQuantity(id, -1);
        });
    });
    
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(button.getAttribute('data-id'));
            updateCartItemQuantity(id, 1);
        });
    });
    
    document.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(button.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}


function updateCartItemQuantity(bookId, change) {
    const item = cart.find(item => item.id === bookId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== bookId);
        }
        
        updateCart();
    }
}


function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    updateCart();
    showNotification('Item removed from cart');
}


function showNotification(message) {
    notification.textContent = message;
    notification.classList.remove('hidden');
    
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}


function filterBooksByCategory(category) {
    if (category === 'all') {
        displayBooks(books);
    } else {
        const filteredBooks = books.filter(book => book.category === category);
        displayBooks(filteredBooks);
    }
}


function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm.trim() === '') {
        displayBooks(books);
        return;
    }
    
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );
    
    displayBooks(filteredBooks);
}


searchBtn.addEventListener('click', searchBooks);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBooks();
    }
});

cartBtn.addEventListener('click', () => {
    shoppingCart.classList.remove('hidden');
});

backBtn.addEventListener('click', () => {
    bookDetails.classList.add('hidden');
    bookCatalog.classList.remove('hidden');
});

closeCart.addEventListener('click', () => {
    shoppingCart.classList.add('hidden');
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }
    
    showNotification('Checkout completed! Thank you for your purchase.');
    cart = [];
    updateCart();
    shoppingCart.classList.add('hidden');
});

document.getElementById('details-add-to-cart').addEventListener('click', () => {
    const bookId = parseInt(document.getElementById('details-add-to-cart').getAttribute('data-id'));
    const quantity = parseInt(document.getElementById('qty-value').textContent);
    addToCart(bookId, quantity);
});

document.getElementById('increase-qty').addEventListener('click', () => {
    const qtyElement = document.getElementById('qty-value');
    let qty = parseInt(qtyElement.textContent);
    qtyElement.textContent = qty + 1;
});

document.getElementById('decrease-qty').addEventListener('click', () => {
    const qtyElement = document.getElementById('qty-value');
    let qty = parseInt(qtyElement.textContent);
    if (qty > 1) {
        qtyElement.textContent = qty - 1;
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        filterBooksByCategory(category);
    });
});

displayBooks(books);