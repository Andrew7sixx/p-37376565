import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="h-[100px] text-white text-[32px] font-bold shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[rgba(0,180,247,0.5)] mb-[76px] px-[42px] py-0 rounded-lg flex items-center">
      {title}
    </div>
  );
};

export default SectionHeader;
