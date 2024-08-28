import CustomBreadcrumb from '@/components/products/CustomBreadcrumb';
import React from 'react';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, message } from 'antd';
import { fetchNavItems } from '@/services/navItemRequst';
import { v4 } from 'uuid';
import { NavItemKeyType } from '@/types';

const items: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`
      };
    })
  };
});

const ProductsLayout = async ({
  children
}: React.PropsWithChildren) => {
  const { data, error } = await fetchNavItems();
  if (error) {
    message.error(error);
    return <div>Error fetching sidebar items</div>;
  }
  const dataValues =
    data && typeof data === 'object' ? Object.values(data) : [];

  const items: MenuProps['items'] = dataValues[0].map(
    (item: NavItemKeyType) => {
      return {
        key: v4(),
        label: item.categoryName ?? '',
        children:
          item.children && item.children.length > 0 ?
            item.children.map((child) => ({
              key: v4(),
              label: child.subCategoryName
            }))
          : []
      };
    }
  );

  return (
    <section className='content container my-[100px]'>
      <CustomBreadcrumb />
      <div className='mt-10 grid grid-cols-[250px_1fr] gap-10'>
        <aside
          style={{ borderRight: '1px solid rgba(5, 5, 5, 0.06)' }}
        >
          <h3 className='ml-[28px] w-fit text-lg text-black-medium'>
            Categories
          </h3>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRightColor: 'transparent'
            }}
            items={items}
          />
        </aside>
        <main>{children}</main>
      </div>
    </section>
  );
};

export default ProductsLayout;
