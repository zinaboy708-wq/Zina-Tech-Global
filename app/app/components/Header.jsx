// components/Header.jsx
export default function Header() {
  return (
    <header className="bg-indigo-600 text-white p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Zina Tech Global</div>
        <nav className="space-x-4">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}
