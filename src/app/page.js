import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  HomeMenu,
  SectionHeader,
} from "@/components/layout";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
