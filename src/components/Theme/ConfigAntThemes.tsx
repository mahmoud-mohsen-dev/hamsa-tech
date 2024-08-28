import React from 'react';
import { ConfigProvider } from 'antd';

const ConfigAntThemes = ({
  children
}: {
  children: React.ReactNode;
}) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#151CB9',
        borderRadius: 16
      },
      components: {
        // Button: {
        //   colorBgBase: '#17457c'
        // },
        Carousel: {
          arrowOffset: 24,
          arrowSize: 32
        }
      }
    }}
  >
    {children}
  </ConfigProvider>
);

export default ConfigAntThemes;
