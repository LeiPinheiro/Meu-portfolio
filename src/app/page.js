import Header from "@/_components/Header";
import MainSec from "@/_components/MainSec";
import AboutMeSec from "@/_components/AboutMeSec";
import ExpSec from "@/_components/ExpSec";
import ProjectsSection from "@/_components/ProjectsSection";
import ContactSec from "@/_components/ContactSec";
import Arrow from "@/_components/Arrow";



export default function Home() {
  return (
    <>
      <Header />
      <MainSec />
      <AboutMeSec />
      <ExpSec />
      <ProjectsSection />
      <ContactSec />
      <Arrow />
    </>  
  );
}
