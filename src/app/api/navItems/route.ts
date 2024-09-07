import { NavItemType } from '@/types';

const navItems: NavItemType = {
  products: [
    {
      categoryName: 'Security Cameras',
      id: 'category-01',
      page: '/products/security-cameras/all',
      children: [
        {
          subCategoryName: 'Indoor HD Cameras',
          id: 'category-01-sub-1',
          imgSrc:
            '/nav-link-imgs/security-cameras/indoor-hd-camera.png',
          page: '/products/security-cameras/indoor-hd-cameras'
        },
        {
          subCategoryName: 'Outdoor HD Cameras',
          id: 'category-01-sub-2',
          imgSrc:
            '/nav-link-imgs/security-cameras/outdoor-hd-camera.png',
          page: '/products/security-cameras/outdoor-hd-cameras'
        },
        {
          subCategoryName: 'DVRS',
          id: 'category-01-sub-3',
          imgSrc: '/nav-link-imgs/security-cameras/dvr.png',
          page: '/products/security-cameras/dvrs'
        },
        {
          subCategoryName: 'Indoor Wi-Fi Cameras',
          id: 'category-01-sub-4',
          imgSrc:
            '/nav-link-imgs/security-cameras/indoor-wifi-camera.png',
          page: '/products/security-cameras/indoor-wifi-cameras'
        },
        {
          subCategoryName: 'Outdoor Wi-Fi Cameras',
          id: 'category-01-sub-5',
          imgSrc:
            '/nav-link-imgs/security-cameras/outdoor-wifi-camera.png',
          page: '/products/security-cameras/outdoor-wifi-cameras'
        },
        {
          subCategoryName: 'Indoor IP Cameras',
          id: 'category-01-sub-6',
          imgSrc:
            '/nav-link-imgs/security-cameras/indoor-ip-camera.png',
          page: '/products/security-cameras/indoor-ip-cameras'
        },
        {
          subCategoryName: 'Outdoor IP Cameras',
          id: 'category-01-sub-7',
          imgSrc:
            '/nav-link-imgs/security-cameras/outdoor-ip-camera.png',
          page: '/products/security-cameras/outdoor-ip-cameras'
        },
        {
          subCategoryName: 'NVRS',
          id: 'category-01-sub-8',
          imgSrc: '/nav-link-imgs/security-cameras/nvr.png',
          page: '/products/security-cameras/nvrs'
        }
      ]
    },
    {
      categoryName: 'POS Devices',
      id: 'category-02',
      page: '/products/pos-devices/all',
      children: [
        {
          subCategoryName: 'Receipt Printers',
          id: 'category-02-sub-1',
          imgSrc: '/nav-link-imgs/pos-devices/receipt-printer.jpg',
          page: '/products/pos-devices/receipt-printer'
        },
        {
          subCategoryName: 'Barcode Printers',
          id: 'category-02-sub-2',
          imgSrc: '/nav-link-imgs/pos-devices/barcode-printer.jpg',
          page: '/products/pos-devices/barcode-printer'
        },
        {
          subCategoryName: 'Mobile Printers',
          id: 'category-02-sub-3',
          imgSrc: '/nav-link-imgs/pos-devices/mobile-printer.jpg',
          page: '/products/pos-devices/mobile-printer'
        },
        {
          subCategoryName: 'Wired Barcode Scanners',
          id: 'category-02-sub-4',
          imgSrc: '/nav-link-imgs/pos-devices/wired-scanner.webp',
          page: '/products/pos-devices/wired-barcode-scanners'
        },
        {
          subCategoryName: 'Wireless Barcode Scanners',
          id: 'category-02-sub-5',
          imgSrc: '/nav-link-imgs/pos-devices/wireless-scanner.jpg',
          page: '/products/pos-devices/wireless-barcode-scanners'
        }
      ]
    },
    {
      categoryName: 'Time Attendance Devices',
      id: 'category-03',
      page: '/products/time-attendance-devices/all',
      children: [
        {
          subCategoryName: 'Face Devices',
          id: 'category-03-sub-1',
          imgSrc: '/nav-link-imgs/time-attendance/face.png',
          page: '/products/time-attendance-devices/face-devices'
        },
        {
          subCategoryName: 'Fingerprint Devices',
          id: 'category-03-sub-2',
          imgSrc: '/nav-link-imgs/time-attendance/fingerprint.webp',
          page: '/products/time-attendance-devices/fingerprint-devices'
        },
        {
          subCategoryName: 'Cards',
          id: 'category-03-sub-3',
          imgSrc: '/nav-link-imgs/time-attendance/cards.jpg',
          page: '/products/time-attendance-devices/cards'
        }
      ]
    },
    {
      categoryName: 'Intercom',
      id: 'category-04',
      page: '/products/intercom/all',
      children: [
        {
          subCategoryName: 'Audio Indoor Station',
          id: 'category-04-sub-1',
          imgSrc: '/nav-link-imgs/intercom/audio-indoor-station.png',
          page: '/products/intercom/audio-indoor-station'
        },
        {
          subCategoryName: 'Audio Panel',
          id: 'category-04-sub-2',
          imgSrc: '/nav-link-imgs/intercom/audio-panel.png',
          page: '/products/intercom/audio-panel'
        },
        {
          subCategoryName: 'Video Indoor Station',
          id: 'category-04-sub-3',
          imgSrc: '/nav-link-imgs/intercom/video-indoor-station.jpg',
          page: '/products/intercom/video-indoor-station'
        },
        {
          subCategoryName: 'Video Panel',
          id: 'category-04-sub-4',
          imgSrc: '/nav-link-imgs/intercom/video-panel.png',
          page: '/products/intercom/video-panel'
        },
        {
          subCategoryName: 'Audio Kits',
          id: 'category-04-sub-5',
          imgSrc: '/nav-link-imgs/intercom/audio-kit.webp',
          page: '/products/intercom/audio-kit'
        },
        {
          subCategoryName: 'Video Kits',
          id: 'category-04-sub-6',
          imgSrc: '/nav-link-imgs/intercom/video-kit.webp',
          page: '/products/intercom/video-kit'
        },
        {
          subCategoryName: 'Accessories',
          id: 'category-04-sub-7',
          imgSrc: '/nav-link-imgs/intercom/accessories.png',
          page: '/products/intercom/accessories'
        }
      ]
    },
    {
      categoryName: 'Access Control',
      id: 'category-05',
      page: '/products/access-control/all',
      children: [
        {
          subCategoryName: 'Standalone Devices',
          id: 'category-05-sub-1',
          imgSrc: '/nav-link-imgs/access-control/stand-alone.png',
          page: '/products/access-control/stand-alone'
        },
        {
          subCategoryName: 'Control Panels',
          id: 'category-05-sub-2',
          imgSrc: '/nav-link-imgs/access-control/controller.png',
          page: '/products/access-control/control-panels'
        },
        {
          subCategoryName: 'Readers',
          id: 'category-05-sub-3',
          imgSrc: '/nav-link-imgs/access-control/reader.jpg',
          page: '/products/access-control/readers'
        },
        {
          subCategoryName: 'Exit Buttons',
          id: 'category-05-sub-4',
          imgSrc: '/nav-link-imgs/access-control/exit.jpg',
          page: '/products/access-control/exit-buttons'
        },
        {
          subCategoryName: 'Accessories',
          id: 'category-05-sub-5',
          imgSrc: '/nav-link-imgs/access-control/lock.jpg',
          page: '/products/access-control/accessories'
        }
      ]
    },

    {
      categoryName: 'Sound Systems',
      id: 'category-06',
      page: '/products/sound-systems/all',
      children: [
        {
          subCategoryName: 'Amplifiers',
          id: 'category-06-sub-1',
          imgSrc: '/nav-link-imgs/sound-systems/amplifier.png',
          page: '/products/sound-systems/amplifiers'
        },
        {
          subCategoryName: 'Ceiling Speakers',
          id: 'category-06-sub-2',
          imgSrc: '/nav-link-imgs/sound-systems/ceiling-speaker.png',
          page: '/products/sound-systems/ceiling-speakers'
        },
        {
          subCategoryName: 'Wall speakers',
          id: 'category-06-sub-3',
          imgSrc: '/nav-link-imgs/sound-systems/wall-speaker.png',
          page: '/products/sound-systems/wall-speakers'
        },
        {
          subCategoryName: 'Microphones',
          id: 'category-06-sub-4',
          imgSrc: '/nav-link-imgs/sound-systems/microphone.png',
          page: '/products/sound-systems/microphones'
        },
        {
          subCategoryName: 'Audio Cables',
          id: 'category-06-sub-5',
          imgSrc: '/nav-link-imgs/sound-systems/audio-cables.jpg',
          page: '/products/sound-systems/audio-cables'
        }
      ]
    },

    {
      categoryName: 'Accessories',
      id: 'category-07',
      page: '/products/accessories/all',
      children: [
        {
          subCategoryName: 'Brackets',
          id: 'category-07-sub-1',
          imgSrc: '/nav-link-imgs/accessories/brackets.avif',
          page: '/products/accessories/brackets'
        },
        {
          subCategoryName: 'Hard Drives',
          id: 'category-07-sub-2',
          imgSrc: '/nav-link-imgs/accessories/hard-drives.avif',
          page: '/products/accessories/hard-drives'
        },
        {
          subCategoryName: 'SD Cards',
          id: 'category-07-sub-3',
          imgSrc: '/nav-link-imgs/accessories/sd-cards.png',
          page: '/products/accessories/sd-cards'
        },
        {
          subCategoryName: 'Power Supplies',
          id: 'category-07-sub-4',
          imgSrc: '/nav-link-imgs/accessories/power-supply.jpg',
          page: '/products/accessories/power-supplies'
        },
        {
          subCategoryName: 'Cables',
          id: 'category-07-sub-5',
          imgSrc: '/nav-link-imgs/accessories/cctv-cable.jpg',
          page: '/products/accessories/cables'
        }
      ]
    },
    {
      categoryName: 'Network',
      id: 'category-08',
      page: '/products/network/all',
      children: [
        {
          subCategoryName: 'Switches',
          id: 'category-08-sub-1',
          imgSrc: '/nav-link-imgs/network/switch.png',
          page: '/products/network/switch'
        },
        {
          subCategoryName: 'Routers',
          id: 'category-08-sub-2',
          imgSrc: '/nav-link-imgs/network/router.jpg',
          page: '/products/network/routers'
        },
        {
          subCategoryName: 'Access Points',
          id: 'category-08-sub-3',
          imgSrc: '/nav-link-imgs/network/access-point.jpg',
          page: '/products/network/access-point'
        },
        {
          subCategoryName: 'Cables',
          id: 'category-08-sub-4',
          imgSrc: '/nav-link-imgs/network/cable.jpg',
          page: '/products/network/cables'
        }
      ]
    },
    {
      categoryName: 'UPS Units',
      id: 'category-09',
      page: '/products/ups-units/all',
      children: [
        {
          subCategoryName: 'Line interactive Series',
          id: 'category-09-sub-1',
          imgSrc: '/nav-link-imgs/ups/line-interactive.jpg',
          page: '/products/ups-units/line-interactive-series'
        },
        {
          subCategoryName: 'Offline Series',
          id: 'category-09-sub-2',
          imgSrc: '/nav-link-imgs/ups/offline.jpeg',
          page: '/products/ups-units/offline-series'
        },
        {
          subCategoryName: 'Online Series',
          id: 'category-09-sub-3',
          imgSrc: '/nav-link-imgs/ups/online.jpg',
          page: '/products/ups-units/online-series'
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
