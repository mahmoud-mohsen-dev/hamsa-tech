import { NavItemType } from '@/types';

const navItems: NavItemType = {
  products: [
    {
      categoryName: 'Security Cameras',
      page: '/',
      children: [
        {
          subCategoryName: 'Indoor HD Cameras',
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Outdoor HD Cameras',
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'DVRS',
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Indoor Wi-Fi Cameras',
          imgSrc:
            '/nav-link-imgs/nav-link-img-indoor-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Outdoor Wi-Fi Cameras',
          imgSrc:
            '/nav-link-imgs/nav-link-img-outdoor-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Indoor IP Cameras',
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'Outdoor IP Cameras',
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        },
        {
          subCategoryName: 'NVRS',
          imgSrc: '/nav-link-imgs/nav-link-img-wifi-camera.png',
          page: '/'
        }
      ]
    },
    {
      categoryName: 'POS Devices',
      page: '/',
      children: [
        {
          subCategoryName: 'Receipt Printers',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Barcode Printers',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Mobile Printers',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Wired Barcode Scanners',
          imgSrc: '/',
          page: '/'
        },

        {
          subCategoryName: 'Wireless Barcode Scanners',
          imgSrc: '/',
          page: '/'
        }
      ]
    },
    {
      categoryName: 'Time Attendance',
      page: '/',
      children: [
        {
          subCategoryName: 'Face',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Fingerprint',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Hybrid Biometrics',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'RFID',
          imgSrc: '/',
          page: '/'
        }
      ]
    },
    {
      categoryName: 'Access Control',
      page: '/',
      children: [
        {
          subCategoryName: 'Standalone Devices',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Control Panels',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Readers',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Accessories',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Exit Buttons',
          imgSrc: '/',
          page: '/'
        }
      ]
    },
    {
      categoryName: 'Intercoms',
      page: '/',
      children: [
        {
          subCategoryName: 'Audio Indoor Station',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Audio Panel',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Video Indoor Station',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Video Panel',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Audio Kits',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Video Kits',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Accessories',
          imgSrc: '/',
          page: '/'
        }
      ]
    },
    {
      categoryName: 'UPS Units',
      page: '/',
      children: [
        {
          subCategoryName: 'Line interactive Series',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Standby Series',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Online Series',
          imgSrc: '/',
          page: '/'
        }
      ]
    },
    {
      categoryName: 'Accessories',
      page: '/',
      children: [
        {
          subCategoryName: 'Brackets',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Hard Drives',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Card Memories',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Power Supplies',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Cables',
          imgSrc: '/',
          page: '/'
        }
      ]
    },
    {
      categoryName: 'Networks',
      page: '/',
      children: [
        {
          subCategoryName: 'Switches',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Routers',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Access Points',
          imgSrc: '/',
          page: '/'
        },
        {
          subCategoryName: 'Cables',
          imgSrc: '/',
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
