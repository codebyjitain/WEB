# Baggy E-commerce Frontend

A modern React-based frontend for the Baggy e-commerce platform built with Vite, Redux Toolkit, and TailwindCSS.

## Features

- User authentication (Login/Register)
- Product browsing and cart management
- Admin panel for product management
- Real-time notifications using react-toastify
- Responsive design with Tailwind CSS
- State management with Redux Toolkit
- Protected routes for authenticated users

## Tech Stack

- React 19
- Vite 7
- Redux Toolkit
- React Router DOM v7
- Axios for API calls
- TailwindCSS
- React Toastify

## Project Structure

```
Frontend/
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Reusable components
│   │   ├── AdminBag.jsx
│   │   ├── Amount.jsx
│   │   ├── Bag.jsx
│   │   ├── CartBag.jsx
│   │   ├── Logout.jsx
│   │   └── Navbar.jsx
│   ├── pages/          # Route components
│   │   ├── AdminPanel.jsx
│   │   ├── Cart.jsx
│   │   ├── Home.jsx
│   │   ├── LoginAndRegisterUser.jsx
│   │   ├── NewProduct.jsx
│   │   └── UserProtectedWrapper.jsx
│   ├── redux/          # Redux store and slices
│   │   ├── store.js
│   │   └── slices/
│   │       ├── productSlice.js
│   │       └── userSlice.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── public/             # Public assets
```

## Setup & Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create a `.env` file in the root directory with:
```
VITE_BASE_URL=your_backend_api_url
```

4. **Start development server**
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Components

### Pages
- **Home** - Main product listing page
- **Cart** - Shopping cart view
- **AdminPanel** - Product management for admins
- **LoginAndRegisterUser** - Authentication page
- **NewProduct** - Product creation form

### Reusable Components
- **Navbar** - Site navigation
- **Bag** - Product card component
- **CartBag** - Cart item component
- **Amount** - Price breakdown component
- **AdminBag** - Admin product view

## State Management

Redux is used for state management with two main slices:
- **userSlice** - Manages user authentication state
- **productSlice** - Manages product data

## Routing

Protected routes are implemented using `UserProtectedWrapper`:
```jsx
<Route path='/' element={
  <UserProtectedWrapper>
    <Home />
  </UserProtectedWrapper>
} />
```

## API Integration

Axios is used for API calls with base URL configured from environment variables:
```javascript
axios.get(`${import.meta.env.VITE_BASE_URL}/endpoint`)
```

## Styling

- TailwindCSS for utility-first styling
- Custom CSS in index.css for global styles

## Authentication Flow

1. User logs in/registers
2. JWT token stored in localStorage
3. Protected routes check for token
4. Automatic redirects to login if unauthorized

## Development

1. Follow ESLint rules configured in `eslint.config.js`
2. Use provided components for consistency
3. Keep components small and focused
4. Use Redux for global state management

## Building for Production

```bash
npm run build
```
Builds the app for production to the `dist` folder.

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License

ISC