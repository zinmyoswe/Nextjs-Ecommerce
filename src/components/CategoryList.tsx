import  Link from 'next/link';
import  Image  from 'next/image';

const CategoryList = () => {
    return (
        <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
       
          <Link
            href=""
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_466,c_limit/a51d84b2-282a-44d6-957d-aa57473ed73d/nike-just-do-it.jpg"
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
             a
            </h1>
          </Link>

          <Link
            href=""
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/76d2c477-a38a-4d62-be10-0d428f056045/sportswear-mens-crew-neck-t-shirt-lFpnPt.png"
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
             a
            </h1>
          </Link>
    
      </div>
    </div>
    )
}

export default CategoryList;