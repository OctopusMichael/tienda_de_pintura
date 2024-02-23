import React from "react";

const Loading = () => {
  return (
    <section className="h-[50vh]  flex justify-center items-center">
      <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
    </section>
  );
};

export default Loading;
