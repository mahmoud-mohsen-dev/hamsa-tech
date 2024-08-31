import { productsType } from '@/types';

export const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      { next: { revalidate: 3000 } }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const productsData: productsType = await response.json();
    return { data: productsData, error: null };
  } catch (err) {
    console.error(err);
    return {
      data: null,
      error: (err as Error).message || 'An error occurred'
    };
  }
};

export const serverGetProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/products`,
      { next: { revalidate: 3000 } }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const productsData: productsType = await response.json();
    // console.log('productsData');
    // console.log(JSON.stringify(productsData));
    return { data: productsData, error: null };
  } catch (err) {
    console.error(err);
    return {
      data: null,
      error: (err as Error).message || 'An error occurred'
    };
  }
};
