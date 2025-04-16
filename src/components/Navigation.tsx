import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link
            href="/"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Главная
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-gray-300 transition-colors"
          >
            О нас
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Контакты
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
