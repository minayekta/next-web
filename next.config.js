const isProd = process.env.NODE_ENV === "production";
// const withBabelMinify = require('next-babel-minify')()
const languageCode = "es";

module.exports = {
  basePath: isProd ? `${languageCode == "en" ? '' : `/${languageCode}`}` : '',
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    plugins: [
      // other plugins,
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
    ]
    return config
  },

  images: {
    domains: ['api1.ronixtools.com', 'ronixtools.com','wss.ronixtools.com'],
    deviceSizes: [400, 500, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp']
  },
  
  assetPrefix: isProd ? `${languageCode == "en" ? '' : `/${languageCode}`}` : "",
  isRtl: languageCode == "ar" || languageCode == "ir",
  domainAddress: "https://ronixtools.com",
  captchaSiteKey: isProd ? "6LcJDH0UAAAAAEeXbh02X--eq3kPBAvflo-eS6-e" : "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
  imageAddress: "https://wss.ronixtools.com/Images/IrImages",
  productImageUrl: "https://wss.ronixtools.com/Images/Products",
  staticImages: 'https://wss.ronixtools.com/Images/staticImages',
  internationalAssets: 'https://wss.ronixtools.com/InternationalAssets/assets',
  CatalogAssets: 'https://wss.ronixtools.com/catalog',
  categoryImage: `https://wss.ronixtools.com/InternationalAssets/assets/img/Categories/`,
  categoryBanner: `https://wss.ronixtools.com/InternationalAssets/assets/img/CategoryBanner/`,
  categoryBackground: `https://wss.ronixtools.com/InternationalAssets/assets/img/CAtegoryHome`,
  websiteLanguages: ["en", "de", "es", "tr", "ru", "fr", "fa", "ar", "pt"],
  imageOptimizeServerUrl: isProd ? `${languageCode == "en" ? '' : `/${languageCode}`}` : '',
  currentlanguageCode: languageCode,

  env: {
    apiDomain: "https://wss.ronixtools.com",
    articleImageUrl: `http://wss.ronixtools.com/Images/staticImages/Articles`,
    apiurl: "https://api1.ronixtools.com/api",
    serverSideApiUrl: "https://api1.ronixtools.com:444/api",
  }
};