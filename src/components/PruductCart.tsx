
import product1 from "/images/prioductcart1.png";
import product2 from "/images/productcart2.png";
import product3 from "/images/productcarrt3.png";
import product4 from "/images/productcart4.png";
import { SiderDota } from "./SiderDota";
import StarRating from "./StarRating";
const product = [
  {
    image: product1,
    title: "The Mind Connection",
    Star: 4,
    Empstar: 1,
  },
  {
    image: product2,
    title: "The Mind Connection",
    Star: 2,
    Empstar: 1,
  },
  {
    image: product3,
    title: "The Mind Connection",
    Star: 2,
    Empstar: 1,
  },
  {
    image: product4,
    title: "The Mind Connection",
    Star: 1,
    Empstar: 1,
  },
];

export default function PruductCart() {
  return (
    <>
      <div className="container">
        <div className="title flex items-center justify-center flex-col gap-3">
          {" "}
          <h3 className=" font-bold mt-2 text-2xl">جدید ترین کتاب ها </h3>
          <p className="items-center  " dir="rtl">
            روزانه بیش از ۱۰۰۰ کتاب توسط نویسندگان مختلف منتشر می‌شود.
          </p>
        </div>

        <div className="grid grid-cols-4 mt-4  gap-3">
          {product.map((item, index) => (
            <div
              key={index}
              className="m-4 flex flex-col items-center justify-center mt-2 p-5 shadow-md border-2 border-gray-300  rounded-md"
            >
              <img src={item.image} alt="" />
              <p>{item.title}</p>
             
              <StarRating rating={item.Star} />
            </div>
          ))}
        </div>
        <SiderDota />
      </div>
    </>
  );
}
