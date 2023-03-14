import React from "react";
import GameHeader from "../GameHeader";
import GameWrap1 from "../GameWrap1";
import GameWrap2 from "../GameWrap2";
import GameWrap3 from "../GameWrap3";
import GameWrap4 from "../GameWrap4";
import GameWrap5 from "../GameWrap5";
import GameSlide from "../GameSlide";

const Game = () => {
  return (
    <div>
      <GameHeader />
      <GameWrap1 />
      <GameWrap2 />
      <GameWrap3 />
      <GameWrap4 />
      <GameWrap5 />
      <GameSlide />
    </div>
  );
};

export default Game;
