import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "../components/common/SectionTitle";
import PageTopLogo from "../components/common/PageTopLogo";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        pageTitle={"ページが見つかりませんでした。"}
        pageDescription={
          "ご指定のページにアクセスできませんでした。アドレスが変更されているか、ページが削除されている可能性があります。お手数ですがホームに戻って、ご希望のページをお探しください。"
        }
        pageImgWidth={1280}
        pageImgHeight={960}
      />

      <main className="font-mincho overflow-x-hidden min-[50vh] relative z-20 mt-24 text-gray">
        {/*  Section: NEWS  ===========================================================  */}
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl tracking-widest">
            ページが見つかりません。
          </h1>
          <p className="text-sm md:text-sm leading-8">NOT FOUND</p>
        </div>

        <div className="text-center my-12 leading-7 lg:-mt-10 w-11/12 mx-auto text-sm">
          <p>誠に申し訳ございません。</p>
          <p>ご指定のページにアクセスできませんでした。</p>
          <p>
            アドレスが変更されているか、
            <br />
            ページが削除されている可能性があります。
          </p>
          <p>
            お手数ですが、以下のページから
            <br />
            ご希望のページをお探しください。
          </p>
        </div>
        <div className="mb-40 md:mb-80 mx-auto mt-10">
          <Link href="/">
            <div className="rounded-md w-5/12 md:w-1/4 flex mx-auto py-2 md:py-3 justify-center mt-5 bg-purple_dark font-basic">
              <div className="text-white text-lg">ホームに戻る</div>
              <svg
                className="w-6 h-6 ml-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
