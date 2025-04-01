import React from "react";
import SectionHeader from "./SectionHeader";

const UseCasesSection: React.FC = () => {
  return (
    <section className="mb-[76px] px-16 py-0 max-md:px-5 max-md:py-0">
      <SectionHeader title="覆盖广泛场景 ，满足各种标注需求" />
      <div className="flex flex-col items-center">
        <div className="relative w-full h-[685px] max-sm:h-auto max-sm:flex max-sm:flex-col max-sm:gap-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/282cee3ac7526971d0ae1644c10c2bdaa8ed4928"
            alt="Use case example 1"
            className="absolute w-[434px] h-[284px] left-0 top-0 max-sm:static max-sm:w-full max-sm:h-auto"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eae830d39fa89db2effab7231dbc1fd41bb1198b"
            alt="Use case example 2"
            className="absolute w-[612px] h-[413px] left-[125px] top-[165px] max-sm:static max-sm:w-full max-sm:h-auto"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ec3591383e366f2abeb004cc2bc1e38304d7875"
            alt="Use case example 3"
            className="absolute w-[241px] h-[340px] left-[35px] top-[169px] max-sm:static max-sm:w-full max-sm:h-auto"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22215ec99b64390cba6b48838434694f60c3e047"
            alt="Use case example 4"
            className="absolute w-[466px] h-[252px] left-0 top-[433px] max-sm:static max-sm:w-full max-sm:h-auto"
          />
        </div>
        <div className="text-black text-2xl font-bold text-center mt-10">
          "为数据标注团队、学术研究者及追求高效标注工具的个人用户量身打造，提供满足专业需求的智能化解决方案。"
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
