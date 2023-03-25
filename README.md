# Clothing Store

This is a full-stack web application for an e-commerce clothing store, built using React, Redux, Firebase, and Stripe. The application allows users to browse different categories of clothing, add items to their cart, and securely checkout using Stripe payment processing.

## Features

- User authentication using Firebase Authentication
- Database management using Firebase Firestore
- Integration with Stripe for secure payment processing
- Responsive design for mobile and desktop devices
- Dynamic filtering of clothing items by category
- User account management, including order history and saved addresses
- Admin panel for managing products and orders

## Getting Started

### Prerequisites

- Node.js installed on your system
- A Firebase account and project set up
- A Stripe account and API keys

### Installation

1.  Clone the repository:

        git clone https://github.com/ayushgpt01/clothing-store.git`

2.  Install dependencies:

        cd clothing-store
        npm install`

3.  Create a `.env` file in the root directory and add your Firebase and Stripe API keys:

        REACT_APP_FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY>
        REACT_APP_FIREBASE_AUTH_DOMAIN=<YOUR_FIREBASE_AUTH_DOMAIN>
        REACT_APP_FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
        REACT_APP_FIREBASE_STORAGE_BUCKET=<YOUR_FIREBASE_STORAGE_BUCKET>
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<YOUR_FIREBASE_MESSAGING_SENDER_ID>
        REACT_APP_FIREBASE_APP_ID=<YOUR_FIREBASE_APP_ID>
        REACT_APP_STRIPE_PUBLISHABLE_KEY=<YOUR_STRIPE_PUBLISHABLE_KEY>`

4.  Start the development server:

        npm start

## Usage

### User Interface

- Browse products by category using the navigation menu or homepage sections.
- Click on a product to view details and add it to the cart.
- Navigate to the cart to view and edit items, and proceed to checkout.
- Enter shipping and payment information and complete the order.
- Sign up to save your data for later time.
- Sign in to pick up where you left.

## Contributing

Contributions are welcome! Please open an issue or pull request for any bug fixes or new features.
