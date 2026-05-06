import { useParams, useNavigate } from "react-router-dom";
import { BLOG_DATA } from "../../JsFiles/BlogPosts";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  // specific post object to get the title and its index
  const postIndex = BLOG_DATA.findIndex((post) => post.id === id);
  const post = BLOG_DATA[postIndex];

  return (
    <div className="relative min-h-screen bg-white selection:bg-amber-100">
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

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24">
        <button
          onClick={() => navigate(-1)}
          className="mb-10 flex items-center gap-2 text-amber-500 hover:text-amber-600 transition-colors cursor-pointer font-cabinet font-medium "
        >
          <span className="text-lg">←</span>{" "}
          <span className="hover:underline hover:underline-offset-4">
            Back to all posts
          </span>
        </button>

        <header className="mb-8">
          <h1 className="font-melodrama text-black leading-tight">
            <span className="text-4xl md:text-5xl font-bold block mb-2">
              {post?.title || "Untitled Post"}
            </span>

            {/* ID/Post No */}
            <span className="text-sm font-cabinet font-medium text-zinc-400 uppercase tracking-widest">
              Post No. {String(postIndex + 1).padStart(2, "0")} — {id}
            </span>
          </h1>
        </header>

        <div className="h-0.5 w-full bg-amber-200/50 mb-10" />

        <article className="font-cabinet text-zinc-600 text-lg leading-relaxed">
          <p>
            Content for this specific post will be added soon. As an electronics
            engineer and frontend developer, I'll be sharing technical insights
            and project updates here.
          </p>
        </article>
      </div>
    </div>
  );
}
