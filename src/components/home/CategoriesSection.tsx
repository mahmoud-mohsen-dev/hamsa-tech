import CategoryCard from '../UI/CategoryCard';
import CategoryImageWrapper from '../UI/CategoryImageWrapper';
import EmblaCarousel from '@/components/UI/embla/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import HeadingSection from '../UI/HeadingSection';

function CategoriesSection() {
  const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    loop: false
  };
  const SLIDES = [
    {
      title: 'WiFi Cameras',
      details:
        'Experience seamless security with our WiFi cameras, providing easy installation and remote access from anywhere.',
      imgSrc: '/categories/ezviz-wifi-outdoor.jpg'
    },
    {
      title: 'CCTV & IP Cameras',
      details:
        'Our advanced CCTV and IP camera solutions deliver top-tier surveillance and monitoring for comprehensive security.',
      imgSrc: '/categories/hikvision-outdoor-camera.jpg'
    },
    {
      title: 'NVR & DVR',
      details:
        'Reliable NVR and DVR systems for recording and playback of surveillance footage, ensuring thorough security coverage.',
      imgSrc: '/categories/hikvision-dvr.jpg'
    },
    {
      title: 'Fingerprints',
      details:
        'Streamline employee tracking with our fingerprint and time attendance devices, offering efficient and secure workforce management.',
      imgSrc: '/categories/zk-fingerprint.webp'
    },
    {
      title: 'Intercom',
      details:
        'Upgrade your communication systems with our premium intercom solutions, sourced to meet both residential and commercial needs.',
      imgSrc: '/categories/commax-intercom.webp'
    },
    {
      title: 'Access Control',
      details:
        'Secure your premises with advanced access control systems designed for efficient entry management and enhanced safety.',
      imgSrc: '/categories/access-control.webp'
    },
    {
      title: 'POS Equipments',
      details:
        'Upgrade your point-of-sale system with our printers, barcode scanners, and cashier drawers for efficient transactions.',
      imgSrc: '/categories/xprinter-printer.jpg'
    },
    {
      title: 'Accessories',
      details:
        'Find essential accessories like power supplies, cables, and brackets to support and optimize your security system.',
      imgSrc: '/categories/bracket-camera.jpg'
    },
    {
      title: 'UPS',
      details:
        'Ensure continuous power with our uninterruptible power supplies (UPS), providing reliable backup and protection against outages.',
      imgSrc: '/categories/ups-schneider.webp'
    },
    {
      title: 'Network',
      details:
        'Optimize connectivity with our network equipment, including switches, access points, and routers for reliable and efficient performance.',
      imgSrc: '/categories/tp-link-access-point.jpg'
    }
  ];
  return (
    <section className='categories bg-white py-20'>
      <div
        data-aos='fade-down'
        data-aos-delay='50'
        data-aos-duration='400'
        data-aos-easing='ease-out'
        data-aos-once='true'
      >
        <HeadingSection
          // heading={}
          subHeading="Whether it's protecting your home while you are on vacation or
        your family while they sleep, we will give you the peace of
        mind that should the worst happen."
        >
          <span>whole home</span>
          <span className='ml-2 text-red-shade-350'>protection</span>
        </HeadingSection>
      </div>
      {/* <CategoryCard
          heading='Smarter Business Security'
          description='Clever security system connects your security, CCTV, lights,
        locks and more, for true seamless automation and control.'
          link='/'
          icon={
            <i className='heading-icon icomoon icon-cctv-camera2 before:absolute before:left-0 before:top-0 before:text-6xl before:text-red-primary'></i>
          }
        />
        <CategoryImageWrapper
          image='/categories/camera-outdoor.png'
          alt='security camera'
        />
        <CategoryCard
          heading={
            <>
              Fire Detection & <br /> Life Safety
            </>
          }
          description="We're industry leaders in the design, installation of quality fire alarm and
                    provide systems enhance security and ensure..."
          link='/'
          icon={
            <i className='heading-icon icomoon icon-fire-alarm before:absolute before:left-0 before:top-0 before:text-6xl before:text-red-primary'></i>
          }
        />
        <CategoryImageWrapper
          image='/categories/Ezviz-wifi-camera.jpg'
          alt='security camera'
        />
        <CategoryCard
          heading='Smart Home Systems'
          description='Whether you’re home or away, we make smart simple, have a remote access and
                    control everything from lights, locks,...'
          link='/'
          icon={
            <i className='heading-icon icomoon icon-home-automation before:absolute before:left-0 before:top-0 before:text-6xl before:text-red-primary'></i>
          }
        />
        <CategoryImageWrapper
          image='/categories/Dvr.png'
          alt='security camera'
        />
        <CategoryCard
          heading='Access Control Devices'
          description='Effective and simple-to-use door access control systems, we offer a decade of
                    experience in planning, customizing...
                  '
          link='/'
          icon={
            <i className='heading-icon icomoon icon-smart-control before:absolute before:left-0 before:top-0 before:text-6xl before:text-red-primary'></i>
          }
        />
        <CategoryImageWrapper
          image='/categories/scanar-barcode-syble.png'
          alt='security camera'
        />

        <CategoryCard
          heading='Access Control Devices'
          description='Effective and simple-to-use door access control systems, we offer a decade of
                    experience in planning, customizing...
                  '
          link='/'
          icon={
            <i className='heading-icon icomoon icon-smart-control before:absolute before:left-0 before:top-0 before:text-6xl before:text-red-primary'></i>
          }
        />
        <CategoryImageWrapper
          image='/categories/printer-cashier.jpg'
          alt='security camera'
        />
        <CategoryCard
          heading='Access Control Devices'
          description='Effective and simple-to-use door access control systems, we offer a decade of
                    experience in planning, customizing...
                  '
          link='/'
          icon={
            <i className='heading-icon icomoon icon-smart-control before:absolute before:left-0 before:top-0 before:text-6xl before:text-red-primary'></i>
          }
        />
        <CategoryImageWrapper
          image='/categories/hikvision-access-control.webp'
          alt='security camera'
        />
        <CategoryCard
          heading='Access Control Devices'
          description='Effective and simple-to-use door access control systems, we offer a decade of
                    experience in planning, customizing...
                  '
          link='/'
          icon={
            <i className='heading-icon icomoon icon-smart-control before:absolute before:left-0 before:top-0 before:text-6xl before:text-red-primary'></i>
          }
        />
        <CategoryImageWrapper
          image='/categories/fingerprint.jpg'
          alt='security camera'
        />
        <CategoryCard
          heading='Access Control Devices'
          description='Effective and simple-to-use door access control systems, we offer a decade of
                    experience in planning, customizing...
                  '
          link='/'
          icon={
            <i className='heading-icon icomoon icon-smart-control before:absolute before:left-0 before:top-0 before:text-6xl before:text-red-primary'></i>
          }
        />
        <CategoryImageWrapper
          image='/categories/intercom-commax.jpg'
          alt='security camera'
        /> */}
      <div
        data-aos='fade-up'
        data-aos-delay='150'
        data-aos-duration='400'
        data-aos-easing='ease-out'
        data-aos-once='true'
      >
        <EmblaCarousel slides={SLIDES} options={OPTIONS} href='/' />
      </div>
    </section>
  );
}

export default CategoriesSection;
