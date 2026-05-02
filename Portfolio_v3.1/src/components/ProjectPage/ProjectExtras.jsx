import { GitHubCalendar } from "react-github-calendar";

// Use inside ProjectRow render
export function ProjectExtras({ project }) {
  return (
    <div className="-mt-32 pt-5 border-t border-orange-300/30 space-y-1">
      {/* 1 & 5: Challenge, Learned, and Stats */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h4 className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
            The Challenge
          </h4>
          <p className="text-sm text-zinc-600 leading-relaxed">
            {project.challenge}
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-[10px] uppercase text-right tracking-widest text-zinc-400 font-bold">
            What I Learned
          </h4>
          <p className="text-sm text-right text-zinc-600 leading-relaxed">
            {project.learned}
          </p>
        </div>
      </div>

      {/* <div className="flex items-center justify-between pt-4">
    //    tags
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              title={`Skill used in this project: ${tag}`}
              className="px-3 py-1 bg-zinc-100 text-zinc-500 rounded text-[11px] cursor-help transition-colors hover:bg-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>
    // performance score
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-cabinet font-bold text-zinc-900">
            Score: {project.performance}%
          </span>
        </div>
      </div> */}
    </div>
  );
}

// Global Activity Component (Put this at the very bottom of DetailedProjects)
// export function GlobalActivity() {
//   return (
//     <div className="mt-32 w-full p-6 md:p-10 bg-zinc-50 rounded-3xl border border-zinc-100 overflow-hidden">
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
//         <div>
//           <h3 className="font-cabinet text-sm uppercase tracking-[0.2em] text-zinc-900 font-bold">
//             GitHub Contribution
//           </h3>
//           <p className="text-xs text-zinc-400 mt-1">
//             Proof of consistent coding and learning.
//           </p>
//         </div>
//         <div className="h-px flex-1 bg-zinc-200 hidden md:block mx-8" />
//       </div>

//       <div className="flex justify-center scrollbar-hide overflow-x-auto">
//         <GitHubCalendar
//           username="rou-nak-cloud"
//           blockSize={12}
//           blockMargin={4}
//           fontSize={12}
//           // Updated Theme logic
//           theme={{
//             light: [
//               "#ffffff", // Level 0: No contributions (White)
//               "#fef3c7", // Level 1: Amber 100
//               "#fcd34d", // Level 2: Amber 300
//               "#f59e0b", // Level 3: Amber 500
//               "#b45309", // Level 4: Amber 700 (Most contributions)
//             ],
//           }}
//         />
//       </div>
//     </div>
//   );
// }
