import usePiano from '../hooks/usePiano'
import Audios from './Audios'
import Keys from "./Keys"

const Piano = () => {

    const {playNote} = usePiano()

    return <>
    <Keys playNote={playNote} />
    <Audios />
    </>

}

export default Piano