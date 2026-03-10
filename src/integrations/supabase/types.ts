export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      vehicle_makes: {
        Row: {
          id: string;
          name: string;
          slug: string;
          logo_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          logo_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          logo_url?: string | null;
          created_at?: string;
        };
      };
      vehicle_models: {
        Row: {
          id: string;
          make_id: string;
          name: string;
          slug: string;
          body_type: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          make_id: string;
          name: string;
          slug: string;
          body_type: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          make_id?: string;
          name?: string;
          slug?: string;
          body_type?: string;
          created_at?: string;
        };
      };
      vehicles: {
        Row: {
          id: string;
          model_id: string;
          make_id: string;
          year: number;
          display_name: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          model_id: string;
          make_id: string;
          year: number;
          display_name: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          model_id?: string;
          make_id?: string;
          year?: number;
          display_name?: string;
          created_at?: string;
        };
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string;
          icon: string;
          is_featured: boolean;
          product_count: number;
          image_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string;
          icon?: string;
          is_featured?: boolean;
          product_count?: number;
          image_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string;
          icon?: string;
          is_featured?: boolean;
          product_count?: number;
          image_url?: string | null;
          created_at?: string;
        };
      };
      products: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string;
          category_id: string;
          is_featured: boolean;
          is_installable: boolean;
          avg_rating: number;
          review_count: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string;
          category_id: string;
          is_featured?: boolean;
          is_installable?: boolean;
          avg_rating?: number;
          review_count?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string;
          category_id?: string;
          is_featured?: boolean;
          is_installable?: boolean;
          avg_rating?: number;
          review_count?: number;
          created_at?: string;
        };
      };
      product_images: {
        Row: {
          id: string;
          product_id: string;
          url: string;
          alt: string;
          is_primary: boolean;
        };
        Insert: {
          id?: string;
          product_id: string;
          url: string;
          alt?: string;
          is_primary?: boolean;
        };
        Update: {
          id?: string;
          product_id?: string;
          url?: string;
          alt?: string;
          is_primary?: boolean;
        };
      };
      product_variants: {
        Row: {
          id: string;
          product_id: string;
          name: string;
          sku: string;
          price: number;
          compare_at_price: number | null;
          color: string | null;
          color_hex: string | null;
          size: string | null;
          stock: number;
          is_default: boolean;
        };
        Insert: {
          id?: string;
          product_id: string;
          name: string;
          sku: string;
          price: number;
          compare_at_price?: number | null;
          color?: string | null;
          color_hex?: string | null;
          size?: string | null;
          stock?: number;
          is_default?: boolean;
        };
        Update: {
          id?: string;
          product_id?: string;
          name?: string;
          sku?: string;
          price?: number;
          compare_at_price?: number | null;
          color?: string | null;
          color_hex?: string | null;
          size?: string | null;
          stock?: number;
          is_default?: boolean;
        };
      };
      product_compatibility: {
        Row: {
          id: string;
          product_id: string;
          make_id: string | null;
          model_id: string | null;
          vehicle_id: string | null;
          is_universal: boolean;
        };
        Insert: {
          id?: string;
          product_id: string;
          make_id?: string | null;
          model_id?: string | null;
          vehicle_id?: string | null;
          is_universal?: boolean;
        };
        Update: {
          id?: string;
          product_id?: string;
          make_id?: string | null;
          model_id?: string | null;
          vehicle_id?: string | null;
          is_universal?: boolean;
        };
      };
      branches: {
        Row: {
          id: string;
          name: string;
          city: string;
          address: string;
          phone: string;
          lat: number;
          lng: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          city: string;
          address: string;
          phone: string;
          lat: number;
          lng: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          city?: string;
          address?: string;
          phone?: string;
          lat?: number;
          lng?: number;
          created_at?: string;
        };
      };
      inventory: {
        Row: {
          id: string;
          variant_id: string;
          branch_id: string;
          stock: number;
        };
        Insert: {
          id?: string;
          variant_id: string;
          branch_id: string;
          stock?: number;
        };
        Update: {
          id?: string;
          variant_id?: string;
          branch_id?: string;
          stock?: number;
        };
      };
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          phone: string | null;
          avatar_url: string | null;
          role: 'customer' | 'admin' | 'staff' | 'installer';
          created_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string;
          phone?: string | null;
          avatar_url?: string | null;
          role?: 'customer' | 'admin' | 'staff' | 'installer';
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          phone?: string | null;
          avatar_url?: string | null;
          role?: 'customer' | 'admin' | 'staff' | 'installer';
          created_at?: string;
        };
      };
      user_addresses: {
        Row: {
          id: string;
          user_id: string;
          label: string;
          full_name: string;
          phone: string;
          city: string;
          address: string;
          is_default: boolean;
        };
        Insert: {
          id?: string;
          user_id: string;
          label: string;
          full_name: string;
          phone: string;
          city: string;
          address: string;
          is_default?: boolean;
        };
        Update: {
          id?: string;
          user_id?: string;
          label?: string;
          full_name?: string;
          phone?: string;
          city?: string;
          address?: string;
          is_default?: boolean;
        };
      };
      user_vehicles: {
        Row: {
          id: string;
          user_id: string;
          vehicle_id: string;
          make_name: string;
          model_name: string;
          year: number;
          display_name: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          vehicle_id: string;
          make_name: string;
          model_name: string;
          year: number;
          display_name: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          vehicle_id?: string;
          make_name?: string;
          model_name?: string;
          year?: number;
          display_name?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          order_number: string;
          user_id: string;
          status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
          subtotal: number;
          delivery_fee: number;
          install_total: number;
          grand_total: number;
          shipping_name: string;
          shipping_phone: string;
          shipping_city: string;
          shipping_address: string;
          branch_id: string | null;
          notes: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_number: string;
          user_id: string;
          status?: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
          subtotal: number;
          delivery_fee: number;
          install_total: number;
          grand_total: number;
          shipping_name: string;
          shipping_phone: string;
          shipping_city: string;
          shipping_address: string;
          branch_id?: string | null;
          notes?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          order_number?: string;
          user_id?: string;
          status?: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
          subtotal?: number;
          delivery_fee?: number;
          install_total?: number;
          grand_total?: number;
          shipping_name?: string;
          shipping_phone?: string;
          shipping_city?: string;
          shipping_address?: string;
          branch_id?: string | null;
          notes?: string | null;
          created_at?: string;
        };
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string;
          variant_id: string;
          product_name: string;
          variant_name: string;
          image_url: string | null;
          price: number;
          quantity: number;
          install_requested: boolean;
          install_type: 'branch' | 'home' | null;
          install_charge: number;
        };
        Insert: {
          id?: string;
          order_id: string;
          product_id: string;
          variant_id: string;
          product_name: string;
          variant_name: string;
          image_url?: string | null;
          price: number;
          quantity: number;
          install_requested?: boolean;
          install_type?: 'branch' | 'home' | null;
          install_charge?: number;
        };
        Update: {
          id?: string;
          order_id?: string;
          product_id?: string;
          variant_id?: string;
          product_name?: string;
          variant_name?: string;
          image_url?: string | null;
          price?: number;
          quantity?: number;
          install_requested?: boolean;
          install_type?: 'branch' | 'home' | null;
          install_charge?: number;
        };
      };
      bookings: {
        Row: {
          id: string;
          booking_number: string;
          user_id: string;
          branch_id: string;
          service_type: 'installation' | 'home_install' | 'consultation';
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          date: string;
          time_slot: string;
          customer_name: string;
          customer_phone: string;
          customer_address: string | null;
          notes: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          booking_number: string;
          user_id: string;
          branch_id: string;
          service_type: 'installation' | 'home_install' | 'consultation';
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          date: string;
          time_slot: string;
          customer_name: string;
          customer_phone: string;
          customer_address?: string | null;
          notes?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          booking_number?: string;
          user_id?: string;
          branch_id?: string;
          service_type?: 'installation' | 'home_install' | 'consultation';
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          date?: string;
          time_slot?: string;
          customer_name?: string;
          customer_phone?: string;
          customer_address?: string | null;
          notes?: string | null;
          created_at?: string;
        };
      };
      reviews: {
        Row: {
          id: string;
          product_id: string;
          user_id: string;
          user_name: string;
          rating: number;
          comment: string;
          is_approved: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          product_id: string;
          user_id: string;
          user_name: string;
          rating: number;
          comment?: string;
          is_approved?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          product_id?: string;
          user_id?: string;
          user_name?: string;
          rating?: number;
          comment?: string;
          is_approved?: boolean;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
