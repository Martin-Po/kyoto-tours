import { Helmet } from "react-helmet";
import { metaTexts } from "../../metaTextData";

export const SeoHelmet = ({ lang, page }) => {
    const baseUrl = window.location.origin;
    const urls = {
      es: `${baseUrl}/es/${page}`,
      en: `${baseUrl}/en/${page}`,
      it: `${baseUrl}/it/${page}`,
      fr: `${baseUrl}/fr/${page}`,
    };
    const canonicalUrl = urls[lang] || urls['en'];
  
    return (
      <Helmet htmlAttributes={{ lang }}>
        <link rel="alternate" href={urls.en} hreflang="en" />
        <link rel="alternate" href={urls.es} hreflang="es" />
        <link rel="alternate" href={urls.it} hreflang="it" />
        <link rel="alternate" href={urls.fr} hreflang="fr" />
        <link rel="alternate" href={baseUrl} hreflang="x-default" />
        <link rel="canonical" href={canonicalUrl} />
        <title>{metaTexts[lang][page].title}</title>
        <meta name="description" content={metaTexts[lang][page].description} />
        <meta property="og:title" content={metaTexts[lang][page].ogTitle} />
        <meta property="og:description" content={metaTexts[lang][page].ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTexts[lang][page].twTitle} />
        <meta name="twitter:description" content={metaTexts[lang][page].twDescription} />
      </Helmet>
    );
  };