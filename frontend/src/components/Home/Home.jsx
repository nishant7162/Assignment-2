import { useEffect } from "react";
import Layout from "../../Layout/Layout";
import { useGlobalContext } from "../../states/Contet";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import SongBar from "../MasterBar/SongBar";
import Navbar from "../Navbar";

export const songs = [
  {
    id: Math.random() * Date.now(),
    title: "Tum Hi Ho",
    artist: "jubin nutiyal",
    mp3: new Audio("/assets/mp3/Tum Hi Ho.mp3"),
    img: "/assets/Arijit-1.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Ae Dil Hai Mushkil",
    artist: "Ava  max",
    mp3: new Audio("/assets/mp3/ae.mp3"),
    img: "/assets/Arijit-2.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Mirchi Awards",
    artist: "Alan walker",
    mp3: new Audio("/assets/mp3/Mashup.mp3"),
    img: "/assets/Arijit-3.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Judaiyaan",
    artist: "Arijit singh",
    mp3: new Audio("/assets/mp3/Judaiyaan.mp3"),
    img: "/assets/Arijit-4.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Heeriye",
    artist: "Jubin nautiyal",
    mp3: new Audio("/assets/mp3/Heeriye.m4a"),
    img: "/assets/Arijit-1.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Tu hi Hai Aashiqui",
    artist: "honey singh",
    mp3: new Audio("/assets/mp3/Tu Hi Hai Aashiqui.mp3"),
    img: "/assets/Arijit-5.jpeg",
  },
];

const Home = () => {

  const { getUser } = useGlobalContext();

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Layout>
      <Navbar />

      <div className="tertiary_bg ml-2 px-4 py-4 home ">
        <div className="flex justify-between mb-4 pt-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Focus
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
        <div className="flex justify-between my-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Spotify List
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
      <Footer/>
      <SongBar />
    </Layout>
  );
};

export default Home;
