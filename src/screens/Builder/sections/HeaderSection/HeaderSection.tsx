import { HomeIcon, MonitorSmartphoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  const navigationButtons = [
    { label: "Settings", variant: "ghost" as const },
    { label: "Export code", variant: "ghost" as const },
    { label: "Preview", variant: "ghost" as const },
    {
      label: "Publish",
      variant: "default" as const,
      className: "bg-[#ff5f45] hover:bg-[#ff5f45]/90 text-slate-50",
    },
  ];

  return (
    <header className="flex w-full h-12 items-center justify-between px-4 py-2 bg-neutral-50">
      {/* Logo and HomeIcon section */}
      <div className="flex items-center gap-4">
        <HomeIcon className="w-4 h-4 text-gray-700" />
        <img className="w-12 h-[19px]" alt="Forge Logo" src="/vector.svg" />
      </div>

      {/* Device selector */}
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 h-8 px-2 py-1.5 rounded-md"
        >
          <MonitorSmartphoneIcon className="w-4 h-4" />
          <span className="font-text-sm-leading-6-medium text-slate-900">
            Desktop
          </span>
        </Button>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-4">
        {navigationButtons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant}
            size="sm"
            className={`h-8 px-2 py-1.5 font-text-sm-leading-6-medium ${button.className || "bg-white text-zinc-900"}`}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </header>
  );
};