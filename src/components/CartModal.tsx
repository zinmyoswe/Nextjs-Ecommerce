"use client"
import  Image  from 'next/image';

const CartModal = () => {

    const cartItems = true

    return(
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
            {!cartItems ? (
                <div className="">Cart is Empty</div>
            ) : (
                <>
                <h2 className="text-lg">Shopping Cart</h2>
                {/* List */}
                <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                    <Image src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/76d2c477-a38a-4d62-be10-0d428f056045/sportswear-mens-crew-neck-t-shirt-lFpnPt.png" 
                    alt="" width={76} height={96} className="object-cover rounded-md" />
                
                <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                {/* TITLE */}
                <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">
                    available
                </div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-black-500">Remove</span>
                </div>
                </div>
                </div>
                <div className="flex gap-4">
                    <Image src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/76d2c477-a38a-4d62-be10-0d428f056045/sportswear-mens-crew-neck-t-shirt-lFpnPt.png" 
                    alt="" width={76} height={96} className="object-cover rounded-md" />
                
                <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                {/* TITLE */}
                <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">
                    available
                </div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-black-500">Remove</span>
                </div>
                </div>
                </div>
                </div>

                {/* BOTTOM */}
                <div className="">
                    <div className="flex items-center justify-between font-semibold">
                        <span className="">Subtotal</span>
                        <span className="">$49</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 mb-4">
                        Shipping and taxes calculated at checkout
                    </p>
                    <div className="flex justify-between text-sm">
                        <button className="rounded-3xl py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                        <button className="rounded-3xl py-3 px-4 bg-black text-white">Checkout</button>
                    </div>
                </div>
                </>
            )
        }
        </div>
    )
}

export default CartModal;