  import { useState, useEffect } from "react";
  import axios from "axios";
  import { useSearchParams } from "react-router-dom";

  export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    image: string;
    price: number;
    category: string;
  }

  export default function Books() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");
    const base_url = "http://localhost:3000";
    useEffect(() => {
      const fetchBooks = async () => {
        try {
        const url = category ? `${base_url}/books?category=${category}`:`${base_url}/books`;

          const response = await axios.get(url);
          setBooks(response.data);
        } catch (error) {
          setError("خطا در دریافت اطلاعات ");
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      fetchBooks();
    }, [category]);
    if (loading) return <div>در حال بارگذاری ...</div>;

    if (error) return <div>{error}</div>;

    return (
      <div className="m-4">
        <h1 dir="rtl" className="flex text-3xl justify-center mb-5">
        {category ? `کتاب های ${category}` : "لیست کتاب ها "}
        </h1>
        <ul className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {books.map((book) => (
            <li
              key={book.id}
              className="border rounded-b-xl p-2 border-blue-100 flex flex-col justify-center text-center shadow shadow-gray-400 drop-shadow-gray-500"
            >
              <img src={book.image} alt="" />
              <strong>{book.title}</strong> by {book.author}
              <br />
              {book.description}
              <strong className="">{book.price} تومان</strong>
              <button className="mt-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-emerald-600">
                بیشتر بخوانید
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
