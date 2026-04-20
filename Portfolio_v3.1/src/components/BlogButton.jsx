import { FaBlog, FaFileDownload } from "react-icons/fa";
import { Link } from "react-router";

export default function BlogButton() {
  return (
    <Link
      to="/blogs"
      data-magnetic
      className="relative inline-flex items-center gap-2 px-4 py-1 text-sm md:text-md font-cabinet font-medium text-amber-950 rounded-full bg-amber-100/80 backdrop-blur-md hover:bg-amber-100 transition-all duration-300 hover:shadow-md hover:shadow-amber-300/30 active:scale-95"
    >
      <FaBlog className="text-md" />
      <span>Blogs</span>
    </Link>
  );
}
