import React from 'react'
import { useTranslation } from 'react-i18next';
import './TakbeerSound.css'
const TarbeerSound = () => {
    const { t } = useTranslation();
    return (
        <div className='takbeerSound'>
            <section className='aud'>
                <div className='aud-container'>
                    <div className='shine-bottom'>
                        <div className='shine'>
                            <div className='gsapBottomShine'>
                                <img className='img-fit' src='https://gea-eid-p2.stocker.team/static/media/img15.e41f4ff76c63962447c9.png' alt='bshine' />
                            </div>
                        </div>
                    </div>
                    <div className='takbeer-img' >
                        {t('title') == 'English' ?
                            <div className='takbeer-text takbeer-en'>
                                <img src='https://gea-eid-p2.stocker.team/static/media/TakbeerENDark.cf5fc5b1d3d056560a3b.png' className='takbeerDark img-fit' alt='takbeerimg' />
                                <img src='https://gea-eid-p2.stocker.team/static/media/TakbeerENLight.6297cc1e0f17c4408a1a.png' className='takbeerLight img-fit' alt='takbeerimg' />
                            </div>
                            :
                            <div className='takbeer-text takbeer-en'>
                                <img src='https://gea-eid-p2.stocker.team/static/media/TakbeerARDark.a9a573bb495474e82440.png' className='takbeerDark img-fit' alt='takbeerimg' />
                                <img src='https://gea-eid-p2.stocker.team/static/media/preparationArTxt.9922ff11ba2262c8c8da.png' className='takbeerLight img-fit' alt='takbeerimg' />
                            </div>

                        }

                    </div>
                    <div className='aud-left-img aud-img'>
                        <div className='oud-pink-ballon' >
                            <div className='gsapPinkBallon'>
                                <img src='https://gea-eid-p2.stocker.team/static/media/OudPinkBallon.9f7218c3f16278c75f72.png' alt='pinbaloon' />
                            </div>
                        </div>
                    </div>
                    <div className='aud-intro-content' >
                        <div className='section-box'>
                            <p className='section-description' >{t('sounddescription')}</p>
                        </div>
                    </div>
                </div>
                <div className='aud-bottom-elements'>
                    <div className='oud-green-ballon'>
                        <div className='gsapOudGreenBalloon'>
                            <img src='https://gea-eid-p2.stocker.team/static/media/OudGreenBallon.3dbb0b434850613a8628.png' alt='greenbaloon' />
                        </div>
                    </div>
                    <div className='waves'>
                        <div className='aud-orange' >
                            <img src='https://gea-eid-p2.stocker.team/static/media/w2.14ae9f2896a309490bec.png' alt='orangewave' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='ButtonSection Buttontranslate'>
                <div className='ButtonContainer'>
                    <div className='buttonsectionWrap'>
                        <a className='btn btn-primary'>{t('btn1')}</a>
                        <button className='btn btn-primary'>{t('btn2')}</button>
                        <button className='btn btn-primary'>{t('btn3')}</button>
                        <button className='btn btn-primary'>{t('btn4')}</button>
                    </div>
                    </div>
                    </section>
        </div>
    )
}

export default TarbeerSound
