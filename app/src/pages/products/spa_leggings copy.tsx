import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import PageTitle from "../../components/common/PageTitle";
import FormInput from "@/src/components/common/Form";
import PageTopLogo from "@/src/components/common/PageTopLogo";
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
      <div className="h-screen w-screen bg-background absolute top-0"></div>
      <main className="font-mincho overflow-x-hidden bg-background min-h-screen relative z-20 mt-12 text-gray">
        {/*  Section: ファーストビュー  ===========================================================  */}
        <Image
          width={1300}
          height={1100}
          className="duration-100 mx-auto"
          src="/assets/image/products/spa-leggings.png"
          alt="logo"
        />

        <div className="w-5/6 mr-auto text-left ml-4 leading-6 md:text-base my-8 md:mt-16 ">
          <>
            <p className="text-sm md:text-lg leading-8 md:leading-10">
              ヒップボーンベルト
            </p>

            <p className="text-xs md:text-lg leading-8 md:leading-10">
              18,800円（税込）
            </p>
          </>

          <div className="mt-12 text-sm leading-6">
            <h2 className="text-xl md:text-2xl tracking-wider pb-4">
              高い性能と、 <br />
              計算し尽くされたデザイン。
            </h2>

            <div className="font-basic tracking-wide">
              <p className="mt-4">
                計算し尽くされたカットと縫製技術に加えて、
                <br />
                一般医療機器として認められているSPAOREを
                <br />
                用いた温活アイテム「SPAレギンス」。
              </p>

              <p className="mt-4">
                高いUVカット加工で紫外線をカットするので、
                <br />
                インドアウェアとしてだけではなく、
                <br />
                外でのスポーツウェアやスイムウェアとしても
                <br />
                幅広くご利用いただけます。
              </p>
            </div>

            <button className="flex items-center px-4 py-[6px] my-8 border border-gray-800 text-gray-800 font-basic font-semibold">
              <Image
                width={20}
                height={20}
                className="duration-100 mx-auto"
                src="/assets/image/products/shoppingCart.svg"
                alt="→"
              />
              <span className="ml-2 font-normal">BUY PRODUCT</span>
            </button>
          </div>
        </div>

        {/*  Section: DETAILS  ===========================================================  */}
        <div className="relative z-10 bg-background py-10">
          <div className="text-6xl mr-2 text-right text-[#BA91A44D]">
            DETAILS
          </div>

          <Image
            className={"w-5/6 ml-auto md:w-2/3 my-4"}
            src="/assets/image/home/template.png"
            alt="logo"
            width={1500}
            height={1500}
          />

          <div className="w-5/6 ml-auto md:w-2/3 my-4">
            <h3 className="text-slate-900 font-basic mb-4 mt-8 text-xs">
              カラー
            </h3>
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-black rounded-full"></div>
              <p className="text-black mt-2 w-12 text-center text-xs">Black</p>
            </div>

            <hr className="border-white ml-auto my-4" />
          </div>

          <div className="w-5/6 ml-auto md:w-2/3 my-4">
            <h3 className="text-slate-900 font-basic mb-4 mt-8 text-xs">
              サイズ
            </h3>
            <div className="flex gap-4">
              <div className="border border-gray py-2 w-16">
                <div className="text-center text-2xl">S</div>
                <p className="text-center text-xs">（58-64）</p>
              </div>
              <div className="border border-gray py-2 w-16">
                <div className="text-center text-2xl">M</div>
                <p className="text-center text-xs">（65~70）</p>
              </div>
              <div className="border border-gray py-2 w-16">
                <div className="text-center text-2xl">L</div>
                <p className="text-center text-xs">（71-77）</p>
              </div>
              <div className="border border-gray py-2 w-16">
                <div className="text-center text-2xl">LL</div>
                <p className="text-center text-xs">（78-85）</p>
              </div>
            </div>

            <hr className="border-white ml-auto my-4" />
          </div>

          <div className="w-5/6 ml-auto md:w-2/3 my-4">
            <h3 className="text-slate-900 font-basic mb-4 mt-8 text-xs">
              素材
            </h3>
            <div className="flex items-end justify-start tracking-wide">
              <div className="text-sm mr-2">ポリエステル</div>
              <div className="text-2xl">82</div>
              <div className="text-sm mr-2">%</div>
            </div>
            <div className="flex items-end justify-start">
              <div className="text-sm mr-2">ポリウレタン</div>
              <div className="text-2xl">18</div>
              <div className="text-sm mr-2">%</div>
            </div>

            <hr className="border-white ml-auto my-4" />
          </div>
        </div>

        {/*  Section: PRODUCT  ====================================================================  */}
        <div className="relative z-10 py-10 mt-28 mb-12">
          <div className="text-6xl mr-2 text-left text-[#BA91A44D]">SPAORE</div>
          {/*  Part: HIPBONE BELT  ------------------------- */}
          <>
            <Image
              className={"w-11/12 mr-auto md:w-2/3 my-4"}
              src="/assets/image/products/spaore.png"
              alt="logo"
              width={1500}
              height={1500}
            />

            <div className="w-5/6 mr-auto text-left text-sm ml-4 leading-7 tracking-wide md:text-base my-8 md:mt-16 ">
              <h1 className="text-xl md:text-3xl tracking-widest">
                SPAOREとは
              </h1>

              <p className="mt-4 font-basic">
                高機能素材SPAORE（スパオール）とは、
                <br />
                温泉の鉱石類にオーガニック炭などの素材を
                <br />
                独自配合した複合鉱石粉です。
              </p>

              <p className="mt-4 font-basic">
                一般医療機器として認可を受けており、
                <br />
                独自の鉱石選択や配合比率による遠赤外線効果が
                <br />
                期待できる素材となっております。
                <br />
              </p>
            </div>

            <div className="w-11/12 mx-auto text-sm leading-7 tracking-wide md:text-base mt-16 mb-8 md:mt-16 text-center flex flex-col items-center">
              <h1 className="text-2xl md:text-4xl tracking-widest">
                SPAOREで期待できる効果
              </h1>
              <Image
                className={"mx-auto md:w-2/3 my-4"}
                src="/assets/image/products/no1.png"
                alt="logo"
                width={1500}
                height={1500}
              />
              <Image
                className={"mx-auto md:w-2/3 my-4"}
                src="/assets/image/products/no2.png"
                alt="logo"
                width={1500}
                height={1500}
              />
              <Image
                className={"mx-auto md:w-2/3 my-4"}
                src="/assets/image/products/no3.png"
                alt="logo"
                width={1500}
                height={1500}
              />
            </div>
          </>
        </div>

        {/*  Section: purchase  ===========================================================  */}
        <div className="relative h-32 mt-12">
          <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-8xl mx-auto text-center text-[#ba91a41a] z-10">
            purchase
          </div>
          <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-3xl mx-auto text-center z-20">
            ご購入方法
          </div>
        </div>

        <div className="w-screen container mx-auto text-gray text-center z-20 relative font-basic mb-24">
          <div className="mt-4 md:mt-8">
            <p className="mt-8 md:mt-16 text-sm md:text-base leading-8">
              製品は公式LINEからご購入いただけます。
              <br />
              以下のボタンから公式LINEに友だち登録して、
              <br />
              製品をご購入ください。
            </p>
          </div>

          <Link href="https://lin.ee/vuYzwqU" className="inline-block">
            <Image
              src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              alt="友だち追加"
              height={72}
              width={212}
              className="border-none my-12"
            />
          </Link>
        </div>
      </main>
    </>
  );
}
