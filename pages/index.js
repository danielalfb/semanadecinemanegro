import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

import ReactPlayer from "react-player";

export default function Home() {
  // Ref
  // const textOne = useRef();
  // const textTwo = useRef();
  // const textThree = useRef();
  // const textFour = useRef();

  // useIsomorphicLayoutEffect(() => {
  //   stagger(
  //     [textOne.current, textTwo.current, textThree.current, textFour.current],
  //     { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
  //     { y: 0, x: 0, transform: "scale(1)" }
  //   );
  // }, []);

  return (
    <>
      <Head>
        <title>SCNBH23</title>
      </Head>

      <div className='h-screen w-full'>
        <Header />
        <div
          className='top-0 w-full bg-top bg-cover'
          style={{
            height: "100vh",
            backgroundImage: `url('/images/semana_banner_home.png')`,
          }}
        />
        <>
          {/* SOBRE */}
          <div className='p-10'>
            <div className='w-1/2	'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
                ut sem nulla pharetra diam sit. Etiam non quam lacus suspendisse
                faucibus interdum posuere. Augue eget arcu dictum varius duis at
                consectetur lorem donec. Nam at lectus urna duis convallis
                convallis tellus id interdum. Lorem ipsum dolor sit amet
                consectetur adipiscing elit. Scelerisque purus semper eget duis
                at tellus. Quis enim lobortis scelerisque fermentum dui
                faucibus. Velit laoreet id donec ultrices tincidunt arcu non
                sodales neque. Ac auctor augue mauris augue. Vitae et leo duis
                ut diam. In dictum non consectetur a erat nam at. Risus quis
                varius quam quisque. Mauris sit amet massa vitae. Elit sed
                vulputate mi sit amet mauris commodo quis imperdiet. Morbi
                tristique senectus et netus et malesuada fames ac turpis. Elit
                ullamcorper dignissim cras tincidunt lobortis feugiat vivamus
                at. Integer malesuada nunc vel risus commodo viverra maecenas
                accumsan. Dui vivamus arcu felis bibendum ut tristique.
                Pellentesque habitant morbi tristique senectus et netus et.
              </p>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames. Et netus et malesuada fames ac turpis egestas.
                In mollis nunc sed id semper. Fringilla urna porttitor rhoncus
                dolor purus non enim. Accumsan tortor posuere ac ut consequat.
                Sit amet nisl suscipit adipiscing bibendum est ultricies. Metus
                vulputate eu scelerisque felis imperdiet proin fermentum. Eget
                gravida cum sociis natoque penatibus et. Nec feugiat nisl
                pretium fusce id velit ut tortor pretium. Faucibus turpis in eu
                mi bibendum neque egestas congue. Egestas sed sed risus pretium
                quam vulputate. Vitae suscipit tellus mauris a diam maecenas sed
                enim ut. Enim sed faucibus turpis in eu mi bibendum. In metus
                vulputate eu scelerisque felis imperdiet proin. Odio ut sem
                nulla pharetra diam sit amet. In nulla posuere sollicitudin
                aliquam ultrices sagittis. Varius quam quisque id diam vel.
                Sagittis orci a scelerisque purus semper eget.
              </p>
            </div>
          </div>

          {/* VINHETA */}
          <div className='w-full laptop:mt-30 p-2 laptop:p-0'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=K7xzmkpwNoA'
              width='100%'
            />
          </div>
        </>
        <Footer />
      </div>
    </>
  );
}
