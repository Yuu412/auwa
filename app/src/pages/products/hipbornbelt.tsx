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
      <main className="font-mincho overflow-x-hidden bg-background min-h-screen relative z-20 mt-24 text-gray">
        {/*  Section: ファーストビュー  ===========================================================  */}

        <div className="md:flex md:container md:m-auto">
          <div>
            <Image
              width={1300}
              height={1100}
              className="duration-100 mx-auto"
              src="/assets/image/products/hipbornbelt.png"
              alt="logo"
            />
          </div>

          <div className="w-5/6 mr-auto text-left ml-4 leading-6 md:text-base my-8 md:mt-16 ">
            <>
              <h1 className="text-2xl md:text-5xl tracking-widest">
                HIPBONE BELT
              </h1>
              <p className="text-sm md:text-sm leading-8">ヒップボーンベルト</p>

              <p className="text-xs md:text-sm leading-8">18,800円（税込）</p>
            </>

            <div className="mt-12 text-sm leading-6">
              <h2 className="text-xl md:text-2xl tracking-wider pb-4">
                あなたの日常を、 <br />
                より快適に温かく輝くものに。
              </h2>

              <div className="font-basic tracking-wide">
                <p className="mt-4">
                  一般医療機器として認められているSPAOREを
                  <br />
                  用いた温活アイテム「ヒップボーンベルト」
                </p>

                <p className="mt-4">
                  保湿性・速乾性・耐久性に優れた日本製の
                  <br />
                  ウェットスーツ素材を使用しています。
                </p>

                <p className="mt-4">
                  ご家庭でのリラックスタイムだけでなく、
                  <br />
                  家事やショッピング時などの日常生活でご着用
                  <br />
                  いただけます。
                </p>
              </div>

              <button
                onClick={(event) => {
                  event.preventDefault();
                  const targetElement = document.getElementById("purchase");
                  if (targetElement) {
                    const topOffset = targetElement.getBoundingClientRect().top;
                    window.scrollTo({
                      top: topOffset,
                      behavior: "smooth",
                    });
                  }
                }}
                className="flex items-center px-4 py-[6px] my-8 border border-gray-800 text-gray-800 font-basic font-semibold"
              >
                <svg
                  width="20"
                  height="20"
                  className={"duration-100 mx-auto"}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3547 4.59922C17.296 4.52901 17.2226 4.47254 17.1398 4.4338C17.0569 4.39506 16.9665 4.37498 16.875 4.375H4.27187L3.88984 2.27656C3.83752 1.98854 3.68577 1.72802 3.46105 1.54042C3.23632 1.35282 2.95289 1.25004 2.66016 1.25H1.25C1.08424 1.25 0.925268 1.31585 0.808058 1.43306C0.690848 1.55027 0.625 1.70924 0.625 1.875C0.625 2.04076 0.690848 2.19973 0.808058 2.31694C0.925268 2.43415 1.08424 2.5 1.25 2.5H2.65625L4.65312 13.4602C4.71195 13.7852 4.85559 14.0889 5.06953 14.3406C4.77426 14.6164 4.56113 14.9686 4.45379 15.3581C4.34646 15.7477 4.3491 16.1593 4.46143 16.5474C4.57376 16.9355 4.79138 17.2849 5.09018 17.5569C5.38897 17.8289 5.75725 18.0128 6.15419 18.0883C6.55112 18.1637 6.9612 18.1278 7.33894 17.9844C7.71669 17.841 8.04735 17.5958 8.29425 17.276C8.54115 16.9562 8.69465 16.5742 8.73773 16.1725C8.7808 15.7707 8.71177 15.3649 8.53828 15H12.0867C11.9469 15.2927 11.8745 15.6131 11.875 15.9375C11.875 16.3701 12.0033 16.7931 12.2437 17.1528C12.484 17.5125 12.8257 17.7929 13.2254 17.9585C13.6251 18.1241 14.0649 18.1674 14.4893 18.083C14.9136 17.9986 15.3034 17.7902 15.6093 17.4843C15.9152 17.1784 16.1236 16.7886 16.208 16.3643C16.2924 15.9399 16.2491 15.5001 16.0835 15.1004C15.9179 14.7007 15.6375 14.359 15.2778 14.1187C14.9181 13.8783 14.4951 13.75 14.0625 13.75H6.49766C6.35129 13.75 6.20957 13.6986 6.09721 13.6048C5.98485 13.511 5.90898 13.3807 5.88281 13.2367L5.63516 11.875H14.6977C15.1368 11.8749 15.5619 11.7208 15.899 11.4394C16.2361 11.158 16.4637 10.7672 16.5422 10.3352L17.4922 5.11172C17.5083 5.02144 17.5043 4.92872 17.4805 4.84015C17.4568 4.75158 17.4138 4.66933 17.3547 4.59922ZM7.5 15.9375C7.5 16.1229 7.44502 16.3042 7.342 16.4583C7.23899 16.6125 7.09257 16.7327 6.92127 16.8036C6.74996 16.8746 6.56146 16.8932 6.3796 16.857C6.19774 16.8208 6.0307 16.7315 5.89959 16.6004C5.76848 16.4693 5.67919 16.3023 5.64301 16.1204C5.60684 15.9385 5.62541 15.75 5.69636 15.5787C5.76732 15.4074 5.88748 15.261 6.04165 15.158C6.19582 15.055 6.37708 15 6.5625 15C6.81114 15 7.0496 15.0988 7.22541 15.2746C7.40123 15.4504 7.5 15.6889 7.5 15.9375ZM15 15.9375C15 16.1229 14.945 16.3042 14.842 16.4583C14.739 16.6125 14.5926 16.7327 14.4213 16.8036C14.25 16.8746 14.0615 16.8932 13.8796 16.857C13.6977 16.8208 13.5307 16.7315 13.3996 16.6004C13.2685 16.4693 13.1792 16.3023 13.143 16.1204C13.1068 15.9385 13.1254 15.75 13.1964 15.5787C13.2673 15.4074 13.3875 15.261 13.5417 15.158C13.6958 15.055 13.8771 15 14.0625 15C14.3111 15 14.5496 15.0988 14.7254 15.2746C14.9012 15.4504 15 15.6889 15 15.9375ZM15.3125 10.1117C15.2863 10.2561 15.21 10.3867 15.0972 10.4805C14.9844 10.5744 14.8421 10.6255 14.6953 10.625H5.40781L4.49922 5.625H16.1258L15.3125 10.1117Z"
                    fill="#4C4C4C"
                  />
                </svg>
                <span className="ml-2 font-normal">BUY PRODUCT</span>
              </button>
            </div>
          </div>
        </div>

        {/*  Section: DETAILS  ===========================================================  */}
        <div className="relative z-10 bg-background py-10 m-auto mt-44">
          <div className="text-6xl mr-2 text-right md:text-left text-[#BA91A44D] md:hidden">
            DETAILS
          </div>
          <div className="md:flex">
            <div className="hidden md:block text-8xl mr-2 md:mr-0 text-left text-[#BA91A44D] md:rotate-[90deg] w-1/6 h-1/2">
              DETAILS
            </div>

            <div className="md:flex md:flex-row-reverse md:mx-auto">
              <div>
                <Image
                  className={"w-5/6 ml-auto md:mr-auto my-4 md:w-max md:ml-0"}
                  src="/assets/image/home/template.png"
                  alt="logo"
                  width={1500}
                  height={1500}
                />
              </div>

              <div className="md:w-2/3">
                <div className="w-5/6 ml-auto md:w-2/3 md:mr-auto md:ml-0 my-4">
                  <h3 className="text-slate-900 font-basic mb-4 mt-8 text-xs">
                    カラー
                  </h3>
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 bg-black rounded-full"></div>
                    <p className="text-black mt-2 w-12 text-center text-xs">
                      Black
                    </p>
                  </div>

                  <hr className="border-white ml-auto my-4" />
                </div>

                <div className="w-5/6 ml-auto md:mr-auto md:ml-0 md:w-2/3 my-4">
                  <h3 className="text-slate-900 font-basic mb-4 mt-8 text-xs">
                    サイズ
                  </h3>
                  <div className="border border-gray py-3 w-28">
                    <div className="text-center text-2xl">FREE</div>
                    <p className="text-center text-xs">（フリーサイズ）</p>
                  </div>

                  <hr className="border-white ml-auto my-4" />
                </div>

                <div className="w-5/6 ml-auto md:mr-auto md:ml-0 md:w-2/3 my-4">
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
            </div>
          </div>
        </div>

        {/*  Section: METHOD  ===========================================================  */}
        <div className="relative h-32 mt-24">
          <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-8xl mx-auto text-center text-[#ba91a41a] z-10 md:text-9xl">
            method
          </div>
          <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-3xl mx-auto text-center z-20 md:text-4xl">
            着用方法
          </div>
        </div>

        <div className="w-screen container mx-auto text-gray text-center z-20 relative font-basic">
          <div className="mt-4 md:mt-8">
            <p className="mt-8 md:mt-16 text-sm md:text-lg leading-8 md:leading-10">
              ヒップボーンベルトのご利用方法は簡単で、
              <br />
              さっと10秒ほどでご利用いただけますが、
              <br />
              本来の効果を実感いただくためには、
              <br />
              正しい「巻き方」が重要になります。
            </p>

            <p className="mt-8 md:mt-16 text-sm md:text-lg leading-8 md:leading-10">
              AUWAでは、美容整骨師 秋吉彩也佳先生の
              <br />
              「ととのえメソッド」に基づいた最も効果を
              <br />
              実感いただける巻き方を動画でサポートします。
              <br />
            </p>

            <p className="mt-8 md:mt-16 text-sm md:text-lg leading-8 md:leading-10">
              商品をご購入いただいたお客様には、
              <br />
              公式LINEから着用方法のガイド動画を
              <br />
              配信しております。
            </p>

            <p className="mt-8 md:mt-16 text-sm md:text-lg leading-8 md:leading-10">
              着用方法に不安を感じている方も
              <br />
              安心してご購入ください。
            </p>
          </div>
        </div>

        {/*  Section: PRODUCT  ====================================================================  */}
        <div className="relative z-10 py-10 mt-28 mb-12 md:mx-auto md:container md:w-5/6">
          <div className="text-6xl mr-2 text-left text-[#BA91A44D] md:text-8xl md:text-center">
            SPAORE
          </div>
          {/*  Part: HIPBONE BELT  ------------------------- */}

          <div className="md:flex md:mx-auto">
            <Image
              className={"w-11/12 mr-auto md:w-2/5 my-4 md:ml-auto"}
              src="/assets/image/products/spaore.png"
              alt="logo"
              width={1500}
              height={1500}
            />

            <div className="w-5/6 mr-auto text-left text-sm ml-4 leading-7 tracking-wide md:text-base my-8 md:mt-16 md:w-1/3">
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
          </div>

          <div className="w-11/12 mx-auto text-sm leading-7 tracking-wide md:text-base mt-16 mb-8 md:mt-16 text-center flex flex-col items-center">
            <h1 className="text-2xl md:text-4xl tracking-widest">
              SPAOREで期待できる効果
            </h1>
            <div className="md:flex">
              <div>
                <Image
                  className={"mx-auto my-4 md:w-11/12"}
                  src="/assets/image/products/no1.png"
                  alt="logo"
                  width={1500}
                  height={1500}
                />
              </div>
              <div>
                <Image
                  className={"mx-auto md:w-11/12 my-4 md:mt-24"}
                  src="/assets/image/products/no2.png"
                  alt="logo"
                  width={1500}
                  height={1500}
                />
              </div>
              <div>
                <Image
                  className={"mx-auto md:w-11/12 my-4 md:mt-48"}
                  src="/assets/image/products/no3.png"
                  alt="logo"
                  width={1500}
                  height={1500}
                />
              </div>
            </div>
          </div>
        </div>

        {/*  Section: purchase  ===========================================================  */}
        <div className="relative h-32 mt-12">
          <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-8xl mx-auto text-center text-[#ba91a41a] z-10 md:text-9xl">
            purchase
          </div>
          <div
            id="purchase"
            className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-3xl mx-auto text-center z-20 md:text-5xl"
          >
            ご購入方法
          </div>
        </div>

        <div className="md:hidden w-screen container mx-auto text-gray text-center z-20 relative font-basic mb-24">
          <div className="mt-4 md:mt-8">
            <p className="mt-8 md:mt-16 text-sm md:text-lg leading-8 md:leading-10">
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

        <div className="hidden md:block w-screen container mx-auto text-gray text-center z-20 relative font-basic mb-24">
          <div className="mt-4 md:mt-8">
            <p className="mt-8 md:mt-16 text-sm md:text-lg leading-8 md:leading-10">
              製品は公式LINEからご購入いただけます。
              <br />
              以下のQRコードをお使いのスマホから読み取って
              <br />
              公式LINEに友だち登録してから、
              <br />
              製品をご購入ください。
            </p>
          </div>

          <Link href="https://lin.ee/vuYzwqU" className="inline-block">
            <Image
              src="/assets/image/products/qr_line.png"
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
