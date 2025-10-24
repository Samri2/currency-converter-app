export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-900 text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-blue-900">
        <h1 className="text-2xl font-bold">💸 FX Converter</h1>
        <nav>
          <a href="#" className="text-white text-lg hover:underline">
            Exchange Info
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center space-y-6">
        <h2 className="text-5xl font-bold">
          Get Real-Time Exchange Rates Instantly 💹
        </h2>
        <p className="text-lg text-blue-100 max-w-xl">
          Stay updated with global currency trends and convert with accuracy.
        </p>
        <button className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition">
          Try Converter →
        </button>
      </main>

      {/* Exchange Info Card */}
      <section className="flex justify-center my-12">
        <div className="bg-white text-blue-900 rounded-2xl shadow-lg p-8 w-[600px] text-center">
          <h3 className="text-3xl font-bold">1 USD = 0.94 EUR</h3>
          <p className="text-gray-500 mt-2">
            Last updated: Oct 17, 2025 09:30 UTC
          </p>
          <p className="text-green-500 mt-4">▲ +0.3%</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-300 py-6 text-sm">
        © 2025 SamSec — React + Tailwind + ExchangeRate API
      </footer>
    </div>
  );
}
