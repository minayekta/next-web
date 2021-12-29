import React from 'react';
function Page({ stars }) {
    return <div>Next stars: {stars}</div>
  }
  
  Page.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: "iman" }
  }
  
  export default Page;