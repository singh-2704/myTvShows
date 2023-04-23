import React from "react";

function CastCard({avatarLink, showName}){
  return (
    <div className="p-1 m-1">
      <img className="w-28 rounded-sm" src={avatarLink} alt="" />
      <p className="text-gray-500 font-semibold">{showName}</p>
    </div>
  );
};

export default CastCard;