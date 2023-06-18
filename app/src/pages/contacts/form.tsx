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
        pageTitle={"お問い合わせ"}
        pageDescription={
          "こちらのページにてAUWAに関するお問い合わせをいただけます。"
        }
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <main className="relative z-10 overflow-x-hidden mb-32 mx-auto md:container md:mt-10 text-gray md:text-center">
        <div>
          <PageTitle title="CONTACT" subtitle="お問い合わせ" />
          <div className="w-5/6 mx-auto">
            <p className="text-xs leading-6 md:leading-8 md:text-lg">
              製品に関するお問い合わせや、提携のご希望など、 <br />
              ご質問・ご相談は、こちらのフォームよりお送りください。 <br />
              メールにてご連絡させていただきます。
            </p>
          </div>
        </div>

        {/*  Section: フォーム  ===========================================================  */}
        <form
          method="post"
          action="https://hyperform.jp/api/Pb5XZhqZ"
          className="bg-white rounded-md w-5/6 py-5 mx-auto md:w-2/3"
          target="_blank"
        >
          <h2 className="text-center font-bold my-4 md:text-white md:my-4">
            お問い合わせフォーム
          </h2>
          <div className="w-[90%] mx-auto my-8 md:w-3/5 md:my-10">
            <div className="text-sm font-bold text-gray md:text-left">氏名</div>
            <div className="flex my-3">
              <div className="flex flex-col w-1/2">
                <label className="text-xs md:text-sm text-pale_gray my-1 md:text-left">
                  姓
                </label>
                <input
                  type="text"
                  name="姓"
                  className="bg-pale_yellow w-11/12 h-8 px-2 text-sm md:h-10 md:px-4"
                  placeholder="山田"
                  required
                ></input>
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-xs md:text-sm text-pale_gray my-1 md:text-left">
                  名
                </label>
                <input
                  type="text"
                  name="名"
                  className="bg-pale_yellow w-11/12 h-8 px-2 text-sm md:h-10 md:px-4"
                  placeholder="花子"
                  required
                ></input>
              </div>
            </div>
          </div>
          <div className="w-[90%] mx-auto my-8 md:w-3/5 md:my-10">
            <div className="text-sm font-bold text-gray md:text-left">
              氏名（フリガナ）
            </div>
            <div className="flex my-3">
              <div className="flex flex-col w-1/2">
                <label className="text-xs md:text-sm text-pale_gray my-1 md:text-left">
                  セイ
                </label>
                <input
                  type="text"
                  name="セイ"
                  className="bg-pale_yellow w-11/12 h-8 px-2 text-sm md:h-10 md:px-4"
                  placeholder="ヤマダ"
                  required
                ></input>
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-xs md:text-sm text-pale_gray my-1 md:text-left">
                  メイ
                </label>
                <input
                  type="text"
                  name="メイ"
                  className="bg-pale_yellow w-11/12 h-8 px-2 text-sm md:h-10 md:px-4"
                  placeholder="ハナコ"
                  required
                ></input>
              </div>
            </div>
          </div>
          <>
            <FormInput
              label="メールアドレス"
              required={true}
              type="email"
              name="email"
              placeholder="例：hanako-yamada@email.co.jp"
            />
          </>
          <>
            <FormInput
              label="電話番号"
              required={true}
              type="tel"
              name="電話番号"
              placeholder="例：08012345678"
            />
          </>
          <>
            <FormInput
              label="お問い合わせのタイトル"
              required={true}
              type="text"
              name="お問い合わせのタイトル"
              placeholder="例：製品の着用方法について"
            />
          </>
          <div className="w-[90%] mx-auto my-8 md:w-3/5 md:my-10">
            <div className="flex items-center my-4">
              <div className="bg-orange rounded-full mr-1 md:mr-3 px-3 py-[2px] text-xs md:text-sm text-white">
                必須
              </div>

              <div className="text-sm font-bold text-gray md:text-left">
                お問い合わせ内容
              </div>
            </div>

            <textarea
              name="お問い合わせ内容"
              className="bg-pale_yellow w-full px-2 h-52 text-sm py-4 md:px-4"
              placeholder=""
              required
            ></textarea>
          </div>

          <div className="w-full text-center md:my-4">
            <button
              type="submit"
              className="bg-orange rounded-md px-5 py-1 text-white md:px-16 md:py-2 bg-purple"
            >
              送信する
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
