import { Button } from "@/components/ui/button";
import React from "react";

const NavBar = () => {
  return (
    <div className="h-20 bg-card rounded flex items-center justify-between px-5">
      <h1>Platform Launch</h1>
      <Button>+ Add New Task</Button>
    </div>
  );
};

export default NavBar;
