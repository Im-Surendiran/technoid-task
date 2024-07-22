import React, { useState, useEffect, useRef } from 'react';
import Model from '../Model/Model'
import Music from '../../assets/audio/audio.mp3'
import './Sound.css'
const Sound = () => {
    const [soundMode, setSoundMode] = useState(true);
    const [isPlay, setIsPlay] = useState(0);
   const [audio, setAudio] = useState(new Audio(Music))
    const switchSound = async () => {
        setSoundMode(!soundMode);
        if (soundMode) {
            audio.play()  
            }
        else {
            audio.pause()
         }

    }

    // useEffect(()=> {

    //     if(localStorage.getItem('data-theme') === 'light'){
    //         document.querySelector('body').setAttribute('data-theme', 'light');
    //         setSoundMode(true);
    //           }
    //     else{
    //         document.querySelector('body').setAttribute('data-theme', 'dark');
    //         setSoundMode(false);
    //          }
    // },[])
    return (
        <div>
            <input type='checkbox' id='soundmode-toggle' checked={soundMode == false} onChange={switchSound} />
            <label id='soundmode-icon' for='soundmode-toggle'>
                <svg fill="#ffffff" className='mute' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path clip-rule="evenodd" d="m2 7.5v3c0 .8.6 1.5 1.4 1.5h2.3l3.2 2.8c.1.1.3.2.4.2s.2 0 .3-.1c.2-.1.4-.4.4-.7v-.9l-7.2-7.2c-.5.2-.8.8-.8 1.4zm8 2v-5.8c0-.3-.1-.5-.4-.7-.1 0-.2 0-.3 0s-.3 0-.4.2l-2.8 2.5-4.1-4.1-1 1 3.4 3.4 5.6 5.6 3.6 3.6 1-1z" fill-rule="evenodd"></path></g></svg>
                <svg className='unmute' fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" d="M11.553 3.064A.75.75 0 0112 3.75v16.5a.75.75 0 01-1.255.555L5.46 16H2.75A1.75 1.75 0 011 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.75.75 0 01.808-.13zM10.5 5.445l-4.245 3.86a.75.75 0 01-.505.195h-3a.25.25 0 00-.25.25v4.5c0 .138.112.25.25.25h3a.75.75 0 01.505.195l4.245 3.86V5.445z"></path><path d="M18.718 4.222a.75.75 0 011.06 0c4.296 4.296 4.296 11.26 0 15.556a.75.75 0 01-1.06-1.06 9.5 9.5 0 000-13.436.75.75 0 010-1.06z"></path><path d="M16.243 7.757a.75.75 0 10-1.061 1.061 4.5 4.5 0 010 6.364.75.75 0 001.06 1.06 6 6 0 000-8.485z"></path></g></svg>
            </label>

            { status && (<Modal closeModal={() => setStatus(false)}> <p>The content of the modal</p></Modal>)}
        </div>
    )
}

export default Sound
