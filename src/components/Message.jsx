export default function Message() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-cinnamon-blue text-slate-800">
      <h2 className="text-5xl mb-4">☁️</h2>
      <p className="font-serif text-2xl px-10 text-center">
        "You're the hero Gotham (and I) deserve."
      </p>
      <button className="mt-8 bg-valentine-red text-white px-6 py-2 rounded-full shadow-lg">
        Open My Heart
      </button>
    </div>
  );
}
