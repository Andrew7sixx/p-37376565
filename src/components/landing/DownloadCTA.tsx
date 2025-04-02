
import React from "react";
import { Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const DownloadCTA: React.FC = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // 创建一个模拟的下载链接
    const link = document.createElement("a");
    // 这里可以替换为实际的软件下载地址
    link.href = "https://example.com/naplabel-software.exe";
    link.download = "NapLabel-Setup.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 显示成功提示
    toast({
      title: "下载已开始",
      description: "软件将很快开始下载，请检查您的下载文件夹",
    });
  };

  return (
    <section className="flex flex-col items-center px-0 py-[72px] max-md:px-5 max-md:py-10">
      <button
        className="flex items-center gap-5 shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#454545] p-[43px] rounded-lg max-sm:p-5 hover:bg-[#3a3a3a] transition-colors"
        aria-label="Download software"
        onClick={handleDownload}
      >
        <Download size={48} color="#F5F5F5" strokeWidth={4} />
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
