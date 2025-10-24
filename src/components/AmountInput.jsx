export default function AmountInput({ value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Amount
      </label>
      <input
        type="number"
        className="w-full border rounded-xl px-3 py-2"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
