import { siteConfig } from "../config/siteConfig";

export default function AnnouncementBar() {
  return (
    <div className="bg-primary text-charcoal py-2 px-4 text-center text-sm font-medium shadow-sm z-40">
      {siteConfig.announcement}
    </div>
  );
}
