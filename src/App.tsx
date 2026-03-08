import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { VehicleProvider } from "@/contexts/VehicleContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import BookingPage from "./pages/BookingPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AccountPage from "./pages/AccountPage";
import AccountOrdersPage from "./pages/AccountOrdersPage";
import AccountBookingsPage from "./pages/AccountBookingsPage";
import AccountVehiclesPage from "./pages/AccountVehiclesPage";
import AccountAddressesPage from "./pages/AccountAddressesPage";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminBookingsPage from "./pages/admin/AdminBookingsPage";
import AdminCategoriesPage from "./pages/admin/AdminCategoriesPage";
import { AdminInventoryPage, AdminVehiclesPage, AdminCustomersPage, AdminReviewsPage, AdminSettingsPage } from "./pages/admin/AdminMiscPages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function StorefrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <VehicleProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* Storefront */}
                <Route path="/" element={<StorefrontLayout><HomePage /></StorefrontLayout>} />
                <Route path="/products" element={<StorefrontLayout><ProductsPage /></StorefrontLayout>} />
                <Route path="/products/:slug" element={<StorefrontLayout><ProductDetailPage /></StorefrontLayout>} />
                <Route path="/categories/:slug" element={<StorefrontLayout><CategoryPage /></StorefrontLayout>} />
                <Route path="/search" element={<StorefrontLayout><SearchPage /></StorefrontLayout>} />
                <Route path="/cart" element={<StorefrontLayout><CartPage /></StorefrontLayout>} />
                <Route path="/checkout" element={<StorefrontLayout><CheckoutPage /></StorefrontLayout>} />
                <Route path="/order-confirmation/:orderNumber" element={<StorefrontLayout><OrderConfirmationPage /></StorefrontLayout>} />
                <Route path="/booking" element={<StorefrontLayout><BookingPage /></StorefrontLayout>} />
                <Route path="/about" element={<StorefrontLayout><AboutPage /></StorefrontLayout>} />
                {/* Auth */}
                <Route path="/login" element={<StorefrontLayout><LoginPage /></StorefrontLayout>} />
                <Route path="/register" element={<StorefrontLayout><RegisterPage /></StorefrontLayout>} />
                {/* Account */}
                <Route path="/account" element={<StorefrontLayout><AccountPage /></StorefrontLayout>} />
                <Route path="/account/orders" element={<StorefrontLayout><AccountOrdersPage /></StorefrontLayout>} />
                <Route path="/account/bookings" element={<StorefrontLayout><AccountBookingsPage /></StorefrontLayout>} />
                <Route path="/account/vehicles" element={<StorefrontLayout><AccountVehiclesPage /></StorefrontLayout>} />
                <Route path="/account/addresses" element={<StorefrontLayout><AccountAddressesPage /></StorefrontLayout>} />
                {/* Admin */}
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<AdminDashboard />} />
                  <Route path="products" element={<AdminProductsPage />} />
                  <Route path="orders" element={<AdminOrdersPage />} />
                  <Route path="bookings" element={<AdminBookingsPage />} />
                  <Route path="inventory" element={<AdminInventoryPage />} />
                  <Route path="categories" element={<AdminCategoriesPage />} />
                  <Route path="vehicles" element={<AdminVehiclesPage />} />
                  <Route path="customers" element={<AdminCustomersPage />} />
                  <Route path="reviews" element={<AdminReviewsPage />} />
                  <Route path="settings" element={<AdminSettingsPage />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </VehicleProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
