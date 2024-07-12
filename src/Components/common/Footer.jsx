import React from 'react'
import "./footer.css"
const Footer = () => {
    let icons=["https://s3-alpha-sig.figma.com/img/46fa/3808/a6e1a4c1611327e43cd66e57344a68d0?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IU6a~1~559ujzsH5g53nd6hmQWAMbAmWzEnCVSVIP8VElWn0oVgtLAeZHbzHGpipiXwu5sX5tlv3PRIV1k1dDY9trsWhfmkIdSmNntSVXsEeNkJL~oYAASzyRmmkBTO5Mz0uNUPcaGDJhRMA7iJY~Q1W2eReKRoAwHl4MkBLm8CuMf~Z8tEUuhctsEqMF3YsEWbpJYPcxxLEhndsT2j2Lbvrc84QItKMKMggghiqt8EeSOrkZgzFX2wqjkTlZ9jwaaWwRQaqsKlxG28HUmzkTjv27~MrlPqU9HTJ~eBPgPlZnvbz6GzpzkjK6Jvf1e9u-BXCgBt3BbeUr3a88QrI7Q__",
        "https://s3-alpha-sig.figma.com/img/c9a8/620b/c4b1a1268b03c6984a852ab4677f12c3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qyTy4oGzkkmEP35sIV-14QGVRefHSJEaCfV5tbJV8Vy2ZDhiiKG9Pk~sus10mLcXG~NSR18upH9Ct8CcTYlo0boIDzNjj15-RFeN~0Tr5KMSZm6eexo1xQ108bM8NysC3u3LyPLgPvmk9PRA7Kw7pmbte1Wr-0CPkbMhVxn0EVZEPga2KLXLq4q0bsWdV95Wir35NGAwFM88hEUJwdNLQ0YnvNAmUytD6ofMUQcgycQIf4qNlnNquM3Q~9JHeCcRVf4i32sqyJhEy1cwivfMSVTE2j-n8xfWvY7h-7hlvasA5aDxeqx9G8hXcitJHsbUEpIr7VPzNMuiI8xB30w-KQ__",
        "https://s3-alpha-sig.figma.com/img/4e0e/7aef/ed8cdaaf475faa63cc4b1020e5fa4706?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EK-iSTQAAwVOoeopOWi9hzolaB9tI0n2sGfe9DGDCjggNlNReP0sw0yDs-cS4mv1USs2WmZeUpizRQlCA9RgVWfmcWZ9CnsKWMA1k79WCEiGR7I27LBwdCg7DC0WaDu3MM64yJU7X9loB-rk85eSm7PJBaiorJxzGPpXVtEi5Ou5s-Rjnv5W5NsjwFX4ocIrbJFvs~P168oabxigYxzRGIZhcWGSz5YwUThCwXcCwHQQxQuteNoYuKrPRgwVVGXb8RRe0e3ohV4ri5~HqEm9l0T2SL-ZMcmmJ3fWvi44YkFNx9MpWwMYfVTFhE6~66bkrIsFoJ~RUpxuy2T-H3skIA__",
        "https://s3-alpha-sig.figma.com/img/9993/e094/bab9ed47313780753bacdc98c868a13b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lrx-VBO5djNcFxs~tIUOJvd4clL4HGUnyyDSVkbrr7KQyVkzwIxcMRzjEAgS--sLWy8TJYqvWXJ~v7Fke~5rVA8y8gH2ofn2qdXFRUDrxpyjOP5l9iqLuuQ-pyO8qtcQRPHk2si5uUyXEvsC6aW0YuRkU2JnL2~B2vcrhnLO4lzJaWkFVv2TKt7TqVS60q7QPNeNa6pqpP7FC3gio9dDDXrsOiD77T~CxhGe8xEDOLb9jZChcjcx618x8RuCnXSs57u8PgKPLudGeLn6uPO~AdXBBcAjPVwIOjE8I0pjXIc8fDvliERU3MIoJgyc69rtSXIkp7GljVXYWQGBcc2MMw__",
        "https://s3-alpha-sig.figma.com/img/dafa/1cbb/0f395e6394a0c4238f024034ec7ffd6d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hlbBH8eVR7DvNesa2xnpe9IjMMbYZkv-mCYbkjSSX68a4DEEyCOTeyjXWCrVCeSnCG8pyOyGCuqSP2dLxAOK3z2gLaAN~z9xrTbmH~mmt6LusAllt~KOJRe3ksFp2~QuKyFAAjGPc1f~-Tc~hjRwAU5kQhbhrU~ZdZI12dmenXqBMu5yd9fThaa0U~IOKkXP-8qea7JXd8CEs5Ui~FD7Y--Ce10Bo~GBxZ5pS9hf98ChXcNHx1Dg0HEysDS-RuxrtNw6lS3WWpHBsrN4ZCvE1UOOVxra0hOdnCT-ZDBGQPlm~QeqwYAOXTsS7LXT~ksMl6vS3~z8XIQ-CbB9RkHIEA__",
        "https://s3-alpha-sig.figma.com/img/6184/d7ad/5a2d425017a94b03b18b0969b46f0a8e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=feQGYTEc6R-HCuFnNwh-wGKusGeLDHACdVDidFhJw514ddvuN~7kh6nw2Jol9BAyS-Z6uDqM5v5YsB9pPbTybR-y9IOhc2syovcD83beEPnj7QrZwN5EXtaWkfzY-CaJDenYjL7AVCcN7axBNlUZ13LcgeLtzZiasoSWwxykMLG6ZFfMskujKJNkUHs40xWTwBI52mJ40EB4c~h5AgdVCryI-RqyYnOahziQdqY6w8XZvxphr47MrtVBbyPnE0vlG7a47Rv4tFDLpPWk6gnEnaHnD26-ACzD8AOk8d0CA6NC9mr0U6h1LE4RlNzbgBzzUK36TMgM071-iPC9w3PiEw__",

    ]
  return (
    <div className='footer-wrapper'>
      <div></div>
      <div>
       {/* <img src={icons[0]} height={162} width={162}/> */}
       <img className='icon' src={icons[1]} />
       <img className='icon'src={icons[2]} />
       <img className='icon' src={icons[3]} />
       <img className='icon' src={icons[4]} />
       <img className='icon' src={icons[5]} />
        
      </div>
    </div>
  )
}

export default Footer
