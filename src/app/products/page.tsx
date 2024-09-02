import CustomBreadcrumb from '@/components/products/CustomBreadcrumb';
import MenuSidebar from '@/components/products/MenuSidebar';
import ProductsContent from '@/components/UI/products/ProductsContent';
import BrandFilter from '@/components/UI/products/sidebar/BrandFilter';
import { serverfetchNavItems } from '@/services/navItemRequst';
import { getProductsCategory } from '@/services/products';
import { HomeOutlined, ProductOutlined } from '@ant-design/icons';

export async function generateMetadata({
  searchParams
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams.category || '';
  const { data } = await getProductsCategory(category);
  // console.log(data);
  return { title: `Products - ${category}` };
}

const Products = async () => {
  const { data, error } = await serverfetchNavItems();

  if (error) {
    return <div>Error fetching sidebar items</div>;
  }
  console.log(data);

  return (
    <section className='content container my-[100px]'>
      <CustomBreadcrumb
        items={[
          {
            href: '/',
            title: <HomeOutlined />
          },
          {
            href: '/products?category=Indoor%20HD%20Cameras',
            title: (
              <>
                <ProductOutlined />
                <span>All Products</span>
              </>
            )
          }
        ]}
      />
      <div className='mt-5 grid grid-cols-[250px_1fr] gap-10'>
        <aside
          style={{ borderRight: '1px solid rgba(5, 5, 5, 0.06)' }}
        >
          <h3 className='ml-[24px] w-fit text-lg text-black-medium'>
            Categories
          </h3>
          <MenuSidebar data={data} />

          <BrandFilter />
        </aside>
        <main>
          <section>
            <ProductsContent />
          </section>
        </main>
      </div>
    </section>
  );
};

export default Products;
