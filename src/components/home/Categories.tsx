import CategoryCard from '../UI/CategoryCard';
import CategoryImageWrapper from '../UI/CategoryImageWrapper';
import EmblaCarousel from '@/components/UI/embla/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import HeadingSection from '../UI/HeadingSection';

function Categories() {
  const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    loop: false
  };
  const SLIDES = [
    '/categories/ezviz-wifi-outdoor.jpg',
    '/categories/hikvision-outdoor-camera.jpg',
    '/categories/hikvision-dvr.jpg',
    '/categories/zk-fingerprint.webp',
    '/categories/commax-intercom.webp',
    '/categories/access-control.jpg',
    '/categories/xprinter-printer.jpg',
    '/categories/bracket-camera.jpg',
    '/categories/ups-schneider.webp',
    '/categories/tp-link-access-point.jpg'
  ];
  return (
    <div className='categories py-20'>
      <HeadingSection
        heading='whole home protection'
        subHeading="Whether it's protecting your home while you are on vacation or
        your family while they sleep, we will give you the peace of
        mind that should the worst happen."
      />
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
      <EmblaCarousel slides={SLIDES} options={OPTIONS} href='/' />
    </div>
  );
}

export default Categories;
