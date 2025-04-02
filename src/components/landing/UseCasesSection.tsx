
import React from "react";
import SectionHeader from "./SectionHeader";

const UseCasesSection: React.FC = () => {
  return (
    <section className="mb-[76px] px-16 py-0 max-md:px-5 max-md:py-0">
      <SectionHeader title="覆盖广泛场景 ，满足各种标注需求" />
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-16">
          {/* First section - Images with text on right */}
          <div className="flex flex-row items-center gap-8 max-lg:flex-col">
            <div className="flex-1 relative h-[400px] max-lg:h-auto max-lg:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/282cee3ac7526971d0ae1644c10c2bdaa8ed4928"
                alt="Use case example 1"
                className="absolute w-[434px] h-[284px] left-0 top-0 max-lg:static max-lg:w-full max-lg:h-auto"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eae830d39fa89db2effab7231dbc1fd41bb1198b"
                alt="Use case example 2"
                className="absolute w-[350px] h-[250px] right-0 bottom-0 max-lg:static max-lg:w-full max-lg:h-auto max-lg:mt-4"
              />
            </div>
            <div className="flex-1 text-black text-2xl font-bold text-left max-lg:text-center max-lg:mt-8">
              "为数据标注团队、学术研究者及追求高效标注工具的个人用户量身打造，提供满足专业需求的智能化解决方案。"
            </div>
          </div>
          
          {/* Second section - Text on left with images on right */}
          <div className="flex flex-row-reverse items-center gap-8 max-lg:flex-col">
            <div className="flex-1 relative h-[400px] max-lg:h-auto max-lg:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ec3591383e366f2abeb004cc2bc1e38304d7875"
                alt="Use case example 3"
                className="absolute w-[241px] h-[340px] left-0 top-0 max-lg:static max-lg:w-full max-lg:h-auto"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/22215ec99b64390cba6b48838434694f60c3e047"
                alt="Use case example 4"
                className="absolute w-[350px] h-[250px] right-0 bottom-0 max-lg:static max-lg:w-full max-lg:h-auto max-lg:mt-4"
              />
            </div>
            <div className="flex-1 text-black text-2xl font-bold text-right max-lg:text-center max-lg:mt-8">
              "高精度算法显著提升标注效率，极简按键操作优化用户体验。"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
