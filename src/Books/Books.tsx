import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
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

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        let query = supabase.from("books").select("*");
        if (category) {
          query = query.eq("category", category as string);
        }
        const { data, error } = await query;

        if (error) {
          setError(error.message);
        } else {
          setBooks(data || []);
           console.log("Fetched books:", data)
        }
        console.log(data);
      } catch {
        setError("خطا در دریافت اطلاعات .... ");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [category]);

  if (loading) {
    return <div className="text-center mt-10">در حال بارگذاری کتاب ها ...</div>;
  }
  if (error) {
    <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="m-4">
      <h1 className="text-3xl text-center mb-5">
        {category ? `کتاب های ${category}` : "لیست کتاب ها"}
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {books.map((book) => (
          <li
            key={book.id}
            className="border rounded-b-xl p-2 border-blue-100 flex flex-col justify-center text-center shadow shadow-gray-400 drop-shadow-gray-500 "
          >
            <img
              src={book.image}
              alt={book.title}
              className="mb-2 w-full h-48 object-cover"
            />
            <strong>{book.title}</strong> by {book.author}
            <p className="text-gray-700 text-sm mt-1">{book.description}</p>
            <button className="mt-2 bg-blue-500 text-white py-1 rounded hover:bg-emerald-600">
              خرید
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
