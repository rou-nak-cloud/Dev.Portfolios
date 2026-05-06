import { useParams, useNavigate } from "react-router-dom";
import { BLOG_DATA } from "../../JsFiles/BlogPosts";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const postIndex = BLOG_DATA.findIndex((p) => p.id === id);
  const post = BLOG_DATA[postIndex];

  // Helper function for inline styles (Bold, Underline, Strikethrough)
  const formatText = (text) => {
    if (!text) return "";
    return text.split(/(\*\*.*?\*\*|_.*?_|~~.*?~~)/g).map((part, i) => {
      if (part.startsWith("**"))
        return (
          <strong key={i} className="font-bold text-black">
            {part.slice(2, -2)}
          </strong>
        );
      if (part.startsWith("_"))
        return (
          <u key={i} className="decoration-amber-400 underline-offset-4">
            {part.slice(1, -1)}
          </u>
        );
      if (part.startsWith("~~"))
        return (
          <s key={i} className="text-zinc-400">
            {part.slice(2, -2)}
          </s>
        );
      return part;
    });
  };

  if (!post) return null;

  return (
    <div className="relative min-h-screen bg-white selection:bg-amber-100 font-cabinet">
      {/* Background Dots */}
      <div
        className="absolute inset-0 z-0 h-52 w-full opacity-60 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#fbbf24 2px, transparent 1px)`,
          backgroundSize: "6px 6px",
          maskImage: "linear-gradient(to bottom, black 10%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 10%, transparent 90%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-24">
        <button
          onClick={() => navigate("/blogs")}
          className="mb-10 text-zinc-500 hover:text-amber-500 transition-colors text-xs font-medium uppercase tracking-widest"
        >
          ‹ Back to Blog
        </button>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-melodrama text-slate-900 leading-13 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-zinc-400">
            <span>{post.date}</span>
            <span>•</span>
            <span className="font-mono">
              No. {String(postIndex + 1).padStart(2, "0")}
            </span>
          </div>
        </header>

        <div className="h-1px w-full bg-zinc-100 mb-6" />

        <article className="text-zinc-700 text-[17px] leading-relaxed space-y-10">
          {/* Intro Section */}
          {post.content?.intro && (
            <p className="text-lg">{formatText(post.content.intro)}</p>
          )}

          {/* Dynamic Sections */}
          {post.content?.sections?.map((section, idx) => (
            <section key={idx} className="space-y-5">
              {section.heading && (
                <h3 className="text-xl font-bold text-slate-900 font-cabinet">
                  {section.heading}
                </h3>
              )}

              {/* List Rendering (Number or Bullet) */}
              {section.type === "list" || section.type === "number" ? (
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-zinc-400 font-mono text-lg leading-tight mt-1 shrink-0">
                        {section.type === "number"
                          ? `${String(i + 1).padStart(2, "0")}.`
                          : "•"}
                      </span>
                      <div
                        className={
                          section.style === "strikethrough" ? "opacity-60" : ""
                        }
                      >
                        {formatText(item)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Paragraph Rendering */
                <p>{formatText(section.body)}</p>
              )}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
