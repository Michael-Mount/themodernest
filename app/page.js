import Herovideo from "./components/layout/hero/Herovideo";
import IntroSection from "./components/layout/header/IntroSection";

export default function Home() {
  return (
    <>
      <Herovideo videoSrc="https://cdn.pixabay.com/video/2019/08/21/26192-357512350_large.mp4" />
      <IntroSection />
    </>
  );
}
