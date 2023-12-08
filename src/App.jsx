import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  NoPage,
  Info
} from "./components";
import {infos} from "./constants"
import { useEffect, useRef } from "react";

const Home = () =>{
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current) {
      console.log(localStorage.getItem("scrollTop"));
      sectionRef.current.scrollTop = parseInt(
        localStorage.getItem("scrollTop")
      ); // Set the desired initial value (in pixels)
    }
  }, []);
  return (<div className="relative z-0 bg-primary h-[100dvh] overflow-y-scroll scroll-auto" ref={sectionRef} onScroll={(event) => {
    localStorage.setItem("scrollTop", event.currentTarget.scrollTop);
  }}
  >
  <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    <Navbar />
    <Hero />
  </div>
  <About />
  <Experience />
  {/* <Tech /> */}
  <Works />
  <Feedbacks />
  {/* <StarsCanvas /> */}
  {/* <div className="relative z-0">
    <Contact />
  </div> */}
</div>)
}

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index path="/" element={<Home />} />
        {infos.map((info,index)=>{
          return(
            <Route key={index} path={`/info-${info.id}`} element={<Info {...info}/>} />
          )
        })}
        <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
