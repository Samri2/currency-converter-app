import "../index.css";

export default function About() {
  return (
    <section className="about-page">
     
        <h2>About FX Converter</h2>
        <p>
          FX Converter helps users convert currencies and track exchange rates in real-time using the ExchangeRate API.
        </p>
        <ul>
          <li> Real-time exchange rates</li>
          <li> Responsive Design</li>
          <li> React + css UI</li>
        </ul>
        <p className="text-gray-500">
          Built with <b>React </b>, <b>css</b>, and <b>ExchangeRate API </b>
        </p>
        <p className="text-gray-400">Developed by <b>SamSec 💻</b></p>
    
    </section>
  );
}
