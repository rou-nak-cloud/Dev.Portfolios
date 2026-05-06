import BlogPages from "./BlogPages";

export default function BlogSection() {
  return (
    <div className="relative w-full ">
      <div
        className="absolute inset-0 z-0 h-52 w-full dots-animated pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#fbbf24 2px, transparent 1px)`,
          backgroundSize: "6px 6px",
          maskImage: "linear-gradient(to bottom, black 10%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 10%, transparent 90%)",
          opacity: 0.6,
        }}
      />
      <div className="container relative z-10 md:mx-auto max-w-3xl px-4 sm:px-6">
        <BlogPages />
      </div>
    </div>
  );
}
