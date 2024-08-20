import ImageWrapper from '../UI/ImageWrapper';
import ScrollerComponent from '../UI/ScrollerComponent';

function Partners() {
  return (
    <div className='bg-blue-sky-ultralight container py-[50px]'>
      <ScrollerComponent>
        <ImageWrapper imgSrc='/partners/Ezviz.svg' alt='ezviz logo' />
        <ImageWrapper
          imgSrc='/partners/hikvision.svg'
          alt='ezviz logo'
        />
        <ImageWrapper
          imgSrc='/partners/zkteco.svg'
          alt='ezviz logo'
        />
        <ImageWrapper
          imgSrc='/partners/Commax.svg'
          alt='ezviz logo'
        />
        <ImageWrapper imgSrc='/partners/cyber.svg' alt='ezviz logo' />
        <ImageWrapper imgSrc='/partners/syble.svg' alt='ezviz logo' />
        <ImageWrapper
          imgSrc='/partners/datalogic.svg'
          alt='ezviz logo'
        />
        <ImageWrapper
          imgSrc='/partners/xprinter.svg'
          alt='ezviz logo'
        />
        <ImageWrapper
          imgSrc='/partners/rongta.svg'
          alt='ezviz logo'
        />
        <ImageWrapper
          imgSrc='/partners/tp-link.svg'
          alt='ezviz logo'
        />
      </ScrollerComponent>
    </div>
  );
}

export default Partners;
