/* eslint-disable @next/next/no-img-element */
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import SmartLink from '@/components/SmartLink'

/**
 * 英雄大图区块
 */
export const Hero = props => {
  const config = props?.NOTION_CONFIG || CONFIG

  return (
    <>
      {/* <!-- ====== Hero Section Start --> */}
      <div id='home' className='min-h-screen relative overflow-hidden bg-gradient-to-b from-transparent to-gray-50 dark:to-dark-2 flex items-center justify-center font-sans'>
        {/* 文字标题等 - 居中显示 */}
        <div className='w-full py-20 text-gray-900 dark:text-white'>
          <div className='container mx-auto'>
            <div className='w-full'>
              <div className='hero-content wow fadeInUp mx-auto max-w-4xl text-center' data-wow-delay='0.5s'>
                {/* 顶部小标题 */}
                <div className='mb-8'>
                  <p className='text-gray-500 dark:text-gray-400 text-lg'>
                    序（规则）· 舟（系统）
                  </p>
                </div>
                
                {/* 主标题 */}
                <div className='mb-8'>
                  <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-600 dark:text-gray-300 font-sans'>
                    构建基于规则的（投资）系统，实现被动收入，赢取时间自由
                  </h3>
                </div>
                
                {/* 小字使命 */}
                <div className='mb-16'>
                  <p className='text-gray-500 dark:text-gray-400 text-lg'>
                    使命：帮更多人实现人生自由
                  </p>
                </div>
                
                {/* 订阅引导模块 */}
                <div className='max-w-3xl mx-auto bg-gray-900 rounded-xl p-10 shadow-lg'>
                  <div className='text-center'>
                    <div className='mb-6'>
                      <span className='inline-block px-6 py-2 bg-gray-800 text-gray-300 text-sm font-medium rounded-full'>
                        ⭐ 小报童专栏
                      </span>
                    </div>
                    <h3 className='text-2xl sm:text-3xl font-bold text-white mb-4'>
                      《序舟好公司精选·估值评级》
                    </h3>
                    <p className='text-gray-300 mb-10 max-w-2xl mx-auto'>
                      基于规则和数据的价值发现｜动态优质公司清单与估值评级，助您理性投资决策。
                    </p>
                    <SmartLink
                      href='https://xiaobot.net/p/xz_good_company?refer=d1259880-8c91-425a-8c0d-04376ba72b1a&utm_source=thexuzhou.com&utm_medium=website&utm_campaign=xiaobot_subscribe&utm_content=home_btn'
                      className='inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-10 py-5 text-center text-lg font-bold transition duration-300 ease-in-out hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
                      前往订阅 →
                    </SmartLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Hero Section End --> */}
    </>
  )
}