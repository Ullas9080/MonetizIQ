import React from "react";
import { useGetVideosQuery } from "../../features/apiSlice";

const VideoCharts = () => {
  const { data: videoStats, isLoading, error } = useGetVideosQuery();

  if (isLoading) return <p>Loading video stats...</p>;
  if (error) return <p>Error loading video stats</p>;

  console.log(videoStats);

  return (
 <>
 
 </>
  );
};

export default VideoCharts;