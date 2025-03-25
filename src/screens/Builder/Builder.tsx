import { FigmaIcon, SwatchBookIcon } from "lucide-react";
import React from "react";
import { Avatar } from "../../components/ui/avatar";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { SidebarSection } from "./sections/SidebarSection/SidebarSection";

export const Builder = (): JSX.Element => {
  return (
    <div className="bg-neutral-50 w-full h-screen flex flex-col">
        {/* Header */}
        <HeaderSection />
        
        {/* Main content area with three panels */}
        <div className="flex flex-1 gap-4 pr-4 overflow-hidden">
          {/* Left navigation bar */}
          <div className="flex flex-col w-12 items-center justify-between py-2 bg-neutral-50 mr-[-8px]">
            <div className="flex flex-col items-start gap-2">
              <FigmaIcon className="w-5 h-5" />
              <SwatchBookIcon className="w-5 h-5" />
            </div>

            <div className="flex flex-col items-center gap-2 p-2 w-full">
              <Avatar className="w-6 h-6">
                <img src="/avatar.svg" alt="User avatar" />
              </Avatar>
            </div>
          </div>

          {/* Left Panel - Layers, Assets, AI */}
          <div className="w-64 bg-white rounded-2xl">
            <SidebarSection />
          </div>

          {/* Middle Panel - Canvas/Preview */}
          <div className="flex-1 bg-white rounded-2xl p-8">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400">Canvas Preview Area</span>
            </div>
          </div>

          {/* Right Panel - Style Controls */}
          <div className="w-80 bg-white rounded-2xl overflow-y-auto">
            <MainContentSection />
          </div>
        </div>
    </div>
  );
};