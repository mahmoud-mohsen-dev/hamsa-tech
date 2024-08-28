import { HomeOutlined, ProductOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

const CustomBreadcrumb: React.FC = () => (
  <Breadcrumb
    items={[
      {
        href: '/',
        title: <HomeOutlined />
      },
      {
        href: '/products',
        title: (
          <>
            <ProductOutlined />
            <span>All Products</span>
          </>
        )
      }
      // {
      //   href: '/products/security-cameras',
      //   title: 'Security Cameras'
      // }
    ]}
  />
);

export default CustomBreadcrumb;
