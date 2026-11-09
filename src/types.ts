export type Role = 'student' | 'staff' | 'admin'
export type Category = 'All' | 'Breakfast' | 'Meals' | 'Rice' | 'Snacks' | 'Drinks'
export type OrderStatus = 'placed' | 'accepted' | 'preparing' | 'ready' | 'collected' | 'cancelled'
export interface MenuItem { id: string; name: string; description: string; price: number; category: Exclude<Category, 'All'>; image: string; available: boolean; popular?: boolean }
export interface CartItem { item: MenuItem; quantity: number }
export interface PickupSlot { time: string; used: number; capacity: number }
export interface Order { id: string; items: CartItem[]; total: number; slot: string; status: OrderStatus; counter: string; createdAt: string }
