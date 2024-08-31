'use client';
import ProductCard from '@/components/products/ProductCard';
import Sorter from '@/components/products/Sorter';
import { getProducts } from '@/services/products';
import { productsType } from '@/types';
import { v4 } from 'uuid';
import { useStoreContext } from '../context/store';
import { useEffect, useState } from 'react';
import { clear } from 'console';

function Products() {
  const [data, setData] = useState<productsType | null>([]);
  const [error, setError] = useState<string | null>();
  const { currentActiveSubCategory } = useStoreContext();
  // console.log(value);
  console.log(data);
  // console.log(error);
  useEffect(() => {
    const getDataProducts = async () => {
      const { data: resData, error: resError } = await getProducts();
      console.log(data);
      setError(resError);
      if (!error) {
        setData(resData);
      }
    };

    getDataProducts();
  }, []);

  const getCurrentIndex = () => {
    if (
      data &&
      currentActiveSubCategory &&
      typeof currentActiveSubCategory === 'string'
    ) {
      return data?.findIndex((subCategory) => {
        console.log(subCategory);
        console.log(currentActiveSubCategory);
        console.log(
          subCategory.subCategoryName === currentActiveSubCategory
        );
        return (
          subCategory.subCategoryName === currentActiveSubCategory
        );
      });
    }
    return -1;
  };

  console.log(getCurrentIndex());
  console.log(currentActiveSubCategory);
  console.log(data);

  return (
    <section>
      <div className='flex items-center justify-between'>
        <h4 className='text-sm font-medium text-black-medium'>
          24 <span className='text-gray-normal'>Products Found</span>
        </h4>
        <Sorter />
      </div>
      {error && <div className='mt-5'>No Products Found</div>}
      {!error && data && data?.length > 0 && (
        <div className='mt-5 grid grid-cols-3 gap-4'>
          {data[
            getCurrentIndex() >= 0 ? getCurrentIndex() : 0
          ].children.map((product) => (
            <ProductCard
              title={product.productName}
              alt={product.alt}
              imgSrc={product.imgSrc}
              avgRate={product.averageRate}
              category={data[0].subCategoryName}
              badge={product.badge}
              priceBeforeDeduction={product.priceBeforeDeduction}
              currentPrice={product.currentPrice}
              linkSrc={`/products/${product.id}`}
              totalRates={product.totalNumberOfRates}
              key={v4()}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;
