import React from "react";
import ImageCard from "@/components/image-card";

export default function FeatureImage({ content }) {
  const image = content.map((c) => (
    <ImageCard key={c._id} image={c} title={c.title} />
  ));

  const handleContext = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div onContextMenu={handleContext} className="flex m-12">
      <div
        draggable={false}
        className="selectDisable grid lg:grid-cols-2 gap-10"
      >
        {image}
      </div>
    </div>
  );
}
