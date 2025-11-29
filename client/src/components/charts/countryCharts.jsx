import React from "react";
import { useGetChannelQuery } from "../../features/apiSlice";
import Loader from "../Loader";
import Error from "../Error";


import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FECA57", "#DDA0DD", "#95A5A6"];

const CountryCharts = () => {
  const { data: channel, isLoading, error } = useGetChannelQuery();

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  const rawData = channel?.data?.rows || [];

  const data = rawData.map((row) => ({
    country: row[0],
    views: Number(row[1]),
    likes: Number(row[2]),
    watchTime: Number(row[3]),
  }));

  // Helper: Top 5 + Others
  const getTop = (key) => {
    const sorted = [...data].sort((a, b) => b[key] - a[key]);
    const top5 = sorted.slice(0, 5);
    const others = sorted.slice(5).reduce((sum, x) => sum + x[key], 0);
    return { top5, others };
  };

  const { top5: topViews, others: othersViews } = getTop("views");
  const { top5: topWatch, others: othersWatch } = getTop("watchTime");
  const { top5: topLikes } = getTop("likes");

  const pieData = topViews.map((d) => ({
    name: d.country,
    value: d.views,
  }));
  if (othersViews > 0) pieData.push({ name: "Others", value: othersViews });


  const watchBarData = topWatch.map((d) => ({
    name: d.country,
    minutes: Math.round(d.watchTime),
  }));
  if (othersWatch > 0) watchBarData.push({ name: "Others", minutes: Math.round(othersWatch) });

  const likesBarData = topLikes.map((d) => ({
    name: d.country,
    likes: d.likes,
  }));

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          YouTube Analytics Dashboard
        </h1>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-6 text-center">Top Countries by Views</h2>
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value.toLocaleString()}`}
                  outerRadius={110}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => v.toLocaleString()} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Watch Time - Bar Chart */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-6 text-center">Watch Time (minutes)</h2>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={watchBarData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff30" />
                <XAxis dataKey="name" tick={{ fill: "#fff" }} />
                <YAxis tick={{ fill: "#fff" }} />
                <Tooltip formatter={(v) => `${v.toLocaleString()} min`} />
                <Bar dataKey="minutes" fill="#8b5cf6" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Likes - Bar Chart */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-6 text-center">Top Countries by Likes</h2>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={likesBarData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff30" />
                <XAxis dataKey="name" tick={{ fill: "#fff" }} />
                <YAxis tick={{ fill: "#fff" }} />
                <Tooltip formatter={(v) => v.toLocaleString()} />
                <Bar dataKey="likes" fill="#ff6b6b" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CountryCharts;