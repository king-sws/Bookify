"use client";

import React, { useState, useEffect } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Pipette , Check } from 'lucide-react';

interface ColorPickerProps {
  onPickerChange: (color: string) => void;
  value: string;
  className?: string;
  label?: string;
}

// Predefined color palette for professional use
const presetColors = [
  "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", 
  "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50",
  "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", 
  "#ff5722", "#795548", "#607d8b", "#ffffff", "#000000"
];

const ColorPicker: React.FC<ColorPickerProps> = ({
  onPickerChange,
  value = "#000000",
  className = "",
  label,
}) => {
  // Local state to manage the color
  const [color, setColor] = useState<string>(value);
  const [isOpen, setIsOpen] = useState(false);

  // Update local state when the value prop changes
  useEffect(() => {
    setColor(value);
  }, [value]);

  // Handle color change
  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    onPickerChange(newColor);
  };

  // Get contrast color for text
  const getContrastColor = (hexColor: string): string => {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // Calculate relative luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Return white for dark colors, black for light colors
    return luminance > 0.5 ? "#000000" : "#ffffff";
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      
      <div className="flex flex-col gap-2">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex items-center w-full border rounded-md p-2 gap-2 transition hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div 
                className="h-6 w-6 rounded-md border shadow-sm"
                style={{ backgroundColor: color }}
              />
              <span className="flex-1 text-left text-sm">{color.toUpperCase()}</span>
              <Pipette  size={16} className="text-gray-500" />
            </button>
          </PopoverTrigger>
          
          <PopoverContent className="w-64 p-3" side="right">
            <div className="space-y-3">
              <HexColorPicker 
                color={color} 
                onChange={handleColorChange} 
                className="w-full !h-48"
              />
              
              <div className="flex gap-2 items-center">
                <div 
                  className="h-8 w-8 rounded-md border shadow-sm"
                  style={{ backgroundColor: color }}
                />
                <div className="flex items-center flex-1 rounded-md border overflow-hidden">
                  <span className="bg-gray-100 px-2 py-1 text-sm border-r text-gray-500">
                    #
                  </span>
                  <HexColorInput
                    color={color}
                    onChange={handleColorChange}
                    className="w-full px-2 py-1 focus:outline-none"
                    prefixed={false}
                  />
                </div>
              </div>
              
              {/* Color presets */}
              <div className="pt-2 border-t">
                <p className="text-xs text-gray-500 mb-2">Presets</p>
                <div className="grid grid-cols-5 gap-2">
                  {presetColors.map((presetColor) => (
                    <button
                      key={presetColor}
                      type="button"
                      className="h-6 w-6 rounded-md border flex items-center justify-center transition hover:scale-110 focus:outline-none focus:ring-1 focus:ring-primary"
                      style={{ backgroundColor: presetColor }}
                      onClick={() => handleColorChange(presetColor)}
                    >
                      {color.toLowerCase() === presetColor.toLowerCase() && (
                        <Check size={14} color={getContrastColor(presetColor)} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* RGB inputs */}
              <div className="pt-2 border-t">
                <p className="text-xs text-gray-500 mb-2">RGB</p>
                <div className="grid grid-cols-3 gap-2">
                  {['R', 'G', 'B'].map((channel, index) => {
                    // Extract R, G, B values from hex
                    const hex = color.replace('#', '');
                    const channelValue = parseInt(hex.substr(index * 2, 2), 16);
                    
                    // Update only one channel in the hex color
                    const updateChannel = (newValue: number) => {
                      const hexArray = [
                        parseInt(hex.substr(0, 2), 16),
                        parseInt(hex.substr(2, 2), 16),
                        parseInt(hex.substr(4, 2), 16)
                      ];
                      hexArray[index] = Math.max(0, Math.min(255, newValue));
                      
                      // Convert back to hex
                      const newHex = '#' + hexArray.map(x => {
                        const hex = x.toString(16);
                        return hex.length === 1 ? '0' + hex : hex;
                      }).join('');
                      
                      handleColorChange(newHex);
                    };
                    
                    return (
                      <div key={channel} className="flex flex-col">
                        <span className="text-xs text-gray-500 mb-1">{channel}</span>
                        <Input
                          type="number"
                          min={0}
                          max={255}
                          value={channelValue}
                          onChange={(e) => updateChannel(parseInt(e.target.value) || 0)}
                          className="h-8 px-2 py-1"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ColorPicker;