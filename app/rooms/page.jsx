import HeroImage from "../components/layout/hero/HeroImage";
import IntroSection from "../components/layout/header/IntroSection";
import RoomsSuitesGrid from "../components/rooms/RoomSuitesGrid";

export const metadata = {
  title: "Rooms | The Mondernest Gluch View",
  description: "The room types at The Mondernest Gluch View",
};

export default function rooms() {
  return (
    <section>
      <HeroImage
        image="https://images.unsplash.com/photo-1654064550568-fb282026c165?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="interior of the king guestroom"
      />
      <IntroSection />
      <RoomsSuitesGrid />
    </section>
  );
}
