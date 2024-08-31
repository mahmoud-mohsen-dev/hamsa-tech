'use client';
import { useStoreContext } from '@/app/context/store';
import { NavItemKeyType, NavItemType } from '@/types';
import { Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { v4 } from 'uuid';

function MenuSidebar({ data }: { data: NavItemType | null }) {
  const { setCurrentActiveSubCategory: setActiveSubCategory } =
    useStoreContext();
  const dataValues =
    data && typeof data === 'object' ? data.products : [];
  // console.log(data);

  const items = dataValues.map((item: NavItemKeyType) => {
    return {
      key: item.key,
      label: item.categoryName ?? '',

      children:
        item.children && item.children.length > 0 ?
          item.children.map((child) => ({
            key: child.key,
            label: child.subCategoryName
          }))
        : []
    };
  }) ?? {
    key: v4(),
    label: ''
  };
  const [currentActiveSubCategory, setCurrentActiveSubCategory] =
    useState([data?.products[0].children[0].key ?? '']);

  const onClick: MenuProps['onClick'] = (e) => {
    const newArr = [...items.map((item) => item?.children)].flat(1);
    setCurrentActiveSubCategory([e.key ?? '']);
    const foundItem = newArr.find((child) => {
      return child.key === e.key;
    });

    console.log(foundItem?.label);
    setActiveSubCategory(foundItem?.label ?? '');
  };

  // console.log(currentActiveSubCategory);

  return (
    <Menu
      mode='inline'
      defaultOpenKeys={[data?.products[0].key as string]}
      defaultSelectedKeys={[
        (data?.products[0].children[0].key as string) ?? ''
      ]}
      selectedKeys={currentActiveSubCategory}
      onClick={onClick}
      style={{
        // height: '100%',
        borderRightColor: 'transparent',
        marginTop: '12px'
      }}
      items={items}
    />
  );
}

export default MenuSidebar;
