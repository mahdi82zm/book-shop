import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import style from "./Header.module.css";
import Avater from "../assets/avatar.png";
import Person from "../assets/person.svg";
import Cart from "../assets/cart.svg";
import Like from "../assets/like.svg";

export default function Header() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("e:", e.target);
    e.preventDefault();

    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <header className={style.container}>
      <div className={style.top_menu}>
        <img className={style.avatar} src={Avater} alt="" />
        <form className="w-2xl" onSubmit={handleSearch}>
          <input
            name="search"
            type="search"
            placeholder="جستجوی کتاب ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-auto"
          />
        </form>
        <div className={style.buttonMenu}>
          <Link to="/auth" className="bg-emerald-600">
            <img src={Person} alt="پروفایل" role="button" />
          </Link>

          <img src={Cart} alt="سبد خرید" role="button" />
          <img src={Like} alt="علاقه‌مندی‌ها" role="button" />
        </div>
      </div>

      <nav className={style.nav_bar}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          خانه
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          کتاب‌ها
        </NavLink>{" "}
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          مقالات
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          درباره ما
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          تماس با ما
        </NavLink>
      </nav>
    </header>
  );
}
