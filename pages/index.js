import { useMemo, useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";
import ReactPlayer from 'react-player';
import ContentMenu from '../components/ContentMenu';

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>

      <div style={{width: '100% !important', backgroundColor: 'lightblue', height: '100vh'}}>
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="top-0 w-full bg-top bg-cover" style={{height: '100vh', backgroundImage: `url('https://www.semanadecinemanegro.com.br/mostras/img/filmes/CPE_VIA_LACTEA.jpg')`}} />
          <>
          {/* SOBRE */}
          <div className="p-10">
            <div className="w-1/2	">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam sit. Etiam non quam lacus suspendisse faucibus interdum posuere. Augue eget arcu dictum varius duis at consectetur lorem donec. Nam at lectus urna duis convallis convallis tellus id interdum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Scelerisque purus semper eget duis at tellus. Quis enim lobortis scelerisque fermentum dui faucibus. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Ac auctor augue mauris augue. Vitae et leo duis ut diam. In dictum non consectetur a erat nam at. Risus quis varius quam quisque. Mauris sit amet massa vitae. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Morbi tristique senectus et netus et malesuada fames ac turpis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Dui vivamus arcu felis bibendum ut tristique. Pellentesque habitant morbi tristique senectus et netus et.</p>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Et netus et malesuada fames ac turpis egestas. In mollis nunc sed id semper. Fringilla urna porttitor rhoncus dolor purus non enim. Accumsan tortor posuere ac ut consequat. Sit amet nisl suscipit adipiscing bibendum est ultricies. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Eget gravida cum sociis natoque penatibus et. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Faucibus turpis in eu mi bibendum neque egestas congue. Egestas sed sed risus pretium quam vulputate. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Enim sed faucibus turpis in eu mi bibendum. In metus vulputate eu scelerisque felis imperdiet proin. Odio ut sem nulla pharetra diam sit amet. In nulla posuere sollicitudin aliquam ultrices sagittis. Varius quam quisque id diam vel. Sagittis orci a scelerisque purus semper eget.</p>
            </div>
          </div>

          {/* VINHETA */}
          <div className="w-full laptop:mt-30 p-2 laptop:p-0">
              <ReactPlayer url='https://www.youtube.com/watch?v=K7xzmkpwNoA' width='100%' />
          </div>  

                 
        </>
        <Footer />
      </div>
    </>
  );
}
