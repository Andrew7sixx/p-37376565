import React from "react";
import SectionHeader from "./SectionHeader";

interface FeatureSectionProps {
  title: string;
  features: React.ReactNode[];
  imageUrl: string;
  imagePosition: "left" | "right";
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  features,
  imageUrl,
  imagePosition,
}) => {
  const contentSection = (
    <div className="text-black text-2xl font-bold text-center flex-1">
      {features.map((feature, index) => (
        <React.Fragment key={index}>
          {feature}
          {index < features.length - 1 && (
            <>
              <br />
              <br />
              <br />
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const imageSection = (
    <img
      src={imageUrl}
      alt="Feature illustration"
      className="w-[448px] h-[595px] object-cover max-sm:w-full max-sm:h-auto"
    />
  );

  return (
    <section className="px-16 py-0 max-md:px-5 max-md:py-0">
      {title && <SectionHeader title={title} />}
      <div className="flex items-center gap-10 mb-[76px] max-sm:flex-col max-sm:text-center">
        {imagePosition === "left" ? (
          <>
            {imageSection}
            {contentSection}
          </>
        ) : (
          <>
            {contentSection}
            {imageSection}
          </>
        )}
      </div>
    </section>
  );
};

export default FeatureSection;
