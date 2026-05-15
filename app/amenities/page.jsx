import HeroImage from "../components/layout/hero/HeroImage";
import AmenitiesPage from "../components/amenities/AmenitiesPage";

export const metadata = {
  title: "Amenities | The Modernest Glutch View",
  description:
    "All the high end and luxury amenities offered at The Modernest gulch View",
};

export default function Amenities() {
  return (
    <>
      <HeroImage
        image="https://images.unsplash.com/photo-1728486145245-d4cb0c9c3470?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Gym at the The mondernest glutch view"
      />
      <AmenitiesPage />
    </>
  );
}
