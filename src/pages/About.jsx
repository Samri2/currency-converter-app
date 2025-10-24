// src/pages/About.jsx
export default function About() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        About This App 🌍
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        The Currency Converter App allows users to get up-to-date conversion
        rates between world currencies. It fetches data from{" "}
        <a
          href="https://www.exchangerate-api.com"
          target="_blank"
          className="text-blue-500 underline"
        >
          ExchangeRate API
        </a>{" "}
        and provides quick, accurate conversions.
      </p>

      <div className="mt-8 text-left bg-white shadow-md p-6 rounded-xl max-w-xl mx-auto">
        <h2 className="font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Real-time exchange rate data</li>
          <li>Responsive design with Tailwind CSS</li>
          <li>Accurate currency conversion</li>
          <li>Simple and clean interface</li>
        </ul>
      </div>
    </div>
  );
}
