import { NavItemType } from '@/types';
import { v4 } from 'uuid';

const navItems: NavItemType = {
  products: [
    {
      categoryName: 'Security Cameras',
      key: v4(),
      page: '/',
      children: [
        {
          subCategoryName: 'Indoor HD Cameras',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Outdoor HD Cameras',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'DVRS',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Indoor Wi-Fi Cameras',
          key: v4(),
          imgSrc:
            '/nav-link-imgs/nav-link-img-indoor-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Outdoor Wi-Fi Cameras',
          key: v4(),
          imgSrc:
            '/nav-link-imgs/nav-link-img-outdoor-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Indoor IP Cameras',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Outdoor IP Cameras',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'NVRS',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        }
      ]
    },
    {
      categoryName: 'POS Devices',
      key: v4(),
      page: '/',
      children: [
        {
          subCategoryName: 'Receipt Printers',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Barcode Printers',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Mobile Printers',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Wired Barcode Scanners',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },

        {
          subCategoryName: 'Wireless Barcode Scanners',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        }
      ]
    },
    {
      categoryName: 'Time Attendance',
      key: v4(),
      page: '/',
      children: [
        {
          subCategoryName: 'Face',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Fingerprint',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Hybrid Biometrics',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'RFID',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        }
      ]
    },
    {
      categoryName: 'Access Control',
      key: v4(),
      page: '/',
      children: [
        {
          subCategoryName: 'Standalone Devices',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Control Panels',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Readers',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Accessories',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Exit Buttons',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        }
      ]
    },
    {
      categoryName: 'Intercoms',
      key: v4(),
      page: '/',
      children: [
        {
          subCategoryName: 'Audio Indoor Station',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Audio Panel',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Video Indoor Station',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Video Panel',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Audio Kits',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Video Kits',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Accessories',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        }
      ]
    },
    {
      categoryName: 'UPS Units',
      key: v4(),
      page: '/',
      children: [
        {
          subCategoryName: 'Line interactive Series',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Standby Series',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Online Series',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        }
      ]
    },
    {
      categoryName: 'Accessories',
      key: v4(),
      page: '/',
      children: [
        {
          subCategoryName: 'Brackets',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Hard Drives',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Card Memories',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Power Supplies',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Cables',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        }
      ]
    },
    {
      categoryName: 'Networks',
      key: v4(),
      page: '/',
      children: [
        {
          subCategoryName: 'Switches',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Routers',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Access Points',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Cables',
          key: v4(),
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        }
      ]
    }
  ],
  branches: [],
  blog: [],
  aboutUs: [],
  support: []
};

export async function GET() {
  return new Response(JSON.stringify(navItems), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
