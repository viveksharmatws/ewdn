import Image from "next/image"; // Import the image component properly
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Link from "@/node_modules/next/link";

const HorizontalProductCard = ({ imageUrl }) => {
  return (
    <div className="w-full flex items-center py-[5px] pb-[10px] ">
      <div>
        <Image
          src={"/images/redsuitgirl.jpg"}
          alt=""
          width={90}
          height={110}
          className="min-h-[110px] min-w-[90px]"
        />
      </div>
      <div className="pl-2">
        <span className="flex ">
          <div>
            <StarIcon className="fill-[#f2b600] w-[14px] h-[15px]" />
            <StarIcon className="fill-[#f2b600] w-[14px] h-[15px]" />
            <StarIcon className="fill-[#f2b600] w-[14px] h-[15px]" />
            <StarIcon className="fill-[#f2b600] w-[14px] h-[15px]" />
            <StarHalfIcon className=" w-[14px] h-[15px]" />
          </div>
        </span>
        <Link
          className="text-lg font-normal line-clamp-1"
          href="/productdetailblog"
        >
          Lorem ipsum dolor sit
        </Link>
        <div className="flex gap-2">
          <span className="text-[#888888]  line-through font-normal text-[18px] ">
            $54.00
          </span>
          <h4 className="text-[#FF0000] font-medium text-[18px] ">$54.00</h4>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProductCard;
