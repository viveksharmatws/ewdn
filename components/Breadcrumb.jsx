import { FaHome } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
const Breadcrumb = ({ Title }) => {
  return (
    <>
      <div className="flex items-center justify-center  flex-col ">
        <h1 className=" text-[30px] sm:text-[40px] font-semibold px-[30px] py-[1px] max-sm:leading-[35px] max-sm:pb-2 text-center">
          {Title}
        </h1>
        <div className="flex items-center justify-center ">
          <span className="pr-3">
            <FaHome />
          </span>
          <span className="pl-3">
            <ChevronRight size="20px" strokeWidth="2.5px" />
          </span>
          <span className="pl-3 text-[18px] text-normal capitalize  ">
            {Title}
          </span>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
