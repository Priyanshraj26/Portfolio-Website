import React, { useEffect, useState } from "react";
import HeatMap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./customHeatmap.css";
import { LeetCodeStats } from "./LeetcodeStats";

// Fallback data shown while API loads or if it fails
const FALLBACK_HEATMAP_DATA = (() => {
  const year = new Date().getFullYear();
  const entries = [
    // June
    [`${year}-06-16`, 2], [`${year}-06-17`, 4], [`${year}-06-18`, 1],
    [`${year}-06-19`, 3], [`${year}-06-21`, 5], [`${year}-06-22`, 2],
    [`${year}-06-23`, 7], [`${year}-06-24`, 3], [`${year}-06-25`, 6],
    [`${year}-06-26`, 1], [`${year}-06-28`, 4], [`${year}-06-29`, 2],
    [`${year}-06-30`, 5],
    // July
    [`${year}-07-01`, 3], [`${year}-07-02`, 8], [`${year}-07-03`, 2],
    [`${year}-07-04`, 5], [`${year}-07-05`, 1], [`${year}-07-06`, 6],
    [`${year}-07-07`, 4], [`${year}-07-08`, 3], [`${year}-07-09`, 7],
    [`${year}-07-10`, 2], [`${year}-07-11`, 1], [`${year}-07-13`, 5],
    [`${year}-07-14`, 3], [`${year}-07-15`, 6], [`${year}-07-16`, 2],
    [`${year}-07-17`, 4], [`${year}-07-19`, 1], [`${year}-07-20`, 3],
    [`${year}-07-22`, 5], [`${year}-07-23`, 2], [`${year}-07-25`, 7],
    [`${year}-07-26`, 4], [`${year}-07-27`, 1],
    // August
    [`${year}-08-02`, 3], [`${year}-08-03`, 6], [`${year}-08-04`, 2],
    [`${year}-08-05`, 4], [`${year}-08-07`, 1], [`${year}-08-08`, 5],
    [`${year}-08-09`, 3], [`${year}-08-10`, 7], [`${year}-08-12`, 2],
    [`${year}-08-14`, 4], [`${year}-08-15`, 1], [`${year}-08-17`, 6],
    [`${year}-08-18`, 3], [`${year}-08-20`, 2], [`${year}-08-22`, 5],
    [`${year}-08-24`, 1], [`${year}-08-25`, 3],
    // September
    [`${year}-09-01`, 2], [`${year}-09-03`, 4], [`${year}-09-05`, 1],
  ];
  return entries.map(([date, count]) => ({ date, count }));
})();

const Heatmap = () => {
  const [leetcodeData, setLeetcodeData] = useState(FALLBACK_HEATMAP_DATA);

  useEffect(() => {
    const username = "priyanshrajgupta";
    fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.submissionCalendar) return;
        const raw = JSON.parse(data.submissionCalendar);
        const parsed = Object.entries(raw).map(([ts, count]) => ({
          date: new Date(Number(ts) * 1000).toISOString().split("T")[0],
          count,
        }));
        const year = new Date().getFullYear();
        const start = `${year}-06-15`;
        const end = `${year}-09-10`;
        const hasVisibleEntries = parsed.some(
          (e) => e.date >= start && e.date <= end
        );
        if (hasVisibleEntries) {
          setLeetcodeData(parsed);
        }
      })
      .catch(() => {
        // Keep fallback data on failure
      });
  }, []);

  const classForValue = (value) => {
    if (!value || value.count === 0) return "heatmap-empty";
    if (value.count < 3) return "heatmap-scale-1";
    if (value.count < 5) return "heatmap-scale-2";
    if (value.count < 7) return "heatmap-scale-3";
    return "heatmap-scale-4";
  };

  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <div id="leetcode" className="py-24 px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
        LeetCode <span className="text-white">Activity</span>
      </h2>
    <div className="container mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="">
        <HeatMap
          startDate={new Date(`${currentYear}-06-15`)}  // July 1st
          endDate={new Date(`${currentYear}-09-10`)}    // September 30th
          values={leetcodeData}
          classForValue={classForValue}
          gutterSize={1}
        />
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-neutral-800 text-white text-xs px-3 py-2 rounded-md shadow-md z-10 w-max max-w-xs text-center">
          There are limited number of requests on this API :)
        </div>
      </div>
      <div className="">
        <LeetCodeStats/>
      </div>
    </div>
    </div>
  );
};

export default Heatmap;