
import React from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import DownloadCTA from "@/components/landing/DownloadCTA";
import FeatureSection from "@/components/landing/FeatureSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import SectionHeader from "@/components/landing/SectionHeader";

const Index: React.FC = () => {
  // Feature content for the first feature section
  const featureContent1 = [
    <>
      "操作简单直观，界面设计新手友好，内置详细操作教程，
      <br />
      帮助用户快速上手。"
    </>,
    <>"支持批量化一键操作，全面解放双手，让工作更高效。"</>,
  ];

  // Feature content for the second feature section
  const featureContent2 = [
    <>
      "高精度算法显著提升标注效率，
      <br />
      极简按键操作优化用户体验。"
    </>,
    <>
      "为数据标注团队、学术研究者及追求高效标注工具的
      <br />
      个人用户量身打造，提供满足专业需求的智能化解决方案。"
    </>,
  ];

  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-[#454545] to-white">
        <Header />
        <Hero />
        <DownloadCTA />
      </div>

      <section className="px-16 py-0 max-md:px-5 max-md:py-0 bg-white">
        <SectionHeader title="AI批量自动标注，您数据标注的全新选择" />

        <FeatureSection
          title=""
          features={featureContent1}
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/759ec153c90261ad0c4d636a08a315cfba4b252d"
          imagePosition="left"
        />

        <FeatureSection
          title=""
          features={featureContent2}
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b4a79e63ac33bf027effa8010819e2007bb4f25d"
          imagePosition="right"
        />
      </section>

      <UseCasesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
