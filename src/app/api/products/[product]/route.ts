import { NextRequest, NextResponse } from 'next/server';

export interface productDetailsType {
  subCategoryName: string;
  product: {
    basic: {
      id: string;
      brand: string;
      productName: string;
      imgSrc: string;
      totalNumberOfRates: number;
      alt: string;
      averageRate: number;
      priceBeforeDeduction: number;
      currentPrice: number;
      badge: string;
    };
    sliderImgs: {
      imgSrc: string;
      alt: string;
    }[];
  };
}

const productData: productDetailsType = {
  subCategoryName: 'Indoor HD Cameras',
  product: {
    basic: {
      id: '01-uuid',
      brand: 'hikvision',
      productName: 'Indoor HD Camera Model A',
      imgSrc: '/product-details/product-details-img-1.png',
      totalNumberOfRates: 134,
      alt: '',
      averageRate: 4.5,
      priceBeforeDeduction: 100.0,
      currentPrice: 85.0,
      badge: ''
    },
    sliderImgs: [
      {
        imgSrc: '/product-details/product-details-img-1.png',
        alt: 'slider image number 1'
      },
      {
        imgSrc: '/product-details/D0TC-Camera.png',
        alt: 'slider image number 1'
      },
      {
        imgSrc: '/product-details/39-camera.png',
        alt: 'slider image number 1'
      },
      {
        imgSrc: '/product-details/dvr.png',
        alt: 'slider image number 1'
      }
    ]
  }
};

// Handler for GET requests
export async function GET(request: NextRequest) {
  const { nextUrl } = request;
  const productId = nextUrl.pathname.split('/').pop(); // Extract product ID from the URL
  console.log(productId);

  // For demonstration, we use a static match. You might fetch this from a database or a more complex data structure.
  if (productId === productData.product.basic.id) {
    return NextResponse.json({
      data: productData,
      error: null,
      status: 200
    });
  }

  return NextResponse.json({
    data: null,
    error: 'Product not found',
    status: 404
  });
}
