import React from "react";
import { GitHubCalendar } from "react-github-calendar";

export function GithubActivity() {
  return (
    <section className="max-w-4xl mx-auto -mt-10 mb-15 overflow-hidden">
      <div className=" w-full p-6 md:p-16 bg-zinc-50 rounded-3xl border border-zinc-100 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h3 className="font-cabinet text-sm uppercase tracking-[0.2em] text-zinc-900 font-bold">
              GitHub Contribution
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Proof of consistent coding and learning.
            </p>
          </div>
          <div className="h-px flex-1 bg-zinc-200 hidden md:block mx-8" />
        </div>

        <div className="flex justify-center scrollbar-hide overflow-x-auto pb-4">
          <GitHubCalendar
            username="rou-nak-cloud"
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            colorScheme="light"
            theme={{
              light: [
                "#ffffff", // Level 0: No contributions (White)
                "#fef3c7", // Level 1: Amber 100
                "#fcd34d", // Level 2: Amber 300
                "#f59e0b", // Level 3: Amber 500
                "#b45309", // Level 4: Amber 700 (Most contributions)
              ],
            }}
          />
        </div>
      </div>
    </section>
  );
}
