import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagProps {
  title: string;
  keywords: string;
  description: string;
  imgsrc: string;
  url: string;
}

const SEOMetaTag: React.FC<MetaTagProps> = props => {
  return (
    <Helmet>
      <title>{props.title}</title>

      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:site_name" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.imgsrc} />
      <meta property="og:url" content={props.url} />

      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.imgsrc} />
    </Helmet>
  );
};

export default SEOMetaTag;
