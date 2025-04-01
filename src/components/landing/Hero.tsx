import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex justify-center items-center relative px-16 py-[166px] max-md:px-5 max-md:py-[100px] max-sm:px-4 max-sm:py-[60px]">
        <div className="w-[375px] h-0.5 bg-[#E0E0E0] rounded-lg max-sm:w-[100px]" />
        <div className="flex flex-col items-center px-6 py-0">
          <h2 className="text-white text-[40px] font-bold mb-5 max-sm:text-[32px]">
            Nap Label
          </h2>
          <p className="text-[#E0E0E0] text-2xl font-bold max-sm:text-xl">
            高效、智能的数据标注工具
          </p>
        </div>
        <div className="w-[375px] h-0.5 bg-[#E0E0E0] rounded-lg max-sm:w-[100px]" />
      </div>
      <div className="text-center text-white text-2xl font-bold mt-[-120px] px-[196px] py-0 max-md:px-10 max-md:py-0 max-sm:text-xl max-sm:px-4 max-sm:py-0">
        Naplabel是���款全自动标注软件，对任务文件夹的图片进行一键标注，助您快捷方便地完成任务
      </div>
    </section>
  );
};

export default Hero;
