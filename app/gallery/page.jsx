import HeroImage from "../components/layout/hero/HeroImage";
import MosaicGallery from "../components/galleries/MosaicGallery";

export const metadata = {
  title: "Gallery | The Modernest Glutch View",
  description: "View the Newly built The Modernest Glutch View",
};

export default function Page() {
  return (
    <>
      <HeroImage
        image="https://images.unsplash.com/photo-1715013550766-6dade517c856?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Neon Lights from signs in downtown Nashville"
      />
      <MosaicGallery />
    </>
  );
}
