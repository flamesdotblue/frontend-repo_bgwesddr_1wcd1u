export default function Newsletter() {
  return (
    <section id="newsletter" className="py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-green-50 to-white p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-green-950">Join the Herd</h3>
          <p className="mt-2 text-gray-600">Subscribe for dino drops, exclusive deals, and 10% off your first order.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full sm:w-96 rounded-full border border-gray-200 bg-white/70 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-700/20 focus:border-green-700/30"
            />
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition">
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
