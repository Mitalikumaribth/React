import React, {useState,useEffect, use } from "react";

function ResizeComponent() {
    const [windowWidth,setwindowWidth] = useState(window.innerWidth);

useEffect(() => {
    const handleResize = () => setwindowWidth(window.innerWidth);
    console.log("Adding event listener");
    window.addEventListener("resize",handleResize);


return () => {
    console.log("Removing event listener");
    window.removeEventListener("resize",handleResize);
}

 },[]);
// it will run only on first render

return (
    <div>
        <h1>Window Widht: {windowWidth}px</h1>
    </div>
);

}

export default ResizeComponent;
