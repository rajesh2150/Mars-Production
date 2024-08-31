import {useEffect} from 'react'
import {useLocation} from "react-router-dom"

const ScrollToTop = () => {
    const {pathname} = useLocation();
    const location =useLocation();
    console.log(location)

    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname])
  return null;
}

export default ScrollToTop
