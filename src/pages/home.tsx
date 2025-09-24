import "./home.css";

import Hero from "../assets/Mask-Group.png";

import Girl from "/images/Image.png";
import CartGrid from "../components/CartGrid";
import PruductCart from "../components/PruductCart";
import Happy from "/images/Happy.png";
import StarRating from "../components/StarRating";
import Comming from "/images/comingSoon.png";
export default function Home() {
  return (
    <>
      <div className="container mx-auto font-sans">
        <div className="hero-section flex flex-col md:flex-row justify-between items-center gap-4 mt-4 bg-gradient-to-r from-blue-100 via-white to-blue-200 text-white ">
          <div className="call-action w-full p-8  md:w-1/2" dir="rtl">
            <h1 className="text-2xl font-bold text-blue-500 mb-4">
              کتابخانه هوشمند{" "}
            </h1>

            <p className="text-cyan-800/90">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div className="relative h-96 overflow-hidden w-full justify-center md:w-1/2">
            <img
              src={Hero}
              alt="Hero image"
              className=" h-auto max-w-full w-full object-cover "
            />
            {/* <div className="absolute inset-0 bg-gradiant-to-r from-white/80 via-transparent to-white/80"></div> */}
          </div>
        </div>
        <CartGrid />
        <div className="hero-section flex flex-col md:flex-row justify-between items-center gap-4 mt-4 bg-gradient-to-r from-blue-100 via-white to-blue-200  ">
          <div className="call-action w-full p-3  md:w-1/2" dir="rtl">
            <h1 className="text-2xl font-bold mb-4  text-blue-950 p-8">
              دسترسی، مطالعه، تمرین و تعامل با محتوای دیجیتال (کتاب الکترونیکی)
            </h1>

            <p className="text-indigo-800/90 p-8">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <div className="search mt-2 flex  items-center justify-end">
              <button className="btn bg-orange-600 rounded p-1 px-3">
                Login
              </button>
              <label htmlFor="">
                <input
                  className="bg-amber-100 text-gray-600 p-1 rounded border-0 "
                  placeholder="Enter your email address"
                  type="search"
                />
              </label>
            </div>
          </div>
          <div className="w-full justify-center md:w-1/2">
            <img src={Girl} alt="Hero image" className=" h-auto max-w-full " />
          </div>
          {/* <div className="absolute inset-0 bg-gradiant-to-r from-white/80 via-transparent to-white/80"></div> */}
        </div>
        <PruductCart />
        <div className="border-t-4    border-gray-300 my-4"></div>
        <div className="happy-section flex justify-between ">
          <img src={Happy} className="w-1/2 mb-0" alt="" />
          <div className="description flex flex-col justify-between">
            <div className="info p-5">
              <h4 className="text-gray-500 " dir="rtl">
                کتاب برگزیده هفته
              </h4>
              <h3 className="font-bold text-3xl m-2">Birds gonna be happy</h3>
              <StarRating rating={3} />
              <p dir="rtl">
                با بررسی سریع دسته‌بندی‌های کتاب‌های محبوب، خواندن کتاب را شروع
                کنید. روزانه بیش از ۱۰۰۰ کتاب توسط نویسندگان مختلف منتشر می‌شود.
                کتاب‌های مورد علاقه خود را همین امروز از TreeBooks بخرید.
              </p>
            </div>
            <div className="self-start">

              <button className="btn border mb-9 border-blue-400 rounded-xl p-2 text-blue-600 hover:bg-blue-600 hover:text-amber-50">
                بیشتر بدانید
              </button>
            </div>
          </div>
        </div>

        <div className="coming  m-0 p-0">
          <img src={Comming} alt="" />
        </div>
      </div>
    </>
  );
}
