// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ProcessSection() {
  const principles = [
    {
      title: "Respect for Time",
      desc: "Speed isn't just a metric; it's a courtesy. I build for the impatient, the busy, and the curious, ensuring no one is left waiting at a loading screen.",
    },
    {
      title: "Empathy in Space",
      desc: "An interface should feel at home on any device. Whether on a hand-held screen or a wide monitor, the design should adapt like a natural conversation.",
    },
    {
      title: "Intentional Magic",
      desc: "Motion should never be a distraction. Every fade and slide is a deliberate breath, designed to lead the eye and quiet the digital noise.",
    },
  ];

  return (
    <section className="py-15 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Subtle Horizontal Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-amber-300 to-transparent mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {principles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 }}
              className="flex flex-col gap-3 group hover:text-emerald-500 transition-colors duration-500"
            >
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-orange-400 group-hover:text-emerald-500 transition-colors duration-500">
                0{i + 1} // {item.title}
              </span>
              <p className="font-melodrama text-zinc-900 text-xl leading-snug tracking-widest">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
