export default function Hero() {
  return (
    <section className="relative flex h-[90vh] w-full items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-fallback.jpg"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center text-center text-white px-6">
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
          Évadez-vous
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/80">
          Des vacances comme vous les imaginez
        </p>
      </div>
    </section>
  );
}
