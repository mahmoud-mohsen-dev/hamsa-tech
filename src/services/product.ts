import { productDetailsType } from '@/app/api/products/[product]/route';

export const serverGetProduct = async (productId: string) => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/products/${productId}`,
      {
        cache: 'no-cache'
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const productData: {
      data: productDetailsType | null;
      error: null | string;
      status: number;
    } = await response.json();

    return { data: productData.data, error: productData.error };
  } catch (err) {
    console.error(err);
    return {
      data: null,
      error: (err as Error).message || 'An error occurred'
    };
  }
};
