import { productsType } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

export const productsData: productsType = [
  {
    subCategoryName: 'Indoor HD Cameras',
    imgSrc: '/featured/nav-link-img-wifi-camera.png',
    id: 'category-01-sub-1',
    children: [
      {
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
        id: '02-uuid',
        productName: 'Indoor HD Camera Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        brand: 'hikvision',
        totalNumberOfRates: 98,
        averageRate: 4.0,
        priceBeforeDeduction: 120.0,
        currentPrice: 95.0,
        badge: 'Sale'
      },
      {
        id: '03-uuid',
        brand: 'ezviz',
        productName: 'Indoor HD Camera Model C',
        imgSrc: '/featured/hikvision-16u1t.png',
        alt: '',
        totalNumberOfRates: 57,
        averageRate: 3.8,
        priceBeforeDeduction: 150.0,
        currentPrice: 130.0,
        badge: 'Out Of Stock'
      }
    ]
  },
  {
    subCategoryName: 'Outdoor HD Cameras',
    id: 'category-01-sub-2',
    imgSrc: '/featured/nav-link-img-outdoor-wifi-camera.png',
    children: [
      {
        id: '04-uuid',
        brand: 'cyber',
        productName: 'Outdoor HD Camera Model X',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 243,
        averageRate: 4.7,
        priceBeforeDeduction: 180.0,
        currentPrice: 150.0,
        badge: ''
      },
      {
        id: '05-uuid',
        brand: 'hilook',
        productName: 'Outdoor HD Camera Model Y',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 89,
        averageRate: 4.1,
        priceBeforeDeduction: 160.0,
        currentPrice: 145.0,
        badge: 'Hot'
      }
    ]
  },
  {
    subCategoryName: 'DVRS',
    id: 'category-01-sub-3',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '06-uuid',
        brand: 'commax',
        productName: 'DVR Model Alpha',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 76,
        averageRate: 4.3,
        priceBeforeDeduction: 200.0,
        currentPrice: 180.0,
        badge: ''
      },
      {
        id: '07-uuid',
        productName: 'DVR Model Beta',
        brand: 'farfisa',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 54,
        averageRate: 3.9,
        priceBeforeDeduction: 220.0,
        currentPrice: 190.0,
        badge: 'Out Of Stock'
      }
    ]
  },
  {
    subCategoryName: 'Indoor Wi-Fi Cameras',
    id: 'category-01-sub-4',
    imgSrc: '/featured/nav-link-img-indoor-wifi-camera.png',
    children: [
      {
        id: '08-uuid',
        brand: 'master',
        productName: 'Indoor Wi-Fi Camera Model 1',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 112,
        averageRate: 4.6,
        priceBeforeDeduction: 140.0,
        currentPrice: 120.0,
        badge: ''
      },
      {
        id: '09-uuid',
        brand: 'commax',
        productName: 'Indoor Wi-Fi Camera Model 2',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 78,
        averageRate: 4.2,
        priceBeforeDeduction: 160.0,
        currentPrice: 145.0,
        badge: ''
      }
    ]
  },
  {
    subCategoryName: 'Outdoor Wi-Fi Cameras',
    id: 'category-01-sub-5',
    imgSrc: '/featured/nav-link-img-outdoor-wifi-camera.png',
    children: [
      {
        id: '10-uuid',
        brand: 'commax',
        productName: 'Outdoor Wi-Fi Camera Model 1',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 134,
        averageRate: 4.7,
        priceBeforeDeduction: 180.0,
        currentPrice: 165.0,
        badge: ''
      },
      {
        id: '11-uuid',
        brand: 'cyber',
        productName: 'Outdoor Wi-Fi Camera Model 2',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 91,
        averageRate: 4.3,
        priceBeforeDeduction: 200.0,
        currentPrice: 180.0,
        badge: ''
      }
    ]
  },
  {
    subCategoryName: 'Indoor IP Cameras',
    id: 'category-01-sub-6',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '12-uuid',
        brand: 'cyber',
        productName: 'Indoor IP Camera Model Pro',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 54,
        averageRate: 4.5,
        priceBeforeDeduction: 250.0,
        currentPrice: 230.0,
        badge: 'Hot'
      }
    ]
  },
  {
    subCategoryName: 'Outdoor IP Cameras',
    id: 'category-01-sub-7',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '13-uuid',
        productName: 'Outdoor IP Camera Model Pro',
        alt: '',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        totalNumberOfRates: 67,
        averageRate: 4.8,
        priceBeforeDeduction: 270.0,
        currentPrice: 250.0,
        badge: 'Hot',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'NVRS',
    id: 'category-01-sub-8',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '14-uuid',
        productName: 'NVR Model 1',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 134,
        averageRate: 4.5,
        priceBeforeDeduction: 300.0,
        currentPrice: 275.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '15-uuid',
        productName: 'NVR Model 2',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        totalNumberOfRates: 102,
        alt: '',
        averageRate: 4.2,
        priceBeforeDeduction: 350.0,
        currentPrice: 320.0,
        badge: '',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Receipt Printers',
    id: 'category-02-sub-1',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '16-uuid',
        productName: 'Receipt Printer 1',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 134,
        averageRate: 4.5,
        priceBeforeDeduction: 300.0,
        currentPrice: 275.0,
        badge: '',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Barcode Printers',
    id: 'category-02-sub-2',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '17-uuid',
        productName: 'Barcode Printers 1',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 134,
        averageRate: 4.5,
        priceBeforeDeduction: 300.0,
        currentPrice: 275.0,
        badge: '',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Mobile Printers',
    id: 'category-02-sub-3',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '18-uuid',
        productName: 'Mobile Printers 1',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 134,
        averageRate: 4.5,
        priceBeforeDeduction: 300.0,
        currentPrice: 275.0,
        badge: '',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Wired Barcode Scanners',
    id: 'category-02-sub-4',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '19-uuid',
        productName: 'Wired Barcode Scanners 1',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 134,
        averageRate: 4.5,
        priceBeforeDeduction: 300.0,
        currentPrice: 275.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '20-uuid',
        productName: 'Wired Barcode Scanners 2',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 134,
        averageRate: 4.5,
        priceBeforeDeduction: 300.0,
        currentPrice: 275.0,
        badge: '',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Wireless Barcode Scanners',
    id: 'category-02-sub-5',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '21-uuid',
        productName: 'Wireless Barcode Scanners 1',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 134,
        averageRate: 4.5,
        priceBeforeDeduction: 300.0,
        currentPrice: 275.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '22-uuid',
        productName: 'Wireless Barcode Scanners 2',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 134,
        averageRate: 4.5,
        priceBeforeDeduction: 300.0,
        currentPrice: 275.0,
        badge: '',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Face',
    id: 'category-03-sub-1',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '23-uuid',
        productName: 'Face Recognition Device Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        totalNumberOfRates: 150,
        alt: '',
        averageRate: 4.7,
        priceBeforeDeduction: 300.0,
        currentPrice: 250.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '24-uuid',
        productName: 'Face Recognition Device Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 120,
        averageRate: 4.3,
        priceBeforeDeduction: 350.0,
        currentPrice: 280.0,
        badge: 'Sale',
        brand: 'hikvision'
      },
      {
        id: '25-uuid',
        productName: 'Face Recognition Device Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 90,
        averageRate: 4.1,
        priceBeforeDeduction: 400.0,
        currentPrice: 320.0,
        badge: 'New',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Fingerprint',
    id: 'category-03-sub-2',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '26-uuid',
        productName: 'Fingerprint Scanner Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 200,
        averageRate: 4.6,
        priceBeforeDeduction: 280.0,
        currentPrice: 240.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '27-uuid',
        productName: 'Fingerprint Scanner Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 180,
        averageRate: 4.4,
        priceBeforeDeduction: 320.0,
        currentPrice: 270.0,
        badge: 'Hot',
        brand: 'hikvision'
      },
      {
        id: '28-uuid',
        productName: 'Fingerprint Scanner Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 150,
        averageRate: 4.2,
        priceBeforeDeduction: 350.0,
        currentPrice: 300.0,
        badge: 'Limited',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Hybrid Biometrics',
    id: 'category-03-sub-3',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '29-uuid',
        productName: 'Hybrid Biometrics Device Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 130,
        averageRate: 4.5,
        priceBeforeDeduction: 350.0,
        currentPrice: 300.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '30-uuid',
        productName: 'Hybrid Biometrics Device Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 110,
        averageRate: 4.3,
        priceBeforeDeduction: 370.0,
        currentPrice: 320.0,
        badge: 'Sale',
        brand: 'hikvision'
      },
      {
        id: '31-uuid',
        productName: 'Hybrid Biometrics Device Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 95,
        averageRate: 4.0,
        priceBeforeDeduction: 400.0,
        currentPrice: 340.0,
        badge: 'New',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'RFID',
    id: 'category-03-sub-4',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '32-uuid',
        productName: 'RFID Reader Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 160,
        averageRate: 4.8,
        priceBeforeDeduction: 250.0,
        currentPrice: 220.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '33-uuid',
        productName: 'RFID Reader Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 140,
        averageRate: 4.6,
        priceBeforeDeduction: 270.0,
        currentPrice: 240.0,
        badge: 'Hot',
        brand: 'hikvision'
      },
      {
        id: '34-uuid',
        productName: 'RFID Reader Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 120,
        averageRate: 4.4,
        priceBeforeDeduction: 290.0,
        currentPrice: 260.0,
        badge: 'Limited',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Standalone Devices',
    id: 'category-04-sub-1',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '35-uuid',
        productName: 'Standalone Device Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        totalNumberOfRates: 85,
        alt: '',
        averageRate: 4.6,
        priceBeforeDeduction: 150.0,
        currentPrice: 120.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '36-uuid',
        productName: 'Standalone Device Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 70,
        averageRate: 4.4,
        priceBeforeDeduction: 180.0,
        currentPrice: 150.0,
        badge: 'Sale',
        brand: 'hikvision'
      },
      {
        id: '37-uuid',
        productName: 'Standalone Device Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 55,
        averageRate: 4.2,
        priceBeforeDeduction: 200.0,
        currentPrice: 170.0,
        badge: 'New',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Control Panels',
    id: 'category-04-sub-2',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '38-uuid',
        productName: 'Control Panel Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 90,
        averageRate: 4.7,
        priceBeforeDeduction: 250.0,
        currentPrice: 200.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '39-uuid',
        productName: 'Control Panel Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 75,
        averageRate: 4.5,
        priceBeforeDeduction: 270.0,
        currentPrice: 220.0,
        badge: 'Hot',
        brand: 'hikvision'
      },
      {
        id: '40-uuid',
        productName: 'Control Panel Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 60,
        averageRate: 4.3,
        priceBeforeDeduction: 300.0,
        currentPrice: 260.0,
        badge: 'Limited',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Readers',
    id: 'category-04-sub-3',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '41-uuid',
        productName: 'Reader Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 110,
        averageRate: 4.6,
        priceBeforeDeduction: 120.0,
        currentPrice: 100.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '42-uuid',
        productName: 'Reader Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 95,
        averageRate: 4.4,
        priceBeforeDeduction: 140.0,
        currentPrice: 110.0,
        badge: 'Sale',
        brand: 'hikvision'
      },
      {
        id: '43-uuid',
        productName: 'Reader Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 80,
        averageRate: 4.2,
        priceBeforeDeduction: 160.0,
        currentPrice: 130.0,
        badge: 'New',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Accessories',
    id: 'category-04-sub-4',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '44-uuid',
        productName: 'Accessory Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 65,
        averageRate: 4.5,
        priceBeforeDeduction: 50.0,
        currentPrice: 40.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '45-uuid',
        productName: 'Accessory Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 50,
        averageRate: 4.3,
        priceBeforeDeduction: 60.0,
        currentPrice: 45.0,
        badge: 'Hot',
        brand: 'hikvision'
      },
      {
        id: '46-uuid',
        productName: 'Accessory Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 40,
        averageRate: 4.1,
        priceBeforeDeduction: 70.0,
        currentPrice: 55.0,
        badge: 'Limited',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Exit Buttons',
    id: 'category-04-sub-5',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '47-uuid',
        productName: 'Exit Button Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 90,
        averageRate: 4.6,
        priceBeforeDeduction: 70.0,
        currentPrice: 60.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '48-uuid',
        productName: 'Exit Button Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 75,
        averageRate: 4.4,
        priceBeforeDeduction: 80.0,
        currentPrice: 65.0,
        badge: 'Sale',
        brand: 'hikvision'
      },
      {
        id: '49-uuid',
        productName: 'Exit Button Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 60,
        averageRate: 4.2,
        priceBeforeDeduction: 90.0,
        currentPrice: 75.0,
        badge: 'New',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Audio Indoor Station',
    id: 'category-05-sub-1',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '50-uuid',
        productName: 'Audio Indoor Station Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        totalNumberOfRates: 45,
        alt: '',
        averageRate: 4.4,
        priceBeforeDeduction: 120.0,
        currentPrice: 100.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '51-uuid',
        productName: 'Audio Indoor Station Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 38,
        averageRate: 4.2,
        priceBeforeDeduction: 140.0,
        currentPrice: 110.0,
        badge: 'Sale',
        brand: 'hikvision'
      },
      {
        id: '52-uuid',
        productName: 'Audio Indoor Station Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 29,
        averageRate: 4.0,
        priceBeforeDeduction: 160.0,
        currentPrice: 130.0,
        badge: 'Out Of Stock',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Audio Panel',
    id: 'category-05-sub-2',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '53-uuid',
        productName: 'Audio Panel Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 52,
        averageRate: 4.6,
        priceBeforeDeduction: 180.0,
        currentPrice: 150.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '54-uuid',
        productName: 'Audio Panel Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 46,
        averageRate: 4.4,
        priceBeforeDeduction: 200.0,
        currentPrice: 170.0,
        badge: 'Hot',
        brand: 'hikvision'
      },
      {
        id: '55-uuid',
        productName: 'Audio Panel Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 33,
        averageRate: 4.1,
        priceBeforeDeduction: 220.0,
        currentPrice: 190.0,
        badge: 'Limited',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Video Indoor Station',
    id: 'category-05-sub-3',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '56-uuid',
        productName: 'Video Indoor Station Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 60,
        averageRate: 4.5,
        priceBeforeDeduction: 250.0,
        currentPrice: 200.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '57-uuid',
        productName: 'Video Indoor Station Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 55,
        averageRate: 4.3,
        priceBeforeDeduction: 270.0,
        currentPrice: 220.0,
        badge: 'Sale',
        brand: 'hikvision'
      },
      {
        id: '58-uuid',
        productName: 'Video Indoor Station Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 47,
        averageRate: 4.1,
        priceBeforeDeduction: 300.0,
        currentPrice: 250.0,
        badge: 'New',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Video Panel',
    id: 'category-05-sub-4',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '59-uuid',
        productName: 'Video Panel Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 70,
        averageRate: 4.7,
        priceBeforeDeduction: 280.0,
        currentPrice: 230.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '60-uuid',
        productName: 'Video Panel Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 65,
        averageRate: 4.5,
        priceBeforeDeduction: 300.0,
        currentPrice: 250.0,
        badge: 'Hot',
        brand: 'hikvision'
      },
      {
        id: '61-uuid',
        productName: 'Video Panel Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 50,
        averageRate: 4.3,
        priceBeforeDeduction: 320.0,
        currentPrice: 270.0,
        badge: 'Limited',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Audio Kits',
    id: 'category-05-sub-5',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '62-uuid',
        productName: 'Audio Kit Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 40,
        averageRate: 4.4,
        priceBeforeDeduction: 150.0,
        currentPrice: 120.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '63-uuid',
        productName: 'Audio Kit Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 35,
        averageRate: 4.3,
        priceBeforeDeduction: 170.0,
        currentPrice: 140.0,
        badge: 'Sale',
        brand: 'hikvision'
      },
      {
        id: '64-uuid',
        productName: 'Audio Kit Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 28,
        averageRate: 4.1,
        priceBeforeDeduction: 200.0,
        currentPrice: 170.0,
        badge: 'Out Of Stock',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Video Kits',
    id: 'category-05-sub-6',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '65-uuid',
        productName: 'Video Kit Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 55,
        averageRate: 4.6,
        priceBeforeDeduction: 300.0,
        currentPrice: 250.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '66-uuid',
        productName: 'Video Kit Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 50,
        averageRate: 4.4,
        priceBeforeDeduction: 320.0,
        currentPrice: 270.0,
        badge: 'Hot',
        brand: 'hikvision'
      },
      {
        id: '67-uuid',
        productName: 'Video Kit Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 42,
        averageRate: 4.2,
        priceBeforeDeduction: 350.0,
        currentPrice: 300.0,
        badge: 'Limited',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Accessories',
    id: 'category-05-sub-7',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '68-uuid',
        productName: 'Accessory Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 80,
        averageRate: 4.5,
        priceBeforeDeduction: 60.0,
        currentPrice: 50.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '69-uuid',
        productName: 'Accessory Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 65,
        averageRate: 4.3,
        priceBeforeDeduction: 70.0,
        currentPrice: 55.0,
        badge: 'Sale',
        brand: 'hikvision'
      },
      {
        id: '70-uuid',
        productName: 'Accessory Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 50,
        averageRate: 4.1,
        priceBeforeDeduction: 80.0,
        currentPrice: 65.0,
        badge: 'New',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Line interactive Series',
    id: 'category-06-sub-1',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '68-uuid',
        productName: 'Line Interactive UPS Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        totalNumberOfRates: 30,
        alt: '',
        averageRate: 4.5,
        priceBeforeDeduction: 150.0,
        currentPrice: 120.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '69-uuid',
        productName: 'Line Interactive UPS Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 25,
        averageRate: 4.3,
        priceBeforeDeduction: 180.0,
        currentPrice: 140.0,
        badge: 'Sale',
        brand: 'hikvision'
      },
      {
        id: '70-uuid',
        productName: 'Line Interactive UPS Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 20,
        averageRate: 4.0,
        priceBeforeDeduction: 200.0,
        currentPrice: 160.0,
        badge: 'Limited',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Standby Series',
    id: 'category-06-sub-2',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '71-uuid',
        productName: 'Standby UPS Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 40,
        averageRate: 4.6,
        priceBeforeDeduction: 130.0,
        currentPrice: 100.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '72-uuid',
        productName: 'Standby UPS Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 35,
        averageRate: 4.4,
        priceBeforeDeduction: 150.0,
        currentPrice: 120.0,
        badge: 'Hot',
        brand: 'hikvision'
      },
      {
        id: '73-uuid',
        productName: 'Standby UPS Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 28,
        averageRate: 4.2,
        priceBeforeDeduction: 170.0,
        currentPrice: 140.0,
        badge: 'Out Of Stock',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Online Series',
    id: 'category-06-sub-3',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '74-uuid',
        productName: 'Online UPS Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 50,
        averageRate: 4.7,
        priceBeforeDeduction: 250.0,
        currentPrice: 200.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '75-uuid',
        productName: 'Online UPS Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 45,
        averageRate: 4.5,
        priceBeforeDeduction: 280.0,
        currentPrice: 230.0,
        badge: 'Sale',
        brand: 'hikvision'
      },
      {
        id: '76-uuid',
        productName: 'Online UPS Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 40,
        averageRate: 4.3,
        priceBeforeDeduction: 300.0,
        currentPrice: 250.0,
        badge: 'Limited',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Brackets',
    id: 'category-07-sub-1',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '77-uuid',
        productName: 'Bracket Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 60,
        averageRate: 4.4,
        priceBeforeDeduction: 20.0,
        currentPrice: 15.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '78-uuid',
        productName: 'Bracket Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 55,
        averageRate: 4.3,
        priceBeforeDeduction: 25.0,
        currentPrice: 20.0,
        badge: 'Sale',
        brand: 'hikvision'
      },
      {
        id: '79-uuid',
        productName: 'Bracket Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 50,
        averageRate: 4.2,
        priceBeforeDeduction: 30.0,
        currentPrice: 25.0,
        badge: 'Out Of Stock',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Hard Drives',
    id: 'category-07-sub-2',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '80-uuid',
        productName: 'Hard Drive Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 70,
        averageRate: 4.6,
        priceBeforeDeduction: 80.0,
        currentPrice: 60.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '81-uuid',
        productName: 'Hard Drive Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 65,
        averageRate: 4.4,
        priceBeforeDeduction: 90.0,
        currentPrice: 70.0,
        badge: 'Hot',
        brand: 'hikvision'
      },
      {
        id: '82-uuid',
        productName: 'Hard Drive Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 60,
        averageRate: 4.3,
        priceBeforeDeduction: 100.0,
        currentPrice: 80.0,
        badge: 'Limited',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Card Memories',
    id: 'category-07-sub-3',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '83-uuid',
        productName: 'Card Memory Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 80,
        averageRate: 4.5,
        priceBeforeDeduction: 40.0,
        currentPrice: 30.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '84-uuid',
        productName: 'Card Memory Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 75,
        averageRate: 4.4,
        priceBeforeDeduction: 50.0,
        currentPrice: 35.0,
        badge: 'Sale',
        brand: 'hikvision'
      },
      {
        id: '85-uuid',
        productName: 'Card Memory Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 70,
        averageRate: 4.2,
        priceBeforeDeduction: 60.0,
        currentPrice: 45.0,
        badge: 'New',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Power Supplies',
    id: 'category-07-sub-4',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '86-uuid',
        productName: 'Power Supply Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 55,
        averageRate: 4.5,
        priceBeforeDeduction: 60.0,
        currentPrice: 50.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '87-uuid',
        productName: 'Power Supply Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 50,
        averageRate: 4.4,
        priceBeforeDeduction: 70.0,
        currentPrice: 55.0,
        badge: 'Hot',
        brand: 'hikvision'
      },
      {
        id: '88-uuid',
        productName: 'Power Supply Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 45,
        averageRate: 4.2,
        priceBeforeDeduction: 80.0,
        currentPrice: 60.0,
        badge: 'Limited',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Cables',
    id: 'category-07-sub-5',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '89-uuid',
        productName: 'Cable Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 55,
        averageRate: 4.5,
        priceBeforeDeduction: 60.0,
        currentPrice: 50.0,
        badge: '',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Switches',
    id: 'category-08-sub-1',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '90-uuid',
        productName: 'Network Switch Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 60,
        averageRate: 4.8,
        priceBeforeDeduction: 120.0,
        currentPrice: 100.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '91-uuid',
        productName: 'Network Switch Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 50,
        averageRate: 4.6,
        priceBeforeDeduction: 140.0,
        currentPrice: 110.0,
        badge: 'Sale',
        brand: 'hikvision'
      },
      {
        id: '92-uuid',
        productName: 'Network Switch Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 45,
        averageRate: 4.4,
        priceBeforeDeduction: 160.0,
        currentPrice: 130.0,
        badge: 'Limited',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Routers',
    id: 'category-08-sub-2',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '93-uuid',
        productName: 'Router Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 70,
        averageRate: 4.7,
        priceBeforeDeduction: 90.0,
        currentPrice: 75.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '94-uuid',
        productName: 'Router Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 65,
        averageRate: 4.5,
        priceBeforeDeduction: 110.0,
        currentPrice: 85.0,
        badge: 'Hot',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Access Points',
    id: 'category-08-sub-3',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '95-uuid',
        productName: 'Access Point Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 40,
        averageRate: 4.6,
        priceBeforeDeduction: 80.0,
        currentPrice: 65.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '96-uuid',
        productName: 'Access Point Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 35,
        averageRate: 4.4,
        priceBeforeDeduction: 100.0,
        currentPrice: 80.0,
        badge: 'Sale',
        brand: 'hikvision'
      },
      {
        id: '97-uuid',
        productName: 'Access Point Model C',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 30,
        averageRate: 4.2,
        priceBeforeDeduction: 120.0,
        currentPrice: 95.0,
        badge: 'Limited',
        brand: 'hikvision'
      }
    ]
  },
  {
    subCategoryName: 'Cables',
    id: 'category-08-sub-4',
    imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
    children: [
      {
        id: '98-uuid',
        productName: 'Network Cable Model A',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 90,
        averageRate: 4.5,
        priceBeforeDeduction: 20.0,
        currentPrice: 15.0,
        badge: '',
        brand: 'hikvision'
      },
      {
        id: '99-uuid',
        productName: 'Network Cable Model B',
        imgSrc: '/featured/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 80,
        averageRate: 4.3,
        priceBeforeDeduction: 25.0,
        currentPrice: 20.0,
        badge: 'Hot',
        brand: 'hikvision'
      },
      {
        id: '100-uuid',
        productName: 'Network Cable Model C',
        imgSrc: '/nav-link-imgs/Hikvision-DS-2CE5AD3T-AVPIT3ZF.png',
        alt: '',
        totalNumberOfRates: 70,
        averageRate: 4.2,
        priceBeforeDeduction: 30.0,
        currentPrice: 25.0,
        badge: 'New',
        brand: 'hikvision'
      }
    ]
  }
];

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get('category');

  if (!category) {
    return new Response(JSON.stringify(productsData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  if (category) {
    return getProductsCategory(category);
  }
  return NextResponse.json(
    {
      error: 'Category search params is missing or url is not correct'
    },
    { status: 400 }
  );
}

const getProductsCategory = (category: string) => {
  // Decode the category name to handle spaces and special characters
  const decodedCategory = decodeURIComponent(category);

  const filteredData = productsData.find(
    (item) => item.subCategoryName === decodedCategory
  );

  if (!filteredData) {
    return NextResponse.json(
      { error: 'No products found for the given category' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    data: filteredData,
    error: null,
    status: 200
  });
};
