import type { AppProps } from "next/app";
import Image from "next/image";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import * as gtag from "src/libs/gtag";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [fadeInOverlay, setFadeInOverlay] = useState(false);

  {
    /* Google Analytics */
  }
  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  useEffect(() => {
    const handleStart = (url: string) => {
      if (url === "/") {
        setShowVideo(true);

        const timerShow = setTimeout(() => {
          setFadeOut(true);
        }, 2500);

        const timerOverlay = setTimeout(() => {
          setShowOverlay(true);
          const timerFadeIn = setTimeout(() => {
            setFadeInOverlay(true);
          }, 100);
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
      url !== router.asPath && setPageLoading(true);
    };
    const handleComplete = () => setPageLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  // TODO 正式なローディングコンポーネントにする
  const loadingComponent = (
    <div className="fixed w-full h-full z-[999] overflow-hidden bg-white top-0 items-center flex">
      <div className="w-screen mx-auto">
        <Image
          className={"mx-auto w-12 duration-1000"}
          src="/assets/image/common/loading.gif"
          alt="loading"
          width={128}
          height={128}
        />
      </div>
    </div>
  );

  return (
    <>
      {showVideo && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-[999] ${
            fadeOut ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500`}
        >
          <Image
            className="w-screen h-screen object-cover"
            src="/assets/image/home/loading.png"
            alt="logo"
            width={1500}
            height={1500}
          />

          <div className="fixed inset-0 flex items-center justify-center z-[900] bg-[#efefef40]">
            {showOverlay && (
              <div className="fixed inset-0 flex items-center justify-center z-[1000]">
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

      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${gtag.GA_MEASUREMENT_ID}');
           `,
        }}
      />

      <Layout>
        <div>
          {pageLoading && loadingComponent}
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}
