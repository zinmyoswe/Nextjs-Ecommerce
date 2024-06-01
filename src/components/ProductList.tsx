
import  Link  from 'next/link';
import  Image  from 'next/image';
const ProductList = () => {
    return(
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
     
        <Link
          href=""
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
         
        >
          <div className="relative w-full h-80">
            <Image
              src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_466,c_limit/a51d84b2-282a-44d6-957d-aa57473ed73d/nike-just-do-it.jpg"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            
              <Image
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/76d2c477-a38a-4d62-be10-0d428f056045/sportswear-mens-crew-neck-t-shirt-lFpnPt.png"
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
    
          </div>
          <div className="flex justify-between">
            <span className="font-medium">a</span>
            <span className="font-semibold">$1</span>
          </div>
          
            <div
              className="text-sm text-gray-500"
              
            ></div>
       
          <button className="rounded-2xl ring-1 ring-black text-black w-max py-2 px-4 text-xs hover:bg-black hover:text-white">
            Add to Cart
          </button>
        </Link>
  
      
    </div>
    )
}

export default ProductList;