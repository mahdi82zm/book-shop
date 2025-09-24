import Book from "/images/book.png";
import Education from "/images/Education.png";
import Ecommerc from "/images/Eccommerc.png";
import Enginiering from "/images/Enginiering.png";
import Trapiutic from "/images/meditation .png";
import { Link } from "react-router-dom";

const cart = [
  { title: "کتاب های مدیریتی", image: Book, category: "management" },
  { title: "کتاب های علمی", image: Education, category: "scientific" },
  { title: "کتاب های تجاری", image: Ecommerc, category: "business" },
  { title: "کتاب های مهندسی", image: Enginiering, category: "engineering" },
  { title: "کتاب های روان شناسی", image: Trapiutic, category: "psychology" },
];
export default function CartGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-5">
      {cart.map((item, index) => (
        <Link

          to={`/books?category=${item.category}`}
          key={index}
          className="relative h-48 rounded-lg overflow-hidden group cursor-pointer  "
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center ">
            <h3 className="text-white text-lg font-semibold text-bold px-2 ">
              {item.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
