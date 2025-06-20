import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  HomeMenu,
  SectionHeader,
} from "../components/layout/index";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <About />
      <Contact />
    </>
  );
}
