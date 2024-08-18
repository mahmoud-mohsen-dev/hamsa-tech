import CategoryCard from '../UI/CategoryCard';

function Categories() {
  return (
    <div className='container bg-white py-[50px]'>
      <div className='shadow-medium grid w-fit grid-cols-4'>
        <CategoryCard
          heading='Smarter Business Security'
          description='Clever security system connects your security, CCTV, lights,
        locks and more, for true seamless automation and control.'
          link='/'
          icon={
            <i className='heading-icon icomoon icon-cctv-camera2 before:text-red-primary before:absolute before:left-0 before:top-0 before:text-6xl'></i>
          }
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
            <i className='heading-icon icomoon icon-fire-alarm before:text-red-primary before:absolute before:left-0 before:top-0 before:text-6xl'></i>
          }
        />
        <CategoryCard
          heading='Smart Home Systems'
          description='Whether you’re home or away, we make smart simple, have a remote access and
                    control everything from lights, locks,...'
          link='/'
          icon={
            <i className='heading-icon icomoon icon-home-automation before:text-red-primary before:absolute before:left-0 before:top-0 before:text-6xl'></i>
          }
        />
        <CategoryCard
          heading='Access Control Devices'
          description='Effective and simple-to-use door access control systems, we offer a decade of
                    experience in planning, customizing...
                  '
          link='/'
          icon={
            <i className='heading-icon icomoon icon-smart-control before:text-red-primary before:absolute before:left-0 before:top-0 before:text-6xl'></i>
          }
        />
      </div>
    </div>
  );
}

export default Categories;
