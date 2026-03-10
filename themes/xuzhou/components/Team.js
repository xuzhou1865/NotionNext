/* eslint-disable @next/next/no-img-element */
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
/**
 * 作者团队
 * @returns 
 */
export const Team = () => {
    return (
        <>
            {/* <!-- ====== Team Section Start --> */}
            <section
                id='team'
                className='overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-transparent to-gray-50 dark:to-dark-2'>
                <div className='container mx-auto px-4 md:px-6'>
                    <div className='max-w-4xl mx-auto'>
                        {/* 标题部分 */}
                        <div className='mb-12 text-center'>
                            <span className='inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gray-700 bg-gray-100 rounded-full dark:text-gray-300 dark:bg-gray-800'>
                                {siteConfig('PROXIO_ABOUT_TITLE')}
                            </span>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-dark dark:text-white mb-6'>
                                {siteConfig('PROXIO_ABOUT_TEXT_1')}
                            </h2>
                        </div>
                        
                        {/* 内容部分 */}
                        <div className='space-y-10'>
                            {/* 个人介绍 */}
                            <div className='prose prose-lg dark:prose-invert max-w-none'>
                                <p 
                                    dangerouslySetInnerHTML={{
                                        __html: siteConfig('PROXIO_ABOUT_TEXT_2')
                                    }}
                                    className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'
                                ></p>
                            </div>
                            
                            {/* 数值四宫格 */}
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pt-8'>
                                <KeyVal k={siteConfig('PROXIO_ABOUT_KEY_1')} v={siteConfig('PROXIO_ABOUT_VAL_1')} />
                                <KeyVal k={siteConfig('PROXIO_ABOUT_KEY_2')} v={siteConfig('PROXIO_ABOUT_VAL_2')} />
                                <KeyVal k={siteConfig('PROXIO_ABOUT_KEY_3')} v={siteConfig('PROXIO_ABOUT_VAL_3')} />
                                <KeyVal k={siteConfig('PROXIO_ABOUT_KEY_4')} v={siteConfig('PROXIO_ABOUT_VAL_4')} />
                            </div>
                            
                            {/* 行动按钮 */}
                            <div className='mt-12 flex flex-col sm:flex-row gap-4 justify-center'>
                                <SmartLink
                                    href={siteConfig('PROXIO_ABOUT_BUTTON_URL', '')}
                                    className='px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
                                >
                                    {siteConfig('PROXIO_ABOUT_BUTTON_TEXT', '了解更多')}
                                    <i className="pl-3 fa-solid fa-arrow-right"></i>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== Team Section End --> */}
        </>
    )
}

// 显示一组键值对
const KeyVal = ({ k, v }) => {
    if (!k) {
        return null;
    }
    return (
        <div className='text-center group transition-all duration-300 hover:scale-105'>
            <div className='text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium'>{k}</div>
            <div className='text-3xl font-bold text-dark dark:text-white'>{v}</div>
        </div>
    )
}