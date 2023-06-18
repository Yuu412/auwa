import Head from "next/head";
import Seo from "../components/Seo";
import Link from "next/link";
import Image from "next/image";

import SectionTitle from "../components/common/SectionTitle";
import { useEffect, useState } from "react";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [fadeInOverlay, setFadeInOverlay] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const visitedBefore = localStorage.getItem("visitedBefore");
    if (!visitedBefore) {
      setShowVideo(true);
      localStorage.setItem("visitedBefore", "true");
      const timerShow = setTimeout(() => {
        setFadeOut(true);
      }, 2500);
      const timerOverlay = setTimeout(() => {
        setShowOverlay(true);
        const timerFadeIn = setTimeout(() => {
          setFadeInOverlay(true);
        }, 0);
      }, 500);
      const timerHide = setTimeout(() => {
        setShowVideo(false);
      }, 3000);
      return () => {
        clearTimeout(timerOverlay);
        clearTimeout(timerShow);
        clearTimeout(timerHide);
      };
    }
  }, []);

  return (
    <>
      <Seo
        pageDescription={"『あたためて、巡らせて、トトノウ。』"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />

      {showVideo && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-[999] ${
            fadeOut ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500`}
        >
          <video className="min-w-full min-h-full object-cover" autoPlay muted>
            <source src="/assets/video/first_view.mp4" type="video/mp4" />
          </video>

          <div className="fixed inset-0 flex items-center justify-center z-[1000] bg-[#efefef40]">
            {showOverlay && (
              <div className="fixed inset-0 flex items-center justify-center z-[1000] bg-[#efefef40]">
                <h1
                  className={`text-white text-7xl font-mincho tracking-widest ${
                    fadeInOverlay ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-1000`}
                >
                  AUWA
                </h1>
              </div>
            )}
          </div>
        </div>
      )}

      <main className="relative overflow-x-hidden font-mincho mb-24 text-gray">
        {/*  Section: ファーストビュー  ===========================================================  */}
        <div className="md:container md:mx-auto">
          <div className="wave absolute top-0 right-[-60%] rotate-[-90deg] h-[90vh] w-[85vh] md:right-[-10%] md:w-[100vh]"></div>

          <div className="bg-gradient-to-b from-white to-transparent h-[30vh] absolute z-10 w-screen top-0"></div>
          <div className="bg-gradient-to-b from-transparent to-white h-[30vh] mt-[51vh] absolute z-10 w-screen"></div>

          <div className="w-screen container mx-auto text-gray text-left my-24 z-20 relative ml-8">
            <p className="text-xs md:text-sm py-1">AUWA BRAND PAGE</p>

            <div className="mt-4 md:mt-8">
              <h1 className="text-2xl md:text-5xl mb-12">
                始まりの音「あ う わ」。
              </h1>

              <p className="mt-8 md:mt-16 text-sm md:text-base leading-8">
                宇宙の始まりともされる音 「あ う わ」。
                <br />
                AUWAと出会ったこの瞬間から、毎日を活力と
                <br />
                希望に満ちたライフスタイルへと導きます。
                <br />
                <br />
                さらに、AUWAは、私たちのブランド理念である
                <br />
                4つのベーシックマインドの頭文字でもあります。
              </p>

              <ul className="list-none space-y-2 my-8 w-2/3 md:w-1/5">
                <li className="grid grid-cols-5 gap-2">
                  <span className="col-span-1 text-purple">A</span>
                  <span className="col-span-4">: authentic（本物）</span>
                </li>
                <li className="grid grid-cols-5 gap-2">
                  <span className="col-span-1 text-purple">U</span>
                  <span className="col-span-4">: unison （調和）</span>
                </li>
                <li className="grid grid-cols-5 gap-2">
                  <span className="col-span-1 text-purple">W</span>
                  <span className="col-span-4">: warmth （温かさ）</span>
                </li>
                <li className="grid grid-cols-5 gap-2">
                  <span className="col-span-1 text-purple">A</span>
                  <span className="col-span-4">: axis（軸）</span>
                </li>
              </ul>
              <p className="mt-5 md:mt-10 text-sm md:text-base leading-8">
                ここで、あなたの新たな日常が始まります。
                <br />
                AUWAと一緒に、一歩を踏み出しましょう。
              </p>
            </div>
          </div>
        </div>

        {/*  Section: CONCEPT  ====================================================================  */}
        <>
          <div className="bg-gradient-to-b from-white to-background h-[10vh] relative mt-40 z-0 w-screen"></div>
          <div className="relative z-10 bg-background py-10">
            <div
              id="concept"
              className="text-6xl mr-2 text-right md:text-left text-[#BA91A44D] md:ml-24 md:text-8xl"
            >
              CONCEPT
            </div>

            <div className="md:flex md:flex-row-reverse md:container md:mx-auto">
              <div className="md:hidden">
                <Image
                  className={"w-11/12 ml-auto my-4"}
                  src="/assets/image/home/template.png"
                  alt="logo"
                  width={1500}
                  height={1500}
                />
              </div>
              <div className="hidden md:block">
                <Image
                  className={"w-11/12 ml-auto my-4 md:w-5/6"}
                  src="/assets/image/home/template_pc.png"
                  alt="logo"
                  width={1500}
                  height={1500}
                />
              </div>
              <div className="w-4/5 ml-auto mr-4 text-left text-xs leading-6 md:text-base mt-8 md:mt-16 md:w-3/5">
                <p className="text-xs md:text-sm py-2">AUWA CONCEPT</p>

                <h1 className="text-xl md:text-5xl md:mb-12">自然との調和。</h1>
                <p className="mt-4">
                  森羅万象の奇跡に思いを馳せると、あまりにも自然なことに気づかされます。生命を生む木々や生物たちは、指導なしに、自然に健康な生活を選択し、生き続ける力を見つけます。それは太陽の光、水、地球からの熱、そして大地の豊かさなど、地球上の全てのエネルギーを調和させる能力、これこそが生物の本来の力であり、私たち人間にも備わっているポテンシャルです。
                </p>
                <p className="mt-8 md:mt-16">
                  例えば、私たちのSPAレギンスやヒップボーンベルトは、高度なカットと縫製技術に加え、医療機器として認知されているSPAOREを利用し、オーガニック炭と温泉鉱石の遠赤外線効果を活用した「温活アイテム」を開発しました。
                </p>
                <p className="mt-8 md:mt-16">
                  スタイリッシュで快適な着心地を提供するだけでなく、日常生活で簡単に使用できるように設計されているAUWA製品を、あなたの新たなライフスタイルの一部として取り入れていただくことで、健康はもちろん、ポジティブな思考や理想の未来を描く思考を育むことにも繋がることを期待しております。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-background to-white h-[10vh] relative mb-12 z-0 w-screen"></div>
        </>

        {/*  Section: PRODUCT  ====================================================================  */}
        <div className="relative z-10 py-10 md:container md:mx-auto md:mb-24">
          <div className="text-6xl mr-2 text-left text-[#BA91A44D] md:text-8xl">
            PRODUCT
          </div>
          {/*  Part: HIPBONE BELT  ------------------------- */}
          <>
            <Image
              className={"w-11/12 mr-auto md:w-2/3 my-4"}
              src="/assets/image/home/template.png"
              alt="logo"
              width={1500}
              height={1500}
            />

            <div className="w-5/6 mr-auto text-left text-xs ml-4 leading-6 md:text-base my-8 md:mt-16 ">
              <h1 className="text-2xl md:text-5xl">HIPBONE BELT</h1>
              <p className="text-xs md:text-sm leading-8">ヒップボーンベルト</p>

              <p className="mt-4">
                一般医療機器のSPAOREを用いた”温活アイテム”。
                家事中やリラックスタイムなどの時間にご着用ください。
              </p>
              <Link className="align-sub" href="/products/hipbornbelt">
                <button className="flex items-center px-4 py-[6px] my-8 border border-gray-800 text-gray-800 font-sans font-semibold">
                  <span>VIEW PRODUCT</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </>

          {/*  Part: SPA LEGGINGS  ------------------------- */}
          <>
            <Image
              className={"w-11/12 ml-auto md:w-2/3 mb-4 mt-24"}
              src="/assets/image/home/template.png"
              alt="logo"
              width={1500}
              height={1500}
            />

            <div className="w-5/6 ml-auto text-left text-xs mr-4 leading-6 md:text-base my-8 md:mt-16 md:w-2/3">
              <h1 className="text-2xl md:text-5xl">SPA LEGGINGS</h1>
              <p className="text-xs md:text-sm leading-8">SPA レギンス</p>

              <p className="mt-4">
                高いUVカット性能で紫外線をカットしてくれるので、インドアウェアとしてだけでなく、スポーツウェア・スイムウェアとしても幅広くご使用いただけます。
              </p>
              <Link className="align-sub" href="/products/spa_leggings">
                <button className="flex items-center px-4 py-[6px] my-8 border border-gray-800 text-gray-800 font-sans font-semibold">
                  <span>VIEW PRODUCT</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </>

          <Image
            className={"my-24 md:w-2/5"}
            src="/assets/image/home/template.png"
            alt="logo"
            width={1500}
            height={1500}
          />
        </div>

        {/*  Section: THANKS  ====================================================================  */}
        <>
          <div className="relative">
            <div className="wave absolute top-0 left-[-60%] rotate-[90deg] h-[60vh] w-[60vh] md:left-[-25%] md:w-[85vh]"></div>
          </div>

          <div className="relative">
            <div className="wave absolute top-[40vh] right-[-60%] rotate-[-90deg] h-[60vh] w-[60vh] md:right-[-25%] md:w-[85vh]"></div>
          </div>

          <div
            id="thanks"
            className="text-6xl mx-auto text-center text-[#BA91A44D] md:text-8xl"
          >
            THANKS
          </div>

          <div className="w-screen container mx-auto text-gray text-center mt-24 z-20 relative">
            <div className="mt-4 md:mt-8">
              <p className="mt-8 md:mt-16 text-sm leading-8 md:text-lg">
                Ageの壁をさらりと飛び越え、
                <br />
                多くの女性が社会で活躍するこの時代。
              </p>

              <p className="mt-8 md:mt-16 text-sm md:text-lg leading-8">
                益々深刻になりつつある
                <br />
                「生理・妊娠期・産後・更年期」などの
                <br />
                様々なライフステージに訪れる悩み。
              </p>

              <p className="mt-8 md:mt-16 text-sm md:text-lg leading-8">
                そういった悩みを抱える方々に対する
                <br />
                デイリーユースな温活アイテムの開発・提供には
                <br />
                多くの専門的な知識・経験が必要となりました。
              </p>

              <p className="mt-8 md:mt-16 text-sm md:text-lg leading-8">
                AUWAの製品開発で多大なるお力添えを頂いた
                <br />
                お二人の先生に心より感謝申し上げます。
              </p>

              <div className="md:flex md:justify-between  ">
                <div className="flex gap-3 my-20 md:w-2/5 md:mx-auto">
                  <div className="w-[50vw]">
                    <Image
                      src="/assets/image/home/profile_ikegawa.png"
                      alt="logo"
                      className="md:w-52"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="text-left w-[55vw]">
                    <h1 className="text-[1.3rem] md:text-4xl text-purple_dark tracking-widest">
                      池川 明
                    </h1>

                    <p className="text-[0.6rem] md:text-sm mb-4">
                      医学博士・産婦人科
                    </p>

                    <div className="text-[0.6rem] md:text-sm leading-5">
                      池川クリニック委員長として28年間で約2800件の出産を扱う。「胎内記憶」領域の第一人者として、数々の研究論文・書籍の執筆や、新聞・映画等のメディア出演を続けてきた。
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 my-20 flex-row-reverse md:flex-row md:w-2/5 md:mx-auto">
                  <div className="w-[50vw]">
                    <Image
                      src="/assets/image/home/profile_akiyoshi.png"
                      alt="logo"
                      className="md:w-52"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="text-left w-[55vw]">
                    <h1 className="text-[1.3rem] md:text-4xl text-purple_dark tracking-widest">
                      秋吉 彩也佳
                    </h1>

                    <p className="text-[0.6rem] md:text-sm mb-4">
                      美容整骨師・自律神経管理士
                    </p>

                    <div className="text-[0.6rem] md:text-sm leading-5">
                      ダンス指導歴44年。ダンサーとして紅白歌合戦に20回出場し、振付師としてもテレビや舞台を多数手がける。加圧トレーニング、美骨整体、講演、狛江市の依頼で体操指導など、28年にわたり「健康人生」に注力。現・石川県観光特使。{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </main>
    </>
  );
}
