// 'use client';
import CustomBreadcrumb from '@/components/products/CustomBreadcrumb';
import React from 'react';
import type { MenuProps } from 'antd';
import { Menu, message } from 'antd';
import { v4 } from 'uuid';
import { NavItemKeyType } from '@/types';
import { serverfetchNavItems } from '@/services/navItemRequst';
import BrandFilter from '@/components/UI/products/sidebar/BrandFilter';
import MenuSidebar from '@/components/products/MenuSidebar';

const ProductsLayout = async ({
  children
}: React.PropsWithChildren) => {
  const { data, error } = await serverfetchNavItems();
  if (error) {
    message.error(error);
    return <div>Error fetching sidebar items</div>;
  }

  // console.log([
  //   data?.products[0].children[0].subCategoryName.toLocaleLowerCase() as string
  // ]);
  // console.log([
  //   data?.products[0].categoryName.toLocaleLowerCase() as string
  // ]);

  return (
    <section className='content container my-[100px]'>
      <CustomBreadcrumb />
      <div className='mt-5 grid grid-cols-[250px_1fr] gap-10'>
        <aside
          style={{ borderRight: '1px solid rgba(5, 5, 5, 0.06)' }}
        >
          <h3 className='ml-[24px] w-fit text-lg text-black-medium'>
            Categories
          </h3>
          <MenuSidebar data={data} />

          <BrandFilter />
        </aside>
        <main>{children}</main>
      </div>
    </section>
  );
};

export default ProductsLayout;
