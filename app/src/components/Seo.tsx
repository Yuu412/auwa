import Head from "next/head";
import { useRouter } from "next/router";

interface MetaData {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
  pageImg?: string;
  pageImgWidth?: number;
  pageImgHeight?: number;
}

const Seo = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImg,
  pageImgWidth,
  pageImgHeight,
}: MetaData) => {
  const router = useRouter();
  const defaultTitle = "AUWA - Brand Page";
  const defaultDescription =
    "『温めて、巡らせて、トトノウ。』  AUWAと出会ったこの瞬間から、毎日を活力と希望に満ちたライフスタイルへと導きます。";
  const defaultUrl = "https://akira-ikegawa.vercel.app" + router.pathname;

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = pagePath ? pagePath : defaultUrl;

  const imgUrl = pageImg;
  const imgWidth = pageImgWidth ? pageImgWidth : 1280;
  const imgHeight = pageImgHeight ? pageImgHeight : 640;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <link rel="icon" href="/assets/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;display=swap"
        rel="stylesheet"
      />
      <link rel="canonical" href={url} />
      <meta
        name="google-site-verification"
        content="GHNcuPXML8Jnoj6CSljls4YzMQcWKhNkjs0RYWhSppw"
      />
    </Head>
  );
};

export default Seo;
