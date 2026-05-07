"use client";

export default function Herovideo({ videoSrc }) {
  return (
    <section className="Hero relative min-h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
}
