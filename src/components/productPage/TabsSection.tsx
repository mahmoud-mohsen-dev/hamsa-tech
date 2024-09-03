import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { v4 } from 'uuid';

interface DescriptionType {
  heading?: string | undefined;
  p?: string | undefined;
  img?:
    | {
        src: string;
        alt?: string;
      }
    | undefined;
  alt?: string | undefined;
  ul?: string[] | undefined;
}

interface TypeProps {
  moreDetails: {
    description: DescriptionType[];
  };
}

function ContentOfDesctiption({
  description
}: {
  description: DescriptionType;
}) {
  const keys = Object.keys(description);

  const convertItem = (itemKey: string) => {
    switch (itemKey) {
      case 'p':
        return (
          <p className='mx-[50px] mt-3 max-w-[75ch] text-base font-normal text-blue-gray-medium'>
            {description.p}
          </p>
        );
      case 'img':
        return (
          <img
            src={description.img?.src}
            alt={description.alt}
            className='block h-[660px] w-full object-cover'
          />
        );
      case 'heading':
        return (
          <h2 className='mx-[50px] mt-4 text-lg font-semibold text-blue-normal'>
            {description.heading}
          </h2>
        );
      case 'ul':
        return (
          <ul className='mx-[65px] mt-3 list-disc'>
            {description.ul?.map((item) => (
              <li key={v4()}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };
  const elements = keys.map((keyName) => {
    return <div key={v4()}>{convertItem(keyName)}</div>;
  });

  return <div className='w-full'>{elements}</div>;
}

function TabsSection({ moreDetails }: TypeProps) {
  //   const onChange = (key: string) => {
  //     console.log(key);
  //   };
  const items: TabsProps['items'] = [
    {
      key: 'tab-1',
      label: <h3 className='text-xl font-semibold'>Description</h3>,
      children: (
        <div className='w-full'>
          {moreDetails.description.map((item) => (
            <ContentOfDesctiption description={item} key={v4()} />
          ))}
        </div>
      )
    },
    {
      key: 'tab-2',
      label: <h3 className='text-xl font-semibold'>Specification</h3>,
      children: 'Content of Tab Pane 2'
    },
    {
      key: 'tab-3',
      label: <h3 className='text-xl font-semibold'>Reviews</h3>,
      children: 'Content of Tab Pane 3'
    }
  ];

  return (
    <Tabs defaultActiveKey='tab-1' items={items} className='w-full' />
  );
}

export default TabsSection;
