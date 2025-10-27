import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Newsletter />
      </main>
      <footer className="py-10 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} DINOOZ. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-green-900">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-green-900">Terms</a>
            <a href="#" className="text-gray-600 hover:text-green-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
