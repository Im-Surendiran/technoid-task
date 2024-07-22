import React from 'react'
import { useTranslation } from 'react-i18next';
import './Happiness.css'
const Happiness = () => {
    const { t } = useTranslation();

    return (
        <div className='happiness'>
            <div className='happiness-container'>
                <div className='happiness-left-img happiness-img'>
                    <div className='ballonImag'>
                        <img className='gsapHappinessSmokeMachine' src='https://gea-eid-p2.stocker.team/static/media/Machine.3d5f7cf7280ea0ef524e.png' alt='' />
                    </div>
                    <div className='smokeImage'>
                        <img className='gsapHappinessSmoke' src='https://gea-eid-p2.stocker.team/static/media/Smoke.7c3ff80d303113864f33.png' alt='hpysmoke' />
                    </div>
                </div>
                <div className='happiness-intro-content'>
                    <div className='section-box'>
                        <p className='section-description'>{t('description')}</p>
                        <button className='btn btn-primary download-btn'>{t('downloadBtn')}</button>
                    </div>
                </div>
                <div className='happiness-right-img happiness-img' >
                    <div className='shineImage'>
                        <div className='gsapHapinessShine'>
                            <img className='img-fit' src='https://gea-eid-p2.stocker.team/static/media/shine01.7705d396efb447290480.png'/>
                        </div>
                    </div>
                    <div className='kiteImg'>
                             <img className='gsapHappinesskite' src='data:image/png;base64,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' />
                        </div>
                </div>
            </div>
            <div className='happiness-wave' >
                <div className='wave'>
                    <img className='img-fit' src='https://gea-eid-p2.stocker.team/static/media/w3.3998d9b1f65f76d42c6c.png' />
                </div>
            </div>
        </div>
    )
}

export default Happiness