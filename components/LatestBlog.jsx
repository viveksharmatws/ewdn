import Image from "next/image";
import Link from "next/link";

// import { FaLink } from "./FaLink";
import { BsSearch } from "react-icons/bs";
// import { FaLink } from "./FaLink";
import { FaLink } from "react-icons/fa";

const LatestBlogs = () => {
  return (
    <section className=" mx-auto max-w-[1430px] md:pt-[30px] pb-[90px] px-[15px]">
      <Link
        href="/bloggrid  "
        className=" mx-auto  text-[40px] sm:text-[45px] font-normal leading-[47px] text-black "
      >
        Our Latest Blog
      </Link>

      <div className="grid grid-cols-1 pt-[30px] gap-[30px]  sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 ">
        <div className=" flex flex-col  pb-[1px] pt-[15px] ">
          <div className=" flex flex-col  pb-[1px] group ">
            <div className="w-full">
              <div className="group relative overflow-hidden ">
                <div className="relative">
                  <Image
                    src="/images/coats.jpg"
                    alt="Image of person"
                    width={340}
                    height={300}
                    className="transition duration-1000  group-hover:scale-125 group-hover:opacity-90 w-full "
                  />
                </div>
                <div className=" absolute  inset-[40%] z-10 flex gap-2 opacity-0 duration-150 transition ease-out group-hover:opacity-100">
                  <Link
                    href="#"
                    className=" duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border  cursor-pointer  hover:bg-[#ff0000]  hover:border-none "
                  >
                    <BsSearch color="#ffffff" className="" size={15} />
                  </Link>
                  <Link
                    href="#"
                    className="  duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border p-3 cursor-pointer  hover:bg-[#ff0000]  hover:border-none"
                  >
                    <FaLink color="white" size={15} stroke={0.1} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full ">
              <h4 className="text-[15px] font-medium leading-[50px] text-[#FF0000] w-full">
                <p href="">September 3,2023</p>
              </h4>
              <h3 className="text-[22px] font-normal leading-[23px]  pb-2">
                <Link href="/productdetailblog" className="">
                  Turpis at eleifend Aenean porta
                </Link>
              </h3>

              <p className="mb-[11px] text-[18px] font-normal leading-[24px] text-[#666666]">
                Turpis at eleifend ps mi elit Aenean porta ac sed faucibus. Nunc
                urna Morbi...
              </p>
              <div className="pb-2">
                <Link
                  href="/productdetailblog"
                  className="text-[17px] font-medium capitalize tracking-[0.5px] underline"
                >
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col  pb-[1px] pt-[15px] ">
          <div className=" flex flex-col  pb-[1px] group ">
            <div className="w-full">
              <div className="group relative overflow-hidden ">
                <div className="relative">
                  <Image
                    src="/images/capri.jpg"
                    alt="Image of person"
                    width={340}
                    height={300}
                    className="transition duration-1000  group-hover:scale-125 group-hover:opacity-90 w-full "
                  />
                </div>
                <div className=" absolute  inset-[40%] z-10 flex gap-2 opacity-0 duration-150 transition ease-out group-hover:opacity-100">
                  <Link
                    href="#"
                    className=" duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border  cursor-pointer  hover:bg-[#ff0000]  hover:border-none "
                  >
                    <BsSearch color="#ffffff" className="" size={15} />
                  </Link>
                  <Link
                    href="#"
                    className="  duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border p-3 cursor-pointer  hover:bg-[#ff0000]  hover:border-none"
                  >
                    <FaLink color="white" size={15} stroke={0.1} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full ">
              <h4 className="text-[15px] font-medium leading-[50px] text-[#FF0000] w-full">
                <p href="">September 3,2023</p>
              </h4>
              <h3 className="pb-2 text-[22px] font-normal leading-[23px]">
                <Link href="/productdetailblog" className="">
                  Turpis at eleifend Aenean porta
                </Link>
              </h3>
              <p className="mb-[11px] text-[18px] font-normal leading-[24px] text-[#666666]">
                Turpis at eleifend ps mi elit Aenean porta ac sed faucibus. Nunc
                urna Morbi...
              </p>

              <Link
                href="/productdetailblog"
                className="text-[17px] font-medium capitalize tracking-[0.5px] underline"
              >
                read more
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col  pb-[1px] pt-[15px] ">
          <div className=" flex flex-col  pb-[1px] group ">
            <div className="w-full">
              <div className="group relative overflow-hidden ">
                <div className="relative">
                  <Image
                    src="/images/brownboy.jpg"
                    alt="Image of person"
                    width={340}
                    height={300}
                    className="transition duration-1000  group-hover:scale-125 group-hover:opacity-90 w-full "
                  />
                </div>
                <div className=" absolute  inset-[40%] z-10 flex gap-2 opacity-0 duration-150 transition ease-out group-hover:opacity-100">
                  <Link
                    href="#"
                    className=" duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border  cursor-pointer  hover:bg-[#ff0000]  hover:border-none "
                  >
                    <BsSearch color="#ffffff" className="" size={15} />
                  </Link>
                  <Link
                    href="#"
                    className="  duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border p-3 cursor-pointer  hover:bg-[#ff0000]  hover:border-none"
                  >
                    <FaLink color="white" size={15} stroke={0.1} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full ">
              <h4 className="text-[15px] font-medium leading-[50px] text-[#FF0000] w-full">
                <p href="">September 3,2023</p>
              </h4>
              <h3 className="text-[22px] font-normal pb-2 leading-[23px] ">
                <Link href="/productdetailblog" className="">
                  Turpis at eleifend Aenean porta
                </Link>
              </h3>

              <p className="mb-[11px] text-[18px] font-normal leading-[24px] text-[#666666]">
                Turpis at eleifend ps mi elit Aenean porta ac sed faucibus. Nunc
                urna Morbi...
              </p>

              <Link
                href="/productdetailblog"
                className="text-[17px] font-medium capitalize tracking-[0.5px] underline"
              >
                read more
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col  pb-[1px] pt-[15px] ">
          <div className=" flex flex-col  pb-[1px] group ">
            <div className="w-full">
              <div className="group relative overflow-hidden ">
                <div className="relative">
                  <Image
                    src="/images/blueman.jpg"
                    alt="Image of person"
                    width={340}
                    height={300}
                    className="transition duration-1000  group-hover:scale-125 group-hover:opacity-90 w-full "
                  />
                </div>
                <div className=" absolute  inset-[40%] z-10 flex gap-2 opacity-0 duration-150 transition ease-out group-hover:opacity-100">
                  <Link
                    href="#"
                    className=" duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border  cursor-pointer  hover:bg-[#ff0000]  hover:border-none "
                  >
                    <BsSearch color="#ffffff" className="" size={15} />
                  </Link>
                  <Link
                    href="#"
                    className="  duration-[10000ms] flex h-[45px] min-w-[45px] items-center justify-center  border p-3 cursor-pointer  hover:bg-[#ff0000]  hover:border-none"
                  >
                    <FaLink color="white" size={15} stroke={0.1} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full ">
              <h4 className="text-[15px] font-medium leading-[50px] text-[#FF0000] w-full">
                <p href="">September 3,2023</p>
              </h4>
              <h3 className="text-[22px] font-normal pb-2 leading-[23px] pb-2">
                <Link href="/productdetailblog" className="">
                  Turpis at eleifend Aenean porta
                </Link>
              </h3>

              <p className="mb-[11px] text-[18px] font-normal leading-[24px] text-[#666666]">
                Turpis at eleifend ps mi elit Aenean porta ac sed faucibus. Nunc
                urna Morbi...
              </p>

              <Link
                href="/productdetailblog"
                className="text-[17px] font-medium capitalize tracking-[0.5px] underline"
              >
                read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LatestBlogs;
