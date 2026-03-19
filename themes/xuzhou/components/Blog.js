/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

/**
 * 博文列表
 * @param {*} param0
 * @returns
 */
export const Blog = ({ posts }) => {
  const enable = siteConfig('PROXIO_BLOG_ENABLE')
  if (!enable) {
    return null
  }

  return (
    <>
      {/* <!-- ====== Blog Section Start --> */}
      <section className='bg-white pt-20 dark:bg-dark lg:pt-[120px]'>
        <div className='container mx-auto'>
          {/* 区块标题文字 */}
          <div
            className='-mx-4 flex flex-wrap justify-center wow fadeInUp'
            data-wow-delay='.2s'>
            <div className='w-full px-4 py-4'>
              <div className='mx-auto max-w-[485px] text-center space-y-4'>
                <span className='px-3 py-0.5 rounded-2xl mb-2 dark:bg-dark-1 border border-gray-200 dark:border-[#333333] dark:text-white'>
                  {siteConfig('PROXIO_BLOG_TITLE')}
                </span>

                <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                  {siteConfig('PROXIO_BLOG_TEXT_1')}
                </h2>
              </div>
            </div>
          </div>
          {/* 博客列表 此处优先展示3片文章 */}
          <div className='-mx-4 grid md:grid-cols-2 grid-cols-1'>
            {posts?.map((item, index) => {
              return (
                <div key={index} className='w-full px-4'>
                  <div
                    className='wow fadeInUp mb-10 relative overflow-hidden blog'
                    data-wow-delay='.1s'>
                    {/* 图片部分 */}
                    <SmartLink href={item?.href} className='block'>
                      {item.pageCoverThumbnail && (
                        <LazyImage
                          src={item.pageCoverThumbnail}
                          alt={item.title}
                          className='w-full h-80 object-cover rounded-xl'
                        />
                      )}
                    </SmartLink>
                    {/* 内容部分 */}
                    <div className='p-6'>
                      <h3>
                        <SmartLink
                          href={item?.href}
                          className='mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl'>
                          {item.title}
                        </SmartLink>
                      </h3>
                      {/* 摘要 */}
                      {item.summary && (
                        <p className='mb-6 text-gray-600 dark:text-gray-400 leading-relaxed'>
                          {item.summary}
                        </p>
                      )}
                      {/* 发布时间 */}
                      <div className='flex items-center text-sm text-gray-500 dark:text-gray-400'>
                        <span>{item.publishDay || item.lastEditedDay}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Blog Section End --> */}
    </>
  )
}
