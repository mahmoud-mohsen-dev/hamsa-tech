import ArticleCard from '../UI/ArticleCard';
import SectionHeading from '../UI/SectionHeading';

function Articles() {
  return (
    <section className='container py-[50px]'>
      <SectionHeading>Recent Articles</SectionHeading>
      <div className='grid grid-cols-3 gap-10'>
        <ArticleCard
          imgSrc='/articles/image-single-post.jpg'
          alt='article one image'
          articleUrl='/'
          content={{
            categories: [
              { linkUrl: '/', linkText: 'it' },
              { linkUrl: '/', linkText: 'solutions' }
            ],
            title:
              'Three Important Things You Must Look For While Choosing Security',
            description:
              'You can quickly set up or delete access for employees, get access-triggered alerts when certain doors are opened, and quickly find video clips of access events. You can also lock a...',
            publishDate: '2024-01-01T00:00:00.000Z',
            publisher: 'mahmoud mohsen'
          }}
        />
        <ArticleCard
          imgSrc='/articles/post2.jpg'
          alt='article one image'
          articleUrl='/'
          content={{
            categories: [
              { linkUrl: '/', linkText: 'it' },
              { linkUrl: '/', linkText: 'solutions' }
            ],
            title:
              'Three Important Things You Must Look For While Choosing Security',
            description:
              'You can quickly set up or delete access for employees, get access-triggered alerts when certain doors are opened, and quickly find video clips of access events. You can also lock a...',
            publishDate: '2024-01-01T00:00:00.000Z',
            publisher: 'mahmoud mohsen'
          }}
        />
        <ArticleCard
          imgSrc='/articles/post3.jpg'
          alt='article one image'
          articleUrl='/'
          content={{
            categories: [
              { linkUrl: '/', linkText: 'it' },
              { linkUrl: '/', linkText: 'solutions' }
            ],
            title:
              'Three Important Things You Must Look For While Choosing Security',
            description:
              'You can quickly set up or delete access for employees, get access-triggered alerts when certain doors are opened, and quickly find video clips of access events. You can also lock a...',
            publishDate: '2024-01-01T00:00:00.000Z',
            publisher: 'mahmoud mohsen'
          }}
        />
      </div>
    </section>
  );
}

export default Articles;
