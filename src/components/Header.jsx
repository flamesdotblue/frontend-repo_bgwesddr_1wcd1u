import { ShoppingCart, Heart, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-green-800 flex items-center justify-center text-white font-bold">D</div>
          <span className="text-xl font-extrabold tracking-tight text-green-900">DINOOZ</span>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search dinosaurs, hoodies, mugs..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-green-700/20 focus:border-green-700/30"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="md:hidden p-2 rounded-full hover:bg-gray-100">
            <Search className="h-5 w-5 text-gray-700" />
          </button>
          <button aria-label="Wishlist" className="p-2 rounded-full hover:bg-gray-100">
            <Heart className="h-5 w-5 text-gray-700" />
          </button>
          <button aria-label="Cart" className="relative p-2 rounded-full hover:bg-gray-100">
            <ShoppingCart className="h-5 w-5 text-gray-700" />
            <span className="absolute -top-1 -right-1 text-[10px] bg-orange-500 text-white rounded-full px-1.5 py-0.5">2</span>
          </button>
          <button aria-label="Account" className="p-2 rounded-full hover:bg-gray-100">
            <User className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
