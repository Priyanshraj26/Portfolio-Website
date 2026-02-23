import React, { useEffect, useState } from "react";
import { Smile, Meh, Hash, BicepsFlexed , ThumbsUp} from "lucide-react";

export const LeetCodeStats = () => {
  const [stats, setStats] = useState({
    totalSolved: 110,
    easySolved: 68,
    mediumSolved: 42,
    hardSolved: 0,
  });

  useEffect(() => {
    const username = "priyanshrajgupta"; // your LeetCode username
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.totalSolved) {
          setStats({
            totalSolved: data.totalSolved || 0,
            easySolved: data.easySolved || 0,
            mediumSolved: data.mediumSolved || 0,
            hardSolved: data.hardSolved || 0,
          });
        }
      })
      .catch(() => {
        // Keep fallback data on failure
      });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 w-full">
      <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Hash className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-lg">Total Solved</h4>
            <p className="text-muted-foreground">{stats.totalSolved}</p>
          </div>
        </div>
      </div>

      <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Smile className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-lg">Easy</h4>
            <p className="text-muted-foreground">{stats.easySolved}</p>
          </div>
        </div>
      </div>

      <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <ThumbsUp className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-lg">Medium</h4>
            <p className="text-muted-foreground">{stats.mediumSolved}</p>
          </div>
        </div>
      </div>

      <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <BicepsFlexed className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-lg">Hard</h4>
            <p className="text-muted-foreground">{stats.hardSolved}</p>
          </div>
        </div>

      </div>
    </div>
  );
};
