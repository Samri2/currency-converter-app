export default function ConversionResult({ from, to, amount, result }) {
  return (
    <div className="mt-4 text-center">
      <p className="text-lg font-semibold text-gray-800">
        {amount} {from} ={" "}
        <span className="text-blue-600 text-2xl font-bold">
          {result.toFixed(2)} {to}
        </span>
      </p>
    </div>
  );
}
