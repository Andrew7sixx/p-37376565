
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="relative h-[557px] px-16 py-0 max-md:px-5 max-md:py-0 max-sm:h-auto max-sm:pb-10 flex flex-col items-center">
      <div className="text-black text-2xl font-bold text-center w-full max-w-[653px] mx-auto mb-10 max-sm:mb-5 max-sm:mt-10">
        <span>"更多需求请联系我们，获取个性化定制服务，</span>
        <br />
        <span>帮助您实现目标。"</span>
      </div>
      <div className="relative w-full max-w-[1200px] mx-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/48bb01affa3f51a7e8938c6e5f5394a52e97d0a0"
          alt="Contact illustration 1"
          className="absolute w-[773px] h-[343px] right-0 top-0 max-sm:static max-sm:w-full max-sm:h-auto max-sm:mt-5"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9fcf9f9cec9787236f7707ff9a9457d9199be15"
          alt="Contact illustration 2"
          className="absolute w-[543px] h-[356px] right-0 bottom-0 max-sm:static max-sm:w-full max-sm:h-auto max-sm:mt-5"
        />
      </div>
    </section>
  );
};

export default ContactSection;
