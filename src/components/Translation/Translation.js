import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Translations from '../../Data/data.json'
import './Translation.css'
const Translation = () => {
    const [language, setLanguage] = useState('ar');
    const [showLanguage, setShowLanguage] = useState('english');
    const [content,setContent]=useState({})
    const { i18n, t } = useTranslation()

    
    const handleToggle = async() => {
        console.log("xxx");
        setLanguage(language === 'en' ? 'ar' : 'en');
        console.log(language);
        i18n.changeLanguage(language) 
        await localStorage.setItem('language',language);
         
        if(language=="ar"){
            setContent(Translations.english)
            await localStorage.setItem('language',language);
            }else if(language=="en"){
            setContent(Translations.Arab)
            await localStorage.setItem('language',language);
           }
    };
    useEffect(()=> {
       if(localStorage.getItem('language') === 'en'){
            setContent(Translations.english)
             }     
        else{
            setContent(Translations.Arab)
            }
    },[])
    return (
        <div className='lang-container'>
            <button className='lang-btn' onClick={handleToggle}>{content.language}</button>
        </div>
    )
}

export default Translation
