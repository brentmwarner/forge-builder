import React, { useState } from "react";
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { HexColorPicker } from "react-colorful";

interface ColorInputProps {
  color: string;
  opacity: string;
  onColorChange?: (color: string) => void;
  onOpacityChange?: (opacity: string) => void;
}

export const ColorInput = ({ color, opacity, onColorChange, onOpacityChange }: ColorInputProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-8 gap-2">
      <div className="flex-[3]">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <div className="relative">
              <Input
                type="text"
                value={color}
                onChange={(e) => onColorChange?.(e.target.value)}
                className="h-8 text-sm bg-zinc-100 border-0 rounded-r-none pl-8"
              />
              <div 
                className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded"
                style={{ backgroundColor: color }}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-2">
            <HexColorPicker
              color={color}
              onChange={(newColor) => onColorChange?.(newColor)}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex-1">
        <Input
          type="text"
          value={opacity}
          onChange={(e) => onOpacityChange?.(e.target.value)}
          className="h-8 text-sm bg-zinc-100 border-0 rounded-l-none"
        />
      </div>
    </div>
  );
};