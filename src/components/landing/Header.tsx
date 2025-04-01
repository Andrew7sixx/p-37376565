import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-16 py-[29px] max-md:p-5 max-sm:flex-col max-sm:gap-5 max-sm:items-center">
      <div className="flex items-end gap-[45px] max-sm:mb-5">
        <div className="w-[50px] h-[50px] relative rounded-lg">
          <div className="w-[50px] h-[50px] bg-[rgba(0,180,247,0.5)] rounded-lg" />
          <div className="absolute w-full h-[30px] text-white text-xl font-bold top-0">
            NAP
          </div>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 right-3 w-5 h-5 opacity-80"
            >
              <g opacity="0.8">
                <path
                  d="M12.25 5.24994C12.0973 5.40572 12.0118 5.61515 12.0118 5.83328C12.0118 6.0514 12.0973 6.26083 12.25 6.41661L13.5833 7.74994C13.7391 7.90263 13.9485 7.98816 14.1667 7.98816C14.3848 7.98816 14.5942 7.90263 14.75 7.74994L17.8917 4.60828C18.3107 5.53427 18.4376 6.56597 18.2554 7.5659C18.0732 8.56582 17.5906 9.48648 16.8719 10.2052C16.1532 10.9239 15.2325 11.4065 14.2326 11.5887C13.2327 11.7708 12.201 11.644 11.275 11.2249L5.51667 16.9833C5.18515 17.3148 4.73551 17.501 4.26667 17.501C3.79783 17.501 3.34819 17.3148 3.01667 16.9833C2.68515 16.6518 2.4989 16.2021 2.4989 15.7333C2.4989 15.2644 2.68515 14.8148 3.01667 14.4833L8.775 8.72494C8.35597 7.79895 8.2291 6.76725 8.41129 5.76732C8.59348 4.7674 9.07607 3.84674 9.79477 3.12804C10.5135 2.40935 11.4341 1.92675 12.434 1.74456C13.434 1.56237 14.4657 1.68925 15.3917 2.10828L12.25 5.24994Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90479e8e74542313d60aff32ed5f9d0734fabffa"
            alt="Bot icon"
            className="absolute bottom-[-3px] left-[-3px] w-10 h-10 opacity-80"
          />
        </div>
        <h1 className="text-white text-[40px] font-bold">NapTech</h1>
      </div>
      <div className="flex items-center gap-2.5 max-sm:mt-5">
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[50px] h-[50px]"
          >
            <path
              d="M43.75 23.9584C43.7572 26.7081 43.1147 29.4207 41.875 31.8751C40.4051 34.8162 38.1453 37.29 35.3489 39.0194C32.5524 40.7488 29.3297 41.6655 26.0417 41.6667C23.2919 41.6739 20.5794 41.0315 18.125 39.7917L6.25 43.7501L10.2083 31.8751C8.96861 29.4207 8.32616 26.7081 8.33333 23.9584C8.33461 20.6704 9.25127 17.4477 10.9807 14.6512C12.7101 11.8547 15.1839 9.59499 18.125 8.12506C20.5794 6.88533 23.2919 6.24289 26.0417 6.25006H27.0833C31.4257 6.48963 35.5272 8.32248 38.6024 11.3977C41.6776 14.4729 43.5104 18.5743 43.75 22.9167V23.9584Z"
              stroke="#9EE5FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text-[#9EE5FF] text-2xl font-bold">联系我们</span>
      </div>
    </header>
  );
};

export default Header;
