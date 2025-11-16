export function getPortfolioSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://codewithsaidul.vercel.app/#person",
        "name": "Saidul Islam Rana", // Make sure this is your preferred name
        "url": "https://codewithsaidul.vercel.app",
        "sameAs": [
          "https://github.com/CodeWithSaidul", // <-- UPDATE THIS
          "https://www.linkedin.com/in/your-linkedin-profile", // <-- UPDATE THIS
          "https://twitter.com/codewithsaidul", // <-- UPDATE THIS
        ],
      },
      {
        "@type": "WebSite",
        "name": "CodeWithSaidul",
        "url": "https://codewithsaidul.vercel.app",
        "publisher": {
          "@id": "https://codewithsaidul.vercel.app/#person",
        },
      },
    ],
  };

  return JSON.stringify(schema);
}