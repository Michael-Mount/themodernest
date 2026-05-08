import HeroImage from "../components/layout/hero/HeroImage";
import ExploreNashvillePage from "../components/explore/ExploreNashvillePage";

export const metadata = {
  title: "Explore | The Modernest Glutch View",
  description:
    "Explore the historic downtown Nashville, home to The Modernest Glutch View",
};

export default function Page() {
  return (
    <>
      <HeroImage
        image="https://images.unsplash.com/photo-1715013550766-6dade517c856?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Neon Lights from signs in downtown Nashville"
      />
      <ExploreNashvillePage />
    </>
  );
}
