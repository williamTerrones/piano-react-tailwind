import { createContext } from 'react'
import { SOUNDS_LIST } from '../constants/index'
import usePiano from '../hooks/usePiano'
import Audios from './Audios'
import Keys from "./Keys"
import UISelect from './ui/Select'

//TODO: Separar esto en otro archivo
export const PianoContext = createContext({
    playNote: () => null,
    pianoSound: 'piano',
})

const { Provider } = PianoContext

const Piano = () => {

    const { playNote, setPianoSound, pianoSound } = usePiano()

    return (
        <Provider value={{
            playNote,
            pianoSound,
        }}>
            <div className='py-5'>
                <UISelect items={SOUNDS_LIST} placeholder="Elige un instrumento"
                    onChange={e => {
                        setPianoSound(e.target.value)
                    }} />
                <Keys playNote={playNote} />
                <Audios />
            </div>
        </Provider>
    )

}

export default Piano