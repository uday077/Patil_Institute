import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path = '/' }) => {
  const url = `https://patilinstitute.com${path}`;
  return (
    <Helmet>
      <title>{title} | Patil Institute</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${title} | Patil Institute`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://patilinstitute.com/patil_logo.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={`${title} | Patil Institute`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://patilinstitute.com/patil_logo.png" />
    </Helmet>
  );
};

export default SEO;
