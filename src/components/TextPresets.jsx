// src/components/TextPresets.jsx
import React from "react";

const presets = [
  {
    label: "Text Preset 1",
    className:
      "font-[DM_Sans] italic font-semibold text-[96px] leading-[100%] tracking-[-2px]",
    text: "The quick brown fox jumps over the lazy dog.",
  },
  {
    label: "Text Preset 2",
    className:
      "font-[Bricolage_Grotesque] font-bold text-[52px] leading-[120%] tracking-[0]",
    text: "The quick brown fox jumps over the lazy dog.",
  },
  {
    label: "Text Preset 3",
    className:
      "font-[DM_Sans] font-light text-[32px] leading-[100%] tracking-[0]",
    text: "The quick brown fox jumps over the lazy dog.",
  },
  {
    label: "Text Preset 4",
    className:
      "font-[DM_Sans] font-bold text-[28px] leading-[120%] tracking-[0]",
    text: "The quick brown fox jumps over the lazy dog.",
  },
  {
    label: "Text Preset 5",
    className:
      "font-[DM_Sans] font-semibold text-[20px] leading-[120%] tracking-[0]",
    text: "The quick brown fox jumps over the lazy dog.",
  },
  {
    label: "Text Preset 5 (Medium)",
    className:
      "font-[DM_Sans] font-medium text-[20px] leading-[120%] tracking-[0]",
    text: "The quick brown fox jumps over the lazy dog.",
  },
  {
    label: "Text Preset 6",
    className:
      "font-[DM_Sans] font-medium text-[18px] leading-[120%] tracking-[0]",
    text: "The quick brown fox jumps over the lazy dog.",
  },
  {
    label: "Text Preset 7",
    className:
      "font-[DM_Sans] font-medium text-[16px] leading-[120%] tracking-[0]",
    text: "The quick brown fox jumps over the lazy dog.",
  },
  {
    label: "Text Preset 8",
    className:
      "font-[DM_Sans] font-medium text-[14px] leading-[120%] tracking-[0]",
    text: "The quick brown fox jumps over the lazy dog.",
  },
];

const TextPresets = () => (
  <div className="space-y-8 p-8">
    {presets.map((preset, idx) => (
      <div key={idx}>
        <div className="mb-2 text-gray-500 text-base">{preset.label}</div>
        <div className={preset.className}>{preset.text}</div>
      </div>
    ))}
  </div>
);

export default TextPresets;
