import fs from 'fs'
import { currentlanguageCode, domainAddress } from "../../next.config";
import { GetSiteMapAttribute } from "../../src/components/Services/SiteMapService";

const Sitemap = () => {

};
export default Sitemap

export async function getServerSideProps({ res }) {
  let getsiteMap;
  getsiteMap = await GetSiteMapAttribute();

  const baseUrl = {
    development: "http://localhost:3000",
    production: domainAddress,
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml.js",
        "style.css"
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map((url) => {
        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `;
      })
      .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {

    },
  };
};
