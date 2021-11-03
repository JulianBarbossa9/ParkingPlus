import { useEffect, useState } from "react";
import { useWindowDimensions } from '../Hooks/ScreenSize';

export const useMousePosition = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [distance,setDistance]=useState({xdist:0,ydist:0});


  useEffect(() => {
    
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    //console.log("hola");
    
     console.log(position);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};