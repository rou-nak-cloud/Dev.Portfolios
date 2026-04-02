import { useEffect, useState } from "react";

const TimeFormat = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const kolkataTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      })
        .format(new Date())
        .replace(/\s?(am|pm)/, "");

      setTime(kolkataTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="font-cabinet font-semibold text-slate-800 text-xl sm:text-2xl tabular-nums">
      {time}
    </p>
  );
};

export default TimeFormat;
