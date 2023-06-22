import Image from "next/image";

import Seo from "@/src/components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        pageTitle={"AUWA ヒップボーンベルト"}
        pageDescription={"AUWAの『ヒップボーンベルト』の製品情報ページです。"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />

      <main className="font-mincho overflow-x-hidden min-h-screen relative z-20 mt-24 text-gray md:flex md:container md:mx-auto">
        {/*  Section: ファーストビュー  ===========================================================  */}
        <div className="hidden md:block">
          <Image
            width={1300}
            height={1100}
            className="duration-100 mx-auto w-4/5"
            src="/assets/image/company/office.png"
            alt="logo"
          />
        </div>
        <div className="md:w-2/3">
          <div className="text-center md:text-left md:ml-12">
            <h1 className="text-2xl md:text-4xl tracking-widest">
              COMPANY PROFILE
            </h1>
            <p className="text-sm md:text-lg leading-8 md:leading-10">
              会社概要
            </p>
          </div>

          <div className="w-2/3 md:w-1/3 mx-auto md:ml-12 mt-12">
            <Image
              width={1300}
              height={1100}
              className="duration-100 mx-auto"
              src="/assets/image/logo/juno.png"
              alt="logo"
            />
          </div>

          <div className="flex flex-col w-5/6 mx-auto mt-8 mb-12 text-xs md:text-sm">
            <ul className="divide-y divide-[#CCCCCC]">
              <li className="flex flex-row py-4">
                <div className="w-1/3">Company Name</div>
                <div className="w-2/3 text-sm">株式会社 Juno international</div>
              </li>
              <li className="flex flex-row py-4">
                <div className="w-1/3">Street address</div>
                <div className="w-2/3">
                  <p>〒220-0004</p>
                  <p>神奈川県横浜市西区北幸2丁目10-28</p>
                  <p>むつみビル３階</p>
                </div>
              </li>
              <li className="flex flex-row py-4">
                <div className="w-1/3">CEO</div>
                <div className="w-2/3 text-sm">奥村 美樹</div>
              </li>
              <li className="flex flex-row py-4">
                <div className="w-1/3">Capital</div>
                <div className="w-2/3 text-sm">300万円</div>
              </li>
              <li className="flex flex-row py-4">
                <div className="w-1/3">Business Contents</div>
                <div className="w-2/3 text-sm">
                  アパレル製品の製造、企画、販売
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
