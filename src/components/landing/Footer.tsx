import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-[#454545] p-16 max-md:px-5 max-md:py-10">
      <div className="flex justify-center pt-[84px] pb-[9px] px-0">
        <div className="w-[1312px] h-0.5 bg-[#E0E0E0] rounded-lg" />
      </div>
      <div className="flex flex-col items-center gap-10 pt-10 max-sm:gap-5">
        <div className="flex items-end gap-10 max-sm:flex-col max-sm:items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9304e7ff6a8724e3ea80c3173b639fa6b58ba29e"
            alt="NapTech logo"
            className="w-[100px] h-[100px]"
          />
          <div className="text-[64px] font-bold max-sm:text-[40px]">
            NapTech
          </div>
        </div>
        <div className="flex flex-col items-start gap-2.5">
          <div className="text-[32px] font-bold">联系我们</div>
          <a
            href="mailto:naptech@gmail.com"
            className="text-[32px] font-bold hover:text-blue-500 transition-colors"
          >
            naptech@gmail.com
          </a>
          <div className="text-[#828282] text-2xl font-bold">
            <span>&gt; 私有化AI定制部署方案</span>
            <br />
            <span>&gt; 定制个人专属AI模型</span>
            <br />
            <span>&gt; 产品改进建议</span>
          </div>
        </div>
        <div className="flex items-center gap-2.5 text-[#828282] text-2xl font-bold">
          <a href="#" className="hover:text-blue-500 transition-colors">
            用户协议
          </a>
          <div className="px-2.5 py-0">|</div>
          <a href="#" className="hover:text-blue-500 transition-colors">
            隐私协议
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
