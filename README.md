# 🍕 Fast React Pizza

A modern, responsive pizza ordering application built with React, Redux Toolkit, and React Router. This application provides a seamless pizza ordering experience with real-time menu loading, cart management, geolocation services, and order tracking.

## ✨ Features

### 🏠 **User Experience**
- **Welcome Screen**: Personalized greeting with user name storage
- **Responsive Design**: Fully responsive UI built with Tailwind CSS
- **Modern Interface**: Clean, intuitive design with smooth user interactions

### 🍕 **Menu & Ordering**
- **Dynamic Menu**: Real-time pizza menu loaded from external API
- **Pizza Details**: Complete information including ingredients, prices, and availability
- **Add to Cart**: Easy one-click pizza selection with quantity management
- **Sold Out Handling**: Clear indication of unavailable items

### 🛒 **Shopping Cart**
- **Cart Management**: Add, remove, and update pizza quantities with intuitive controls
- **Price Calculation**: Real-time total price updates including priority pricing
- **Cart Persistence**: Cart state maintained across navigation using Redux
- **Empty Cart Handling**: Graceful empty cart state with call-to-action
- **Quantity Controls**: Increase/decrease quantity directly from menu and cart
- **Cart Overview**: Persistent cart summary in header with total items and price

### 📍 **Location Services**
- **Geolocation Integration**: One-click automatic address detection using browser geolocation API
- **Address Validation**: Manual address input with form validation
- **Reverse Geocoding**: Convert GPS coordinates to readable addresses using external geocoding service
- **Location Error Handling**: Graceful fallback when geolocation fails or is denied

### 📋 **Order Management**
- **Order Creation**: Comprehensive order form with validation
- **Phone Validation**: Regex-based phone number validation with international format support
- **Priority Orders**: Optional priority delivery with price adjustment (+20%)
- **Order Tracking**: Real-time order status and details with estimated delivery time
- **Order Search**: Find orders by ID through search functionality
- **Order Updates**: Ability to make existing orders priority after placement

### 🔄 **State Management**
- **Redux Toolkit**: Centralized state management for cart and user data
- **Async Actions**: Thunk middleware for geolocation and API calls
- **Optimistic Updates**: Smooth UI updates with proper error handling

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **Redux Toolkit** - Simplified Redux for state management
- **React Router DOM v6** - Client-side routing with loaders and actions
- **Tailwind CSS** - Utility-first CSS framework for styling

### **Build Tools**
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting with Tailwind plugin

### **APIs & Services**
- **Pizza API** - External REST API (react-fast-pizza-api.jonas.io) for menu and order management
- **Geolocation API** - Browser-based location services with position tracking
- **Geocoding API** - BigDataCloud reverse geocoding service for address resolution

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fast-react-pizza.git
   cd fast-react-pizza
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Application Flow

1. **Welcome** → Enter your name to get started
2. **Menu** → Browse available pizzas and add to cart
3. **Cart** → Review selections and proceed to order
4. **Order Form** → Fill details, get location, set priority
5. **Order Confirmation** → Receive order ID and tracking info
6. **Order Tracking** → Monitor order status and details

## 🏗️ Project Structure

```
src/
├── features/           # Feature-based organization
│   ├── cart/          # Cart management (Redux slice, components)
│   ├── menu/          # Menu display and pizza items
│   ├── order/         # Order creation and tracking
│   └── user/          # User management and geolocation
├── services/          # API services
│   ├── apiRestaurant.js  # Pizza menu and order API
│   └── apiGeocoding.js   # Location services
├── ui/                # Reusable UI components
│   ├── AppLayout.jsx     # Main layout component
│   ├── Button.jsx        # Reusable button component
│   └── ...
├── utils/             # Helper functions
└── store.js           # Redux store configuration
```

## 🔧 Key Features Implementation

### Redux State Management
- **User Slice**: Username storage, geolocation state, and address management
- **Cart Slice**: Complete shopping cart with add, remove, update, and clear operations
- **Async Thunks**: Geolocation fetching with comprehensive error handling
- **Selectors**: Optimized state selectors for cart totals and item quantities

### React Router Integration
- **Loaders**: Pre-route data fetching for menu and order details
- **Actions**: Form submission handling for order creation and updates
- **Error Boundaries**: Comprehensive error handling with user-friendly messages
- **Navigation States**: Loading states during form submissions

### Responsive Design
- **Mobile-First**: Fully optimized for mobile devices with touch-friendly interfaces
- **Tailwind CSS**: Utility-first CSS with custom component styling
- **Flexible Layouts**: Seamless adaptation across all screen sizes
- **Interactive Elements**: Smooth transitions and hover effects

## 🌟 Advanced Features

- **Form Validation**: Client-side validation with real-time error messages and regex patterns
- **Loading States**: Contextual loading indicators for geolocation, form submission, and data fetching
- **Error Handling**: Comprehensive error boundaries with user-friendly feedback messages
- **Performance**: Optimized rendering with Redux state management and component memoization
- **Accessibility**: Semantic HTML, proper form labels, and keyboard navigation support
- **Optimistic Updates**: Smooth UI updates with proper error rollback mechanisms
- **Conditional Rendering**: Smart UI that adapts based on cart state, user status, and order progress

## 🚀 Deployment

The application is ready for deployment on platforms like:
- **Netlify** - Static site hosting
- **Vercel** - React application hosting
- **GitHub Pages** - Free static hosting

Build the project for production:
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Pizza API provided by Jonas Schmedtmann's React course
- Geolocation services for address resolution
- Tailwind CSS for the beautiful styling system

---

**Built with ❤️ using React, Redux, and modern web technologies**
