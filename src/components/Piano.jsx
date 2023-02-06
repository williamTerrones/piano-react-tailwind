import usePiano from '../hooks/usePiano'
import Audios from './Audios'
import Keys from "./Keys"

const Piano = () => {

    const {playNote} = usePiano()

    return <div className='py-5'>
    <Keys playNote={playNote} />
    <Audios />
    </div>

}

export default Piano