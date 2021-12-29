
import { currentlanguageCode, domainAddress } from "../../next.config";
import { GetAttributeSiteMap, GetSiteMapAttribute } from "../../src/components/Services/SiteMapService";

const Sitemap = () => {

};
export default Sitemap

export async function getServerSideProps(ctx) {
    let getsiteMap;
    let getsiteMapCategory;
    let sitemap;
    if (ctx.query.page == 'product-category') {
        getsiteMap = await GetSiteMapAttribute();
        sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${getsiteMap.data.response
                .map((item) => {
                    return `
                <url>
                  <loc>${domainAddress}/${currentlanguageCode}/product-category/${item.permallink}</loc>
                  <lastmod>${item.modifyDate}</lastmod>
                  <urlset xmlns="${domainAddress}/${item.langauge}/product-category/${item.permallink}" rel="alternate" hreflang="${item.langauge}" />
                </url>
              `;
                })
                .join("")}
        </urlset>
      `;

    } else if (ctx.query.page == 'product') {
        getsiteMapCategory = await GetAttributeSiteMap()
        sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${getsiteMapCategory.data.response
                .map((item) => {
                    return `
                <url>
                  <loc>${domainAddress}/${currentlanguageCode}/product/${item.peramalink.replace(' ', '-')}</loc>
                  <lastmod>${item.dateModify}</lastmod>
                  <urlset xmlns="${domainAddress}/${item.langauge}/product/${item.peramalink.replace(' ', '-')}" rel="alternate" hreflang="${item.langauge}" />
                </url>
              `;
                })
                .join("")}
        </urlset>
      `;
    }


    ctx.res.setHeader("Content-Type", "text/xml");
    ctx.res.write(sitemap);
    ctx.res.end();

    return {
        props: {

        },
    };
};
