# Baggy E-commerce Backend

A robust Node.js/Express backend for an e-commerce platform with user authentication, product management, and cart functionality.

## Tech Stack

- Node.js & Express
- MongoDB with Mongoose
- JWT Authentication
- Multer for file uploads
- CORS enabled
- BCrypt for password hashing

## Project Structure
```
Backend/
├── config/
│   ├── db-config.js      # MongoDB connection
│   └── multer-config.js  # File upload config
├── controllers/
│   ├── productController.js
│   └── userController.js
├── middlewares/
│   └── isLoggedIn.js
├── models/
│   ├── owner.js
│   ├── product.js
│   └── user.js
├── public/
│   └── images/
│       └── uploads/      # Product images storage
├── routes/
│   ├── indexRoute.js
│   ├── ownerRoute.js
│   ├── productRoute.js
│   └── userRoute.js
├── utils/
│   ├── generatetoken.js
│   └── verifytoken.js
├── app.js
└── package.json
```

## Prerequisites

- Node.js
- MongoDB
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
```bash
cd Backend
npm install
```

3. Create `.env` file with:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
```

4. Create uploads directory:
```bash
mkdir -p public/images/uploads
```

5. Start the server:
```bash
node app.js
```

## API Endpoints

### Authentication & User
- `POST /user/register` - Register new user
  ```json
  {
    "fullname": "string",
    "email": "string",
    "password": "string"
  }
  ```
- `POST /user/login` - Login user
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- `GET /user` - Get user data (requires token)
- `POST /user/addtocart` - Add to cart
- `GET /user/cart` - Get cart items

### Products
- `GET /product` - Get all products
- `GET /product/getproducts` - Get specific products
- `POST /product/create` - Create product (multipart/form-data)
  ```json
  {
    "productName": "string",
    "productPrice": "number",
    "discountPrice": "number",
    "backgroundColor": "string",
    "panelColor": "string",
    "textColor": "string",
    "image": "file"
  }
  ```
- `POST /product/delete` - Delete all products

### Owner
- `POST /owner/create` - Create owner (single instance)
- `GET /owner` - Owner dashboard

## Models

### User
- fullname: String
- email: String
- password: String (hashed)
- cart: [ProductIds]
- orders: [ProductIds]
- contact: Number
- picture: String

### Product
- image: String
- name: String
- price: Number
- discount: Number
- bgcolor: String
- panelcolor: String
- textcolor: String
- created: Date

### Owner
- fullname: String
- email: String
- password: String
- products: [ProductIds]
- picture: String

## Security Features

- Password hashing with BCrypt
- JWT based authentication
- Protected routes with middleware
- CORS enabled
- Secure file uploads with Multer

## File Upload

- Supports image uploads for products
- Random filename generation
- Stored in public/images/uploads
- Accessible via /image/:filename

## Development

```bash
npm install nodemon -D
nodemon app.js
```

## Environment Variables

Create a `.env` file in the root directory with:
(Note: Never commit this file to version control)

- MONGODB_URI
- JWT_SECRET_KEY

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## License

ISC