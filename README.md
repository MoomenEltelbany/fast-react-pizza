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
- **Cart Management**: Add, remove, and update pizza quantities
- **Price Calculation**: Real-time total price updates
- **Cart Persistence**: Cart state maintained across navigation
- **Empty Cart Handling**: Graceful empty cart state with call-to-action

### 📍 **Location Services**
- **Geolocation Integration**: Automatic address detection using browser geolocation
- **Address Validation**: Manual address input with validation
- **Reverse Geocoding**: Convert coordinates to readable addresses

### 📋 **Order Management**
- **Order Creation**: Comprehensive order form with validation
- **Phone Validation**: Regex-based phone number validation
- **Priority Orders**: Optional priority delivery with price adjustment (+20%)
- **Order Tracking**: Real-time order status and details
- **Order Search**: Find orders by ID

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
- **Pizza API** - External API for menu and order management
- **Geolocation API** - Browser-based location services
- **Geocoding API** - Address resolution services

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
- **User Slice**: Name storage and geolocation state
- **Cart Slice**: Shopping cart with CRUD operations
- **Async Thunks**: Geolocation fetching with error handling

### React Router Integration
- **Loaders**: Data fetching before route rendering
- **Actions**: Form submission handling
- **Error Boundaries**: Graceful error handling

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tailwind CSS**: Utility classes for rapid styling
- **Flexible Layouts**: Adapts to different screen sizes

## 🌟 Advanced Features

- **Form Validation**: Client-side validation with error messages
- **Loading States**: Proper loading indicators for async operations
- **Error Handling**: Comprehensive error boundaries and user feedback
- **Performance**: Optimized rendering with proper state management
- **Accessibility**: Semantic HTML and proper form labels

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
