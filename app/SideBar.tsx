"use client";
import { Button } from "@/components/ui/button";
import { useSidebarContext } from "@/context/sidebar-context";
import classNames from "classnames";

const SideBar = () => {
  const { setSidebarOpen, sidebarOpen } = useSidebarContext();
  console.log(sidebarOpen);

  return (
    <div
      className={classNames({
        " transition-[width] bg-white dark:bg-[var(--dark-gray)] flex flex-col relative ":
          true,
        "w-[300px]": sidebarOpen,
        "w-0": !sidebarOpen,
      })}
    >
      <div className=" overflow-hidden">
        <Button onClick={() => setSidebarOpen(false)}>Close</Button>
      </div>
      {!sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(true)}
          className="h-12 w-16 rounded-r-2xl bg-[var(--purple)] absolute right-[-64px] bottom-10 cursor-pointer"
        />
      )}
    </div>
  );
};

export default SideBar;
