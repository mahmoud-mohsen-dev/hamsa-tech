import { productsObjectType, productsType } from '@/types';

// export const getProducts = async () => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
//       // `/api/products`,
//       { next: { revalidate: 3000 } }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const productsData: productsType = await response.json();
//     return { data: productsData, error: null };
//   } catch (err) {
//     console.error(err);
//     return {
//       data: null,
//       error: (err as Error).message || 'An error occurred'
//     };
//   }
// };

export const getProductsCategory = async (category: string) => {
  try {
    if (!category) {
      throw new Error('Category not provided');
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?category=${encodeURIComponent(category)}`,
      { next: { revalidate: 3000 } }
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    // console.log(result, 'result');
    return { data: result.data as productsObjectType, error: null };
  } catch (error) {
    // console.log(error);
    return {
      data: null,
      error: (error as Error) || 'An error occurred'
    };
  }
};

// export const serverGetProducts = async () => {
//   try {
//     const response = await fetch(
//       `${process.env.BASE_URL}/api/products`,
//       {
//         next: { revalidate: 3000 }
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const productsData: productsType = await response.json();
//     // console.log('productsData');
//     // console.log(JSON.stringify(productsData));
//     return { data: productsData, error: null };
//   } catch (err) {
//     console.error(err);
//     return {
//       data: null,
//       error: (err as Error).message || 'An error occurred'
//     };
//   }
// };
