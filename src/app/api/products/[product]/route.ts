import { productDetailsType } from '@/types';
import { NextRequest, NextResponse } from 'next/server';
import { totalmem } from 'os';

const productData: productDetailsType = {
  product: {
    basic: {
      subCategoryName: 'Indoor HD Cameras',
      id: '01-uuid',
      brand: 'hikvision',
      productName: 'Indoor HD Camera Model A',
      imgSrc: '/product-details/product-details-img-1.png',
      totalNumberOfRates: 134,
      alt: '',
      averageRate: 4.5,
      priceBeforeDeduction: 100.0,
      currentPrice: 85.0,
      badge: '',
      quantity: 5
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
    ],
    info: {
      description:
        'EZVIZ Security Camera Outdoor, 1080P Pan/Tilt/Zoom WiFi Camera, 8× Mixed Zoom and AI-Powered Person Detection Security Cam, IP65 Waterproof, Support MicroSD Card up to 512GB ',
      sku: 'sku-01-uuid',
      connectivity: 'wi-fi, wired power supply',
      modalName: 'DS-16D0T-ITPF',
      waranty: {
        value: 1,
        duration: 'year'
      },
      tags: [
        { label: 'Outdoor', href: '/outdoor' },
        { label: 'Indoor', href: '/indoor' },
        { label: 'Security', href: '/security' }
      ]
    },
    details: {
      aboutProduct: [
        '✔360° Visual Coverage--C8PF 1080P pan/tilt camera comes with a 340° horizontal rotation and 80° vertical rotation. Dual-Lens is integration of a 12 mm telephoto lens with a 2.8 mm wide-angle lens. Users can take advantage of this advanced feature by using the EZVIZ App to zoom in and out smoothly, keeping an eye on what’s important without compromising on image quality or clarity. It also features four infrared lights for great night vision up to 30 meters (98 feet)',
        '✔360° Visual Coverage--C8PF 1080P pan/tilt camera comes with a 340° horizontal rotation and 80° vertical rotation. Dual-Lens is integration of a 12 mm telephoto lens with a 2.8 mm wide-angle lens. Users can take advantage of this advanced feature by using the EZVIZ App to zoom in and out smoothly, keeping an eye on what’s important without compromising on image quality or clarity. It also features four infrared lights for great night vision up to 30 meters (98 feet)',
        '✔360° Visual Coverage--C8PF 1080P pan/tilt camera comes with a 340° horizontal rotation and 80° vertical rotation. Dual-Lens is integration of a 12 mm telephoto lens with a 2.8 mm wide-angle lens. Users can take advantage of this advanced feature by using the EZVIZ App to zoom in and out smoothly, keeping an eye on what’s important without compromising on image quality or clarity. It also features four infrared lights for great night vision up to 30 meters (98 feet)',
        '✔360° Visual Coverage--C8PF 1080P pan/tilt camera comes with a 340° horizontal rotation and 80° vertical rotation. Dual-Lens is integration of a 12 mm telephoto lens with a 2.8 mm wide-angle lens. Users can take advantage of this advanced feature by using the EZVIZ App to zoom in and out smoothly, keeping an eye on what’s important without compromising on image quality or clarity. It also features four infrared lights for great night vision up to 30 meters (98 feet)'
      ]
    },
    moreDetails: {
      description: [
        {
          heading: 'Basic Features for Simple Operation',
          p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          img: {
            src: '/product-desctiption-img-1.jpg',
            alt: 'D0TC-Camera'
          }
        },
        {
          img: {
            src: '/product-desctiption-img-1.jpg',
            alt: 'D0TC-Camera'
          }
        },
        {
          heading: 'Advanced Features',
          ul: [
            '2 MP Indoor Fixed Turret Camera',
            '1080p turret camera',
            'Smart IR, up to 20 m IR distanceWater resistant (IP66)',
            '4 in 1 (4 signals switchable TVI/AHD/CVI/CVBS)'
          ]
        }
      ],
      specification: [
        { key: 'Weight', value: '1000 Grams' },
        { key: 'Brand', value: 'hikvision' },
        { key: 'Item Package Quantity', value: '1' },
        { key: 'Net Quantity', value: '340.0 gram' },
        { key: 'Product Dimensions', value: '9.6 x 7.49 x 18.49 cm' },
        { key: 'ASIN', value: 'SB0025UJ75W' },
        { key: 'Manufacturer', value: 'China' }
      ],
      reviews: {
        customerReviews: [
          {
            rating: 5,
            title: 'Need to recheck the weight at delivery point',
            content: `Product quality is good. But, weight seemed less than
              1kg. Since it is being sent in open package, there is a
              possibility of pilferage in between. FreshCart sends the
              veggies and fruits through sealed plastic covers and
              Barcode on the weight etc.`,
            user: {
              name: 'john doe',
              avatarURL:
                'https://freshcart.codescandy.com/assets/images/avatar/avatar-12.jpg',
              avrtarAlt: 'john avtart picture'
            },
            createdAt: '2023-08-25T14:30:00.000Z'
          },
          {
            rating: 2,
            title: 'Need to recheck the weight at delivery point',
            content: `Product quality is good. But, weight seemed less than
              1kg. Since it is being sent in open package, there is a
              possibility of pilferage in between. FreshCart sends the
              veggies and fruits through sealed plastic covers and
              Barcode on the weight etc.`,
            user: {
              name: 'john doe',
              avatarURL:
                'https://freshcart.codescandy.com/assets/images/avatar/avatar-12.jpg',
              avrtarAlt: 'john avtart picture'
            },
            createdAt: '2023-08-25T14:30:00.000Z'
          },
          {
            rating: 1,
            title: 'Need to recheck the weight at delivery point',
            content: `Product quality is good. But, weight seemed less than
              1kg. Since it is being sent in open package, there is a
              possibility of pilferage in between. FreshCart sends the
              veggies and fruits through sealed plastic covers and
              Barcode on the weight etc.`,
            user: {
              name: 'Mo mo',
              avatarURL:
                'https://freshcart.codescandy.com/assets/images/avatar/avatar-12.jpg',
              avrtarAlt: 'john avtart picture'
            },
            createdAt: '2023-08-25T14:30:00.000Z'
          }
        ]
      }
    }
  },

  relatedProducts: [
    {
      quantity: 5,
      subCategoryName: 'Indoor HD Cameras',
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
    {
      subCategoryName: 'Indoor HD Cameras',
      id: '01-uuid',
      brand: 'hikvision',
      productName: 'Indoor HD Camera Model A',
      imgSrc: '/product-details/product-details-img-1.png',
      totalNumberOfRates: 134,
      alt: '',
      averageRate: 4.5,
      priceBeforeDeduction: 100.0,
      currentPrice: 85.0,
      badge: '',
      quantity: 0
    },
    {
      subCategoryName: 'Indoor HD Cameras',
      id: '01-uuid',
      brand: 'hikvision',
      productName: 'Indoor HD Camera Model A',
      imgSrc: '/product-details/product-details-img-1.png',
      totalNumberOfRates: 134,
      alt: '',
      averageRate: 4.5,
      priceBeforeDeduction: 100.0,
      currentPrice: 85.0,
      badge: '',
      quantity: 5
    },
    {
      subCategoryName: 'Indoor HD Cameras',
      id: '01-uuid',
      brand: 'hikvision',
      productName: 'Indoor HD Camera Model A',
      imgSrc: '/product-details/product-details-img-1.png',
      totalNumberOfRates: 134,
      alt: '',
      averageRate: 4.5,
      priceBeforeDeduction: 100.0,
      currentPrice: 85.0,
      badge: '',
      quantity: 3
    }
  ]
};

// Handler for GET requests
export async function GET(request: NextRequest) {
  const { nextUrl } = request;
  const productId = nextUrl.pathname.split('/').pop(); // Extract product ID from the URL
  // console.log(productId);

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
