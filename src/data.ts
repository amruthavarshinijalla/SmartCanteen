import type { MenuItem, PickupSlot } from './types'

export const menu: MenuItem[] = [
  { id: 'chicken-rice', name: 'Chicken Rice', description: 'Basmati rice, grilled chicken and vegetables', price: 90, category: 'Rice', available: true, popular: true, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=85' },
  { id: 'veg-meals', name: 'Veg Meals', description: 'Rice, sambar, poriyal, rasam and curd', price: 70, category: 'Meals', available: true, popular: true, image: 'https://keralacurryhouse.com/cdn/shop/files/SPECIALMEAL_VEG.jpg?v=1756317925' },
  { id: 'paneer-rice', name: '', description: 'Wok-tossed rice with paneer and greens', price: 85, category: 'Rice', available: true, image: 'https://www.whiskaffair.com/wp-content/uploads/2025/02/Schezwan-Paneer-Fried-Rice-2-3.jpg' },
  { id: 'egg-noodles', name: 'Egg Noodles', description: 'Egg, noodles and fresh crunchy vegetables', price: 80, category: 'Rice', available: true, image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=700&q=85' },
  { id: 'masala-dosa', name: 'Masala Dosa', description: 'Crisp dosa with spiced potato filling', price: 55, category: 'Breakfast', available: true, popular: true, image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=85' },
  { id: 'idli', name: 'Idli & Vada', description: 'Steamed idlis, vada and sambar', price: 45, category: 'Breakfast', available: true, image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/idli_vada.webp' },
  { id: 'lemon-rice', name: 'Lemon Rice', description: 'Tempered rice with peanuts and lemon', price: 50, category: 'Rice', available: true, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKwTT5suQRtBpMk0UNpdZ28NAaMagICdO5PbI7MBlwVY1_cNL9XMzdOs&s=10' },
  { id: 'chicken-sandwich', name: 'Chicken Sandwich', description: 'Toasted sandwich with chicken and salad', price: 65, category: 'Snacks', available: true, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=85' },
  { id: 'veg-puff', name: 'Veg Puff', description: 'Flaky pastry with savoury vegetable filling', price: 20, category: 'Snacks', available: true, image: 'https://www.thesugarandspice.com/cdn/shop/files/CopyofLSD07524.png?v=1741764906' },
  { id: 'samosa', name: 'Samosa', description: 'Crisp potato samosa with mint chutney', price: 15, category: 'Snacks', available: false, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85' },
  { id: 'tea', name: 'Masala Tea', description: 'Freshly brewed cardamom tea', price: 15, category: 'Drinks', available: true, image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=85' },
  { id: 'coffee', name: 'Filter Coffee', description: 'Traditional South Indian filter coffee', price: 25, category: 'Drinks', available: true, image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=700&q=85' },
  { id: 'lime-soda', name: 'Lime Soda', description: 'Fresh lime, soda and a pinch of salt', price: 25, category: 'Drinks', available: true, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=85' },
]

export const initialSlots: PickupSlot[] = [
  { time: '12:20 PM', used: 20, capacity: 20 }, { time: '12:30 PM', used: 20, capacity: 20 },
  { time: '12:40 PM', used: 16, capacity: 20 }, { time: '12:50 PM', used: 8, capacity: 20 },
  { time: '1:00 PM', used: 2, capacity: 20 }, { time: '1:10 PM', used: 0, capacity: 20 },
]
