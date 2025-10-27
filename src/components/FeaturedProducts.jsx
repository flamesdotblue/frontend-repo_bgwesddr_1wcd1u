const products = [
  { id: 1, name: 'T‑Rex Hoodie', price: 64, tag: 'Apparel', img: 'https://images.unsplash.com/photo-1548883354-7622d3f210d5?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Raptor Tee', price: 32, tag: 'Apparel', img: 'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Triceratops Mug', price: 18, tag: 'Accessories', img: 'https://images.unsplash.com/photo-1542367597-8849ebbb47fc?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Fossil Tote', price: 28, tag: 'Accessories', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'Jurassic Blanket', price: 78, tag: 'Home', img: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, name: 'Raptor Cap', price: 24, tag: 'Apparel', img: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=1200&auto=format&fit=crop' },
  { id: 7, name: 'Dino Stickers', price: 9, tag: 'Collectibles', img: 'https://images.unsplash.com/photo-1520977279636-5a77cdeaf065?q=80&w=1200&auto=format&fit=crop' },
  { id: 8, name: 'Fossil Poster', price: 22, tag: 'Home', img: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=1200&auto=format&fit=crop' },
];

export default function FeaturedProducts() {
  return (
    <section id="shop" className="bg-[#F5F7F5] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-950">Featured Products</h2>
            <p className="text-gray-600 mt-1">Curated picks from the DINOOZ collection</p>
          </div>
          <a href="#" className="text-sm font-semibold text-green-800 hover:text-green-900">View all</a>
        </div>

        <div className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.id} className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="relative aspect-square overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute left-3 top-3 text-xs font-semibold bg-green-800 text-white px-2 py-1 rounded-full">{p.tag}</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-green-950">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold text-green-900">${p.price}</span>
                  <div className="flex items-center gap-2">
                    <button className="text-sm font-semibold text-gray-700 hover:text-green-900">Wishlist</button>
                    <button className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-800 text-white text-sm font-semibold hover:bg-green-900">Add</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
