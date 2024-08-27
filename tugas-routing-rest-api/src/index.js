const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;

// 1. Route untuk mengembalikan daftar semua kategori
let categories = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Perabotan' }
];

app.get('/categories', (req, res) => {
    res.status(200).json({
        message: "Success fetch all categories",
        data: categories,
    });
});

// 2. Route untuk mengembalikan detail kategori berdasarkan ID
app.get('/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(cat => cat.id === categoryId);

    if (category) {
        res.status(200).json({
            message: "Success fetch category",
            data: category,
        });
    } else {
        res.status(404).json({
            message: "Category not found",
            data: null,
        });
    }
});

// 3. Route untuk menambahkan kategori baru
app.post('/categories', (req, res) => {
    const newCategory = {
        id: categories.length + 1,
        name: req.body.name,
    };
    categories.push(newCategory);

    res.status(201).json({
        message: "Category added successfully",
        data: newCategory,
    });
});

// 4. Route untuk memperbarui kategori berdasarkan ID
app.put('/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex(cat => cat.id === categoryId);

    if (categoryIndex !== -1) {
        categories[categoryIndex].name = req.body.name;

        res.status(200).json({
            message: "Category updated successfully",
            data: categories[categoryIndex],
        });
    } else {
        res.status(404).json({
            message: "Category not found",
            data: null,
        });
    }
});

// 5. Route untuk menghapus kategori berdasarkan ID
app.delete('/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex(cat => cat.id === categoryId);

    if (categoryIndex !== -1) {
        const deletedCategory = categories.splice(categoryIndex, 1);

        res.status(200).json({
            message: "Category deleted successfully",
            data: deletedCategory[0],
        });
    } else {
        res.status(404).json({
            message: "Category not found",
            data: null,
        });
    }
});

// 6. Route untuk mencari produk berdasarkan nama
let products = [
    { id: 1, name: 'Laptop', category: 'Elektronik' },
    { id: 2, name: 'Meja', category: 'Perabotan' }
];

app.get('/products', (req, res) => {
    const searchQuery = req.query.name.toLowerCase(); // Mengubah pencarian ke huruf kecil
    const filteredProducts = products.filter(prod =>
        prod.name.toLowerCase().includes(searchQuery) // Mengubah nama produk ke huruf kecil
    );

    res.status(200).json({
        message: "Success fetch products",
        data: filteredProducts,
    });
});

// 7. Route untuk mendapatkan produk dalam kategori tertentu dan mencari berdasarkan nama
app.get('/categories/:category/products', (req, res) => {
    const category = req.params.category.toLowerCase();
    const searchQuery = req.query.name ? req.query.name.toLowerCase() : '';

    const filteredProducts = products.filter(prod =>
        prod.category.toLowerCase() === category &&
        prod.name.toLowerCase().includes(searchQuery)
    );

    res.status(200).json({
        message: "Success fetch products in category",
        data: filteredProducts,
    });
});

// Menjalankan Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
