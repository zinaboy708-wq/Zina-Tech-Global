// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Zina Tech Global. All rights reserved.</p>
      </div>
    </footer>
  );
}
