import React from "react";
import { Button } from "./ui/button";

const Board = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 mt-[30%]">
        <h2>This board is empty. Create a new column to get started.</h2>
        <Button>+ Add New Column</Button>
      </div>
    </div>
  );
};

export default Board;
