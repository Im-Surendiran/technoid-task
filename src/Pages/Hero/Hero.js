import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from 'react-i18next';
import './Hero.css'
const Hero = () => {

    const { scrollYProgress } = useScroll();
    const { t } = useTranslation();
    return (
        <div className='hero'>
            <div className='hero-container'>
                <div className='hero-right-img header-img'>
                    <div className='hero-shine-image'>
                        <div className='shine'>
                            <div>
                                <img src='https://gea-eid-p2.stocker.team/static/media/shine01.7705d396efb447290480.png' className='gsapHeaderShine img-fit' alt='gsap' />
                            </div>
                        </div>
                    </div>
                    <div className='hero-jug-image'>
                        <div className='jug'>
                            {/* <motion.div
                                initial={{ opacity: 0, x: 150, y: 0 }}
                                animate={{ opacity: 1, x: 450, y: 80 }}
                                transition={{ duration: 1 }}
                                
                            > */}
                            <img className='jugImage' src='https://gea-eid-p2.stocker.team/static/media/preparationJug.1698288d79715908e659.png' alt='jud' />
                            {/* </motion.div> */}
                        </div>
                        <div className='buscuits'>
                            <div className='full'>
                                <img clasName='gsapfull img-fit' src='https://gea-eid-p2.stocker.team/static/media/BiscuitHalf.99411dabe1cd1477970c.png' alt='gsapfull' />
                            </div>
                            <div className='half'>
                                <img className='gsaphalf img-fit' src='https://gea-eid-p2.stocker.team/static/media/BiscuitHalf.99411dabe1cd1477970c.png' alt='gsaphalf' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hero-intro-content'>
                    {t('title') == 'English' ?
                        <div className='arContent'>
                            {/* <motion.div
                            initial={{ opacity: 0, x: 0, y: '-40vh'}}
                            animate={{ opacity: 1, x: 0, y:-200 }}
                            transition={{delay : 0.5, duration:1}}
                        > */}
                            <img src='https://gea-eid-p2.stocker.team/static/media/preparationEnTxt.2d96cd86c782a7c44799.png' className='light-preparation-Qoute' alt='introImage' />
                            <img src='https://gea-eid-p2.stocker.team/static/media/preparationEnTxtNight.cd6ca912ad87279915ef.png' className='dark-preparation-Qoute' alt='introImage' />
                            {/* </motion.div> */}
                        </div> :
                        <div className='arContent'>
                            <img src='https://gea-eid-p2.stocker.team/static/media/preparationArTxt.9922ff11ba2262c8c8da.png' className='light-preparation-Qoute' alt='introImage' />
                            <img src='https://gea-eid-p2.stocker.team/static/media/preparationArTxtNight.67645e5f9f7d414ec9a6.png' className='dark-preparation-Qoute' alt='introImage' />
                        </div>
                    }
                </div>

                <div className='hero-left-img hero-img'>
                    <div className='hero-cup-image'>
                        {/* <motion.div
                            initial={{ opacity: 0, x: 100, y: '-100vh'}}
                            animate={{ opacity: 1, x: -100, y:'-70vh' }}
                            transition={{ duration: 1 }}
                        > */}
                        <div className='intro-cup'>
                            <div>
                                <img src='https://gea-eid-p2.stocker.team/static/media/preparationCup.6c07522b1da6102d6642.png' className='gsapCup' alt='cup' />
                            </div>
                        </div>
                        <div className='intro-cup'>
                            <div>
                                <img src='https://gea-eid-p2.stocker.team/static/media/preparationCupCoffee.da595c0d3459dc820af8.png' className='gsapCupCoffee' alt='cupcofee' />
                            </div>
                        </div>
                        {/* </motion.div> */}
                    </div>
                </div>
            </div>
            <div className='preparation-bottom-images-flag'>
                <div className='celeberationLine-group'>
                    <div className='line-1'>
                        <div>
                            <img src='https://gea-eid-p2.stocker.team/static/media/flag.e8c36325290517b3d84b.png' alt='flag1' />
                            <img src='https://gea-eid-p2.stocker.team/static/media/flagM.1f8f01eb952e1f85e0cf.png' alt='flag1' clasName='img-fit' />
                        </div>
                    </div>
                    <div className='line-2'>
                        <div>
                            <img src='https://gea-eid-p2.stocker.team/static/media/flag1.a91fb9aca7cfb61a6585.png' alt='flag2' />
                            <img src='https://gea-eid-p2.stocker.team/static/media/FlagLine2M.83d6d51bbc19c19bb089.png' alt='flag2' clasName='img-fit' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero