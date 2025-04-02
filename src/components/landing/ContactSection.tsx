
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 px-16 max-md:px-5 max-md:py-10">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-16">
        {/* First row - Image on left, text on right */}
        <div className="flex flex-row items-center gap-8 max-lg:flex-col">
          <div className="flex-1 relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/48bb01affa3f51a7e8938c6e5f5394a52e97d0a0"
              alt="Contact illustration 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1 text-black text-2xl font-bold text-left max-lg:text-center max-lg:mt-8">
            "更多需求请联系我们，获取个性化定制服务，帮助您实现目标。"
          </div>
        </div>
        
        {/* Second row - Text on left, image on right */}
        <div className="flex flex-row-reverse items-center gap-8 max-lg:flex-col">
          <div className="flex-1 relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9fcf9f9cec9787236f7707ff9a9457d9199be15"
              alt="Contact illustration 2"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1 text-black text-2xl font-bold text-right max-lg:text-center max-lg:mt-8">
            "我们致力于通过高效的数据标注工具，帮助您更快地实现业务目标。"
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
