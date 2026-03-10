/* eslint-disable @next/next/no-img-element */
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import SmartLink from '@/components/SmartLink'

// 高亮文本样式
const HighlightTextStyle = () => (
  <style jsx global>{`
    .highlight-text {
      color: #333333;
      font-weight: 600;
      position: relative;
      display: inline-block;
    }
    
    .highlight-text::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #333333;
      border-radius: 2px;
    }
    
    .dark .highlight-text {
      color: #ffffff;
    }
    
    .dark .highlight-text::after {
      background-color: #ffffff;
    }
  `}</style>
)

/**
 * 英雄大图区块
 */
export const Hero = props => {
  const config = props?.NOTION_CONFIG || CONFIG
  const PROXIO_HERO_BUTTON_1_TEXT = siteConfig(
    'PROXIO_HERO_BUTTON_1_TEXT',
    null,
    config
  )
  const PROXIO_HERO_BUTTON_2_TEXT = siteConfig(
    'PROXIO_HERO_BUTTON_2_TEXT',
    null,
    config
  )
  const PROXIO_HERO_BUTTON_2_ICON = siteConfig(
    'PROXIO_HERO_BUTTON_2_ICON',
    null,
    config
  )

  // added by xuzhou 添加相关首屏文字
  const PROXIO_HERO_DESCRIPTION_1 = siteConfig(
    'PROXIO_HERO_DESCRIPTION_1',
    null,
    config
  )
  const PROXIO_HERO_DESCRIPTION_2 = siteConfig(
    'PROXIO_HERO_DESCRIPTION_2',
    null,
    config
  ) // ended by xuzhou

  return (
    <>
      <HighlightTextStyle />
      {/* <!-- ====== Hero Section Start --> */}
      <div id='home' className='min-h-screen relative overflow-hidden bg-gradient-to-b from-transparent to-gray-50 dark:to-dark-2 flex items-center justify-center'>
        {/* 文字标题等 - 居中显示 */}
        <div className='w-full py-20 text-gray-900 dark:text-white'>
          <div className='container mx-auto'>
            <div className='w-full'>
              <div className='hero-content wow fadeInUp mx-auto max-w-4xl text-center' data-wow-delay='0.5s'>
                {/* 主标题 - 序舟 IP */}
                <div className='mb-8'>
                  <h1 className='text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight mb-2 text-gray-900 dark:text-white'>
                    {siteConfig('PROXIO_HERO_TITLE_1', null, config)}
                  </h1>
                  <div className='w-24 h-1 bg-gray-300 mx-auto my-4 dark:bg-gray-600'></div>
                </div>
                
         {/* 视觉元素 - 规则与系统的象征 */}
                <div className='flex justify-center items-center space-x-8 mb-12'>
                  <div className='rule-symbol flex flex-col items-center'>
                    <div className='w-16 h-16 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center mb-4'>
                      <span className='text-xl font-bold text-gray-900 dark:text-white'>序</span>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400'>规则 · 方法</p>
                  </div>
                  <div className='text-gray-400 dark:text-gray-500 text-2xl'>→</div>
                  <div className='system-symbol flex flex-col items-center'>
                    <div className='w-16 h-16 border-2 border-gray-300 dark:border-gray-600 rounded flex items-center justify-center mb-4'>
                      <span className='text-xl font-bold text-gray-900 dark:text-white'>舟</span>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400'>系统 · 工具</p>
                  </div>
                  <div className='text-gray-400 dark:text-gray-500 text-2xl'>→</div>
                  <div className='freedom-symbol flex flex-col items-center'>
                    <div className='w-16 h-16 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center mb-4'>
                      <span className='text-xl font-bold text-gray-900 dark:text-white'>自由</span>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400'>时间自由</p>
                  </div>
                </div>
                
                {/* 核心价值主张 */}
                <div className='mb-12'>
                  <p className='mx-auto max-w-3xl text-lg font-medium text-gray-700 dark:text-gray-300 sm:text-xl sm:leading-relaxed' dangerouslySetInnerHTML={{ __html: PROXIO_HERO_DESCRIPTION_2 ? PROXIO_HERO_DESCRIPTION_2.replace(/(系统|自由)/g, '<span class="highlight-text">$1</span>') : '' }} />
                </div>
                
               
                
                {/* 品牌哲学 */}
                <div className='max-w-2xl mx-auto'>
                  <p className='text-gray-600 dark:text-gray-400 text-center italic'>
                    以规则为基础，构建系统，
                    <br />以系统为载体，实现自由。
                  </p>
                </div>
                
                {/* 按钮组 - 暂时注释掉 */}
                {/* <ul className='mb-16 flex flex-wrap items-center justify-center gap-4'>
                  {PROXIO_HERO_BUTTON_1_TEXT && (
                    <li>
                      <SmartLink
                        href={siteConfig('PROXIO_HERO_BUTTON_1_URL', '')}
                        className='inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-center text-lg font-medium text-dark shadow-lg transition duration-300 ease-in-out hover:bg-gray-200 hover:shadow-xl transform hover:-translate-y-1'>
                        {PROXIO_HERO_BUTTON_1_TEXT}
                      </SmartLink>
                    </li>
                  )}
                  {PROXIO_HERO_BUTTON_2_TEXT && (
                    <li>
                      <SmartLink
                        href={siteConfig('PROXIO_HERO_BUTTON_2_URL', '')}
                        className='inline-flex items-center justify-center rounded-full bg-transparent border-2 border-white px-8 py-4 text-center text-lg font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark hover:shadow-xl transform hover:-translate-y-1'>
                        {PROXIO_HERO_BUTTON_2_ICON && (
                          <img className='mr-3 w-5' src={PROXIO_HERO_BUTTON_2_ICON} />
                        )}
                        {PROXIO_HERO_BUTTON_2_TEXT}
                      </SmartLink>
                    </li>
                  )}
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Hero Section End --> */}
    </>
  )
}