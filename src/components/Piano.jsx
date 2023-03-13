import { SOUNDS_LIST } from '../constants/index'
import usePiano from '../hooks/usePiano'
import Audios from './Audios'
import Keys from "./Keys"
import UISelect from './ui/Select'

const Piano = () => {

    const { playNote, setPianoSound, pianoSound } = usePiano()

    return (
        <div className='py-5'>
            <UISelect items={SOUNDS_LIST} placeholder="Elige un instrumento"
            onChange={e => {
                setPianoSound(e.target.value)
            }} />
            <Keys playNote={playNote} pianoSound={pianoSound} />
            <Audios />
        </div>
    )

}

export default Piano