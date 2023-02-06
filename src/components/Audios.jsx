import React from 'react'
import { AUDIOS_LIST } from '../constants/audios'

const Audios = () => {
    return (
        <>
        {
            AUDIOS_LIST.map((e,i) => (
                <audio data-key={e.dataKey} src={e.src} key={i} />
            ))
        }
        </>
    )
}

export default Audios