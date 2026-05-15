import Herovideo from "./components/layout/hero/Herovideo";
import IntroSection from "./components/layout/header/IntroSection";
import TextTwoImageSection from "./components/layout/text/TextTwoImageSection";
import AmenitiesCarousel from "./components/carousel/AmenitiesCarousel";
import SimpleGallery from "./components/galleries/SimpleGallery";
import ManagementCompanyCard from "./components/layout/cards/managementCompanyCard";

export default function Home() {
  return (
    <>
      <Herovideo videoSrc="https://cdn.pixabay.com/video/2019/08/21/26192-357512350_large.mp4" />
      <IntroSection />
      <TextTwoImageSection
        eyebrow="Modern Nashville Living"
        title="Two distinct residences. One elevated experience."
        description="The Modernest Collection brings together apartment-style comfort, curated design, and a polished sense."
        buttonLabel="View Rooms"
        buttonHref="/residences"
        imageOne="https://images.unsplash.com/photo-1737898415581-7dea57a1905b?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageTwo="https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageOneAlt="Modern luxury apartment living room in Nashville"
        imageTwoAlt="Elegant bedroom in a luxury Nashville apartment"
      />
      <AmenitiesCarousel />
      <SimpleGallery />
      <ManagementCompanyCard />
    </>
  );
}
