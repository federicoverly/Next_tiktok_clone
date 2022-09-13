import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NoResults from "../components/NoResults";
import VideoCart from "../components/VideoCart";
import { Video } from "../types";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  console.log(videos);
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {" "}
      {videos.length ? (
        videos.map((video: Video) => <VideoCart post={video} key={video._id} />)
      ) : (
        <NoResults text={"No videos"} />
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
