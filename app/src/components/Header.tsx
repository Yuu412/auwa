import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = scrollPosition > 200 ? 0 : 1 - scrollPosition / 200;

  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="h-[50px] lg:h-[75px] font-mincho">
      <div className="w-screen fixed z-[999] flex items-center my-2">
        <div className="my-2 mx-4" style={{ opacity: opacity }}>
          <Link href="/">
            <Image
              width={256}
              height={256}
              className="fixed w-[50px] duration-100 mx-auto md:w-[75px]"
              src="/assets/image/logo/logo.png"
              alt="logo"
            />
          </Link>
        </div>

        {/* ハンバーガーメニューボタン */}
        <button
          onClick={handleMenuOpen}
          className="absolute right-5 top-4 w-12 h-10 z-[300] lg:top-6 lg:right-8"
          aria-label="ハンバーガーメニューの開閉"
        >
          <span
            className={
              openMenu
                ? "ease-in top-[11px] -rotate-45 duration-500 absolute w-6 h-[0.2rem] right-0 bg-purple rounded-full lg:w-8"
                : "ease-linear top-[1px] duration-500 absolute w-6 h-[0.2rem] right-0 bg-purple rounded-full lg:w-8"
            }
          />
          <span
            className={
              openMenu
                ? "ease-in absolute w-6 h-[0.2rem] right-0 opacity-0 lg:w-8"
                : "ease-linear absolute w-6 h-[0.2rem] right-0 bg-purple duration-500 rounded-full top-[9px] lg:w-8 lg:top-[12px]"
            }
          />
          <span
            className={
              openMenu
                ? "rotate-45 ease-in absolute w-6 h-[0.2rem] right-0 bg-purple duration-500 rounded-full top-[11px] lg:w-8"
                : "ease-linear absolute w-6 h-[0.2rem] right-0  bg-purple duration-500 rounded-full top-[18px] lg:w-8 lg:top-[24px]"
            }
          />
        </button>

        {/* ハンバーガーメニュー押下時のメニュー */}
        <nav
          className={
            openMenu
              ? "fixed top-0 w-full h-screen bg-white duration-50 z-[200] overflow-y-auto ease-in-out"
              : "fixed right-[-100%] top-0 w-full h-screen bg-purple opacity-0 duration-50 z-[200] overflow-y-auto ease-in-out"
          }
        >
          <div className="mx-5 lg:mx-24 md:mt-28">
            {/* 企業ロゴ */}
            <div>
              <Link href="/" onClick={handleMenuOpen}>
                <Image
                  width={256}
                  height={256}
                  className={
                    openMenu
                      ? "fixed w-[50px] duration-100 mx-auto md:w-[120px] top-4"
                      : "fixed w-1/5 opacity-0 md:w-1/6"
                  }
                  src="/assets/image/logo/logo.png"
                  alt="logo"
                />
              </Link>
            </div>
            <ul className="relative top-48 md:top-24 gap-8 flex flex-col text-xl px-3 text-gray">
              <li>
                <div className="text-purple_dark text-4xl my-4">About</div>
                <Link className="align-sub" href="/" onClick={handleMenuOpen}>
                  <div className="text-base my-2">トップページ</div>
                </Link>

                <Link
                  href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    const targetElement = document.getElementById("concept");
                    if (targetElement) {
                      const topOffset =
                        targetElement.getBoundingClientRect().top +
                        window.pageYOffset;
                      window.scrollTo({
                        top: topOffset,
                        behavior: "smooth",
                      });
                    }
                    handleMenuOpen(); // メニューを閉じる処理などが必要であれば追加してください
                  }}
                >
                  <div className="text-base my-2">AUWAのコンセプト</div>
                </Link>

                <Link
                  href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    const targetElement = document.getElementById("thanks");
                    if (targetElement) {
                      const topOffset =
                        targetElement.getBoundingClientRect().top +
                        window.pageYOffset;
                      window.scrollTo({
                        top: topOffset,
                        behavior: "smooth",
                      });
                    }
                    handleMenuOpen(); // メニューを閉じる処理などが必要であれば追加してください
                  }}
                >
                  <div className="text-base my-2">Special Thanks</div>
                </Link>
              </li>
              <li>
                <div className="text-purple_dark text-4xl my-4">Product</div>
                <Link
                  className="align-sub"
                  href="/products/hipbornbelt"
                  onClick={handleMenuOpen}
                >
                  <div className="text-base my-2">ヒップボーンベルト</div>
                </Link>
                <Link
                  className="align-sub"
                  href="/products/spa_leggings"
                  onClick={handleMenuOpen}
                >
                  <div className="text-base my-2">SPA レギンス</div>
                </Link>
              </li>
              <li>
                <div className="text-purple_dark text-4xl my-4">Service</div>
                <Link
                  className="align-sub"
                  href="/company/info"
                  onClick={handleMenuOpen}
                >
                  <div className="text-base my-2">企業概要</div>
                </Link>
                <Link
                  className="align-sub"
                  href="/contacts/form"
                  onClick={handleMenuOpen}
                >
                  <div className="text-base my-2">お問い合わせ</div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
