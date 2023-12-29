import Image from "next/image";

import jsonData from "../data.json";
import Link from "@/node_modules/next/link";
import { IoStar } from "react-icons/io5";
import { useToast } from "./ui/use-toast";

const LayoutGridfullwidth = () => {
  const { toast } = useToast();

  const addToCart = (product, inputValue = null) => {
    // Retrieve existing cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product with the same ID already exists in the cart
    const isProductInCart = existingCartItems.some(
      (item) => item.id === product.id
    );

    if (isProductInCart) {
      // If the product is already in the cart, show a message
      console.log("Product is already in the cart");
    } else {
      // If the product is not in the cart, add it with additional data
      const updatedCart = [
        ...existingCartItems,
        { ...product, inputValue: inputValue || 1 },
      ];

      // Save the updated cart to local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      console.log("Product added to the cart");
    }
  };

  return (
    <>
      {jsonData.map((product) => (
        <div className="flex-col pb-[10px]">
          <div className=" w-full mx-auto  flex max-sm:flex-col p-[2px] pb-[10px]  ">
            <Link
              href={`/products/${product.id}`}
              className=" item-center justify-center flex  max-w-[260px] max-sm:mx-auto sm:min-w-[260px] max-h-[360px] shrink-0"
            >
              <Image
                src={`/images${product.all_images[0]}`}
                alt="prouct "
                width={260}
                height={316}
                className="shrink-0 w-full"
              />
            </Link>
            <div className="flex-col px-[25px] pt-[15px] min-h-[316px] max-sm:text-center ">
              <Link
                href={`/products/${product.id}`}
                className="text-[17] text-[#666] font-normal  leading-[26px] mb-1  "
              >
                {product.subheading}
              </Link>

              {product.heading && (
                <Link href={`/products/${product.id}`}>
                  <h2
                    href="/products"
                    className="text-[20px] text-[#222] leading-[22px] py-[2px] max-sm:text-center"
                  >
                    {product.heading}
                  </h2>
                </Link>
              )}

              <div className="flex justify-center sm:justify-start  ">
                <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
                <IoStar className=" fill-[#f2b600] h-[14px] w-[13px]" />
              </div>
              <span className="text-[20px] font-medium  text-center text-[#ff0000] mb-2 max-sm:text-center">
                ${product.price}
              </span>

              <p className="text-[18px] text-normal text-[#666666] max-sm:text-center leading-[22px] mb-3 line-clamp-2">
                {product.description}
              </p>

              <div className=" flex gap-3 justify-center sm:justify-start pl-0  p-1.5">
                <div className="flex gap-2 items-center justify-center max-sm:hidden">
                  <div className="h-[20px] w-[20px] rounded-full bg-orange-500"></div>
                  <div className="h-[20px] w-[20px] rounded-full bg-[#5d9cec]"></div>
                  <div className="h-[20px] w-[20px] rounded-full bg-yellow-500"></div>
                </div>
                <h2 className="border-[1px] text-[14px]  border-[#4cbb6c] block bg-[#e9f9ee] px-[7px] py-[2px] font-normal capitalize tracking-[0.5px] text-[#4cbb6c] leading-1 text-center">
                  In Stock
                </h2>
              </div>

              <button
                onClick={() => {
                  addToCart(product);
                  toast({
                    title: "This Product is added to your cart",
                    description: `${product.heading} is added to your cart`,
                    id: `${product.id}`,
                  });
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                }}
                className=" mt-[10px] p-[10px] bg-black text-white min-w-[170px] max-sm:text-center"
              >
                {product.button}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LayoutGridfullwidth;
