import { FC } from "react";
import type { LucideIcon } from "lucide-react"; // ✅ FIXED IMPORT

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureItem: FC<FeatureItemProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-md transition hover:scale-105 hover:shadow-xl">
      <div className="text-primary mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
<p className="text-gray-700 text-sm">{description}</p>

    </div>
  );
};

export default FeatureItem;
