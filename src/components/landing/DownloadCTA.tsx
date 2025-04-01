import React from "react";

const DownloadCTA: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-0 py-[72px] max-md:px-5 max-md:py-10">
      <button
        className="flex items-center gap-5 shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#454545] p-[43px] rounded-lg max-sm:p-5 hover:bg-[#3a3a3a] transition-colors"
        aria-label="Download software"
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[48px] h-[48px]"
        >
          <path
            d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30M14 20L24 30M24 30L34 20M24 30V6"
            stroke="#F5F5F5"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-white text-[40px] font-bold max-sm:text-[28px]">
          官网下载
        </span>
      </button>
      <div className="text-black text-2xl font-bold text-center mt-3.5">
        <span>下载即可开始进行创建您自己的数据集。</span>
        <br />
        <span>（目前仅支持windows系统）</span>
      </div>
    </section>
  );
};

export default DownloadCTA;
