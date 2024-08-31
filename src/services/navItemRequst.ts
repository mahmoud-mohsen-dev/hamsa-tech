import { NavItemType } from '@/types';

export const fetchNavItems = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/navItems`,
      {
        cache: 'no-cache'
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const navItems: NavItemType = await response.json();
    // console.log(navItems);
    return { data: navItems, error: null };
  } catch (err) {
    console.error(err);
    return {
      data: null,
      error: (err as Error).message || 'An error occurred'
    };
  }
};
export const serverfetchNavItems = async () => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/navItems`,
      {
        cache: 'no-cache'
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const navItems: NavItemType = await response.json();
    // console.log(navItems);
    return { data: navItems, error: null };
  } catch (err) {
    console.error(err);
    return {
      data: null,
      error: (err as Error).message || 'An error occurred'
    };
  }
};
