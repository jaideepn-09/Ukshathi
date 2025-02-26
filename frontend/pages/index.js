import { useRouter } from "next/router";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center text-gray-900 p-6"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/automated-inventory-management-system-wallpaper_987764-40035.jpg')",
      }}
    >
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-white bg-opacity-40 p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">
            Inventory Management System
          </h1>
          <p className="text-lg text-gray-700 mb-6 animate-fade-in">
            Welcome to the IMS Dashboard. Manage your inventory efficiently.
          </p>

          {/* Button */}
          <button
            onClick={() => router.push("/login")}
            className="px-6 py-3 bg-blue-600 text-white text-lg rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700"
          >
            Go to Login
          </button>
        </div>
      </div>

      {/* Footer - Sticks to Bottom & Spans Full Width */}
      <footer className="w-full bg-gray-900 text-white py-4 text-center fixed bottom-0 left-0">
        <div className="flex justify-center space-x-6 mb-2">
          <a href="https://www.facebook.com/ukshati/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://www.instagram.com/ukshati/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
          <a href="https://www.linkedin.com/company/ukshati-technologies/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-700" />
          </a>
          <a href="https://twitter.com/ukshati/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
        </div>
        <p className="text-sm">Contact: +91 7259439998 | Email: ukshati365@gmail.com</p>
      </footer>
    </div>
  );
}
