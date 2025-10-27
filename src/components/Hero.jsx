import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-800/80">Jurassic Fashion</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-green-950 leading-tight">
            Welcome to the Jurassic Fashion Revolution
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Premium dinosaur-themed apparel and lifestyle goods. Minimal design, bold attitude—crafted for modern explorers.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#shop" className="inline-flex items-center px-5 py-3 rounded-full bg-green-800 text-white font-semibold hover:bg-green-900 transition">
              Shop Collection
            </a>
            <a href="#newsletter" className="inline-flex items-center px-5 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
              Get 10% Off
            </a>
          </div>
          <ul className="mt-6 text-sm text-gray-500 grid grid-cols-2 gap-2 max-w-md">
            <li>Free shipping over $75</li>
            <li>Hassle-free returns</li>
            <li>Eco-friendly materials</li>
            <li>Secure checkout</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <Spline
            scene="https://prod.spline.design/7f4yB1j0mD8C0qQW/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
