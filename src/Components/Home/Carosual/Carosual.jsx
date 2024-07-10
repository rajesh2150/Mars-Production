import React from "react";
import "./carosual.css";
const Carosual = () => {
 return (
  <div className="carosual-wrapper">
   {/* top */}
   <div>
    <img className="carosual-top" src="https://s3-alpha-sig.figma.com/img/a7af/c4a4/cd8d4dd080dc60b86f57dfbd6e48c9a5?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTULf6QfDZEWJb3-XMNtDu9gXU2B5ntv4O0IiWk7fmfyZQx-nDO7eteNHxNL1PJfp-zCntLaQrPgiR9ep6vBVSYG~3AxZrOPgkxZGZL0TaTooX~ACJIjq4CnmUIHdq9o6WXfb6a~98NWdwO6k7PaiYvOWg1izjUhEyYU8wDLWd-cNbA1MznI1nmFN6GMdnfT6qPBHOyPLvcRTHwCgyAyTs0ETkoE1XeGB7qxrSFwlgmSbpH-G4l3NkHiG3EwWbOs1~k2-uBKZWgTcnKbQdtCnUPWIqgk2eB2hk2C-MDExReUKSka~5bWD8G~GPGL8KryD3FBKbH48H1PKnw6FfOA1Q__"/>
   </div>

   {/* Bottom */}
   <div className="carosual-title-wrapper">
    <div className="carosual-details">
     <div>
      <p className="carosual-heading">To Make timeless <br style={{display:"inline"}}/>films intended for better tomorrow</p>
      <p className="carosual-paragraph">Crafting Cinematic Dreams Where Stories Come to Life</p>
      <a className="carosual-link">View Last Project</a>
     </div>
    </div>
    <img className="carosual-image" src="https://s3-alpha-sig.figma.com/img/ba21/185f/a68a50e21343208170220d2c6c8049c1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yr40ujSwwbHNbS9oKLNHOoxEsfiot~HiQEiaTiJzJTIiuL5QqYj2FpbhCnBtVpF7KfH-pJfd5cJGlIkU4LoVUnKMWQc5Vr8b~FFTu3jOr~LY6faRFixvr~3t-aNe7KBk54KHnIQAHBAwVTKVQH7zACiOWNY7swEkTDhiF3B8XAK9OxXKwCOz02WwnQ6XxsRYsEAwANOFTGRYlpHSubqls~r5xtymKYxmKoObWts8NPmdQV3OFpb12MSeoTZPU4Nt1OZxRpihd3jnEj3F8aKM9mFe5J60vjjNW4j5U1tWZKVwSIOUvu9cQJdzlNZU8C1yysA-nN0bcKaTc9reomcCBg__"/>
   </div>
  </div>
 );
};

export default Carosual;