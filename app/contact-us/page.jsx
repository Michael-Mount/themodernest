import HeroImage from "../components/layout/hero/HeroImage";
import ContactPageSection from "../components/contact/ContactPageSection";

export const metadata = {
  title: "Contact Us | The Mondernest Glutch View",
  description: "Contact the helpful team for The Mondernest Glutch View.",
};

export default function Page() {
  return (
    <>
      <HeroImage
        image="https://images.unsplash.com/photo-1730829671450-c50c06e2586d?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="arial view of downtown Nashville at sunset"
      />
      <ContactPageSection />
    </>
  );
}
