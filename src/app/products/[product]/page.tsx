import ImageZoom from '@/components/productPage/ImageZoom';
import ProductSlider from '@/components/productPage/ProductSlider';
import Btn from '@/components/UI/Btn';
import ProductBreadcrumb from '@/components/UI/products/product/ProductBreadcrumb';
import { serverGetProduct } from '@/services/product';
import { Rate } from 'antd';
import Image from 'next/image';
import { v4 } from 'uuid';

export default async function Product({
  params
}: {
  params: { product: string };
}) {
  const { product } = params;
  const { data: productData, error } =
    await serverGetProduct(product);

  if (!productData || error) {
    return (
      <div className='mt-5 text-left text-xl'>Product Not Found</div>
    );
  }
  const { basic } = productData.product;
  // console.log(productData);
  const offPercent =
    ((basic.priceBeforeDeduction - basic.currentPrice) * 100) /
    basic.priceBeforeDeduction;

  return (
    <div>
      <ProductBreadcrumb
        productName={productData.product.basic.productName}
      />
      <div className='mx-6 mt-5 grid grid-cols-2'>
        <ProductSlider productData={productData} />
        <div className='ml-28'>
          <div>
            <h4 className='text-blue-dark'>
              {productData.subCategoryName}
            </h4>
            <h2 className='mt-3 text-3xl font-semibold text-black-medium'>
              {productData.product.basic.productName}
            </h2>
            <div className='mt-3 flex items-center gap-2'>
              <Rate defaultValue={basic.averageRate} disabled />
              <h6 className='text-sm font-medium text-blue-dark'>
                ({basic.averageRate} reviews)
              </h6>
            </div>
            <div className='mt-3 flex items-center gap-2'>
              <span className='text-base font-medium text-black-light'>
                {basic.currentPrice}(EGP)
              </span>
              <span className='text-sm font-medium text-gray-500 line-through'>
                {basic.priceBeforeDeduction}(EGP)
              </span>
              {offPercent > 10 ?
                <span className='text-sm text-red-shade-300'>
                  {offPercent.toFixed(2)}% Off
                </span>
              : null}
            </div>
            <div className='mt-4 flex'>
              <Btn className='w-[200px] rounded-md bg-green-600 text-base text-white'>
                Add to cart
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
