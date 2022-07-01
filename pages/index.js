import Head from "next/head";
import Image from "next/image";
import Navigation1 from "../components/Template2/Navigations/Navigations1";
import Testimonials2 from "../components/Template2/Testimonials/Testimonials2";
export default function Home() {
  return (
    <>
      <Testimonials2 />
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <>{page}</>;
};
