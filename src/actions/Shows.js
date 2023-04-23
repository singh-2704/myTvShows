// const showLoadedAction = (shows)=>({
//     type: "SHOWS_LOADED",
//     payload: shows,
// });

import React from "react";

export default function showLoadedAction(shows) {
  return {
    type: "SHOWS_LOADED",
    payload: shows,
  };
}
