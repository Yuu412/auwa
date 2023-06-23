import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#4C4C4C] font-mincho text-pale_secondary_gray px-[5vw] md:pt-4">
      <div className="md:flex md:justify-between md:items-start">
        <div className="flex items-center w-1/3 mr-auto gap-2 pt-12 pb-6">
          <div className="w-2/5 md:w-1/6">
            <Image
              src="/assets/image/logo/logo_white.png"
              alt="logo"
              width={1500}
              height={1500}
            />
          </div>
          <div className="w-2/5 text-3xl text-background tracking-widest">
            AUWA
          </div>
        </div>

        <div className="md:flex md:justify-between gap-10 md:items-start">
          <div className="my-4">
            <h2 className="text-xl my-1 md:text-2xl">ABOUT</h2>
            <Link className="text-xs leading-6" href="/">
              <p>トップページ</p>
            </Link>
            <Link
              className="text-xs leading-6"
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
              }}
            >
              <p>AUWAのコンセプト</p>
            </Link>
            <Link
              className="text-xs leading-6"
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
              }}
            >
              <p>Special Thanks</p>
            </Link>
          </div>

          <div className="my-4">
            <h2 className="text-xl my-1 md:text-2xl">PRODUCT</h2>
            <Link className="text-xs leading-6" href="/products/hipbornbelt">
              <p>ヒップボーンベルト</p>
            </Link>
            <Link className="text-xs leading-6" href="/products/hipbornbelt">
              <p>SPA レギンス</p>
            </Link>
          </div>

          <div className="my-4">
            <h2 className="text-xl my-1 md:text-2xl">SERVICE</h2>
            <Link className="text-xs leading-6" href="/company/info">
              <p>企業概要</p>
            </Link>
            <Link className="text-xs leading-6" href="/contacts/form">
              <p>お問い合わせ</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-pale_gray py-1 mt-20 md:text-base md:py-2">
        Copyright © 2023 Juno International All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
