import { useContext } from 'react'
import { AUDIOS_LIST } from '../constants/audios'
import Key from './Key'
import KeySharp from './KeySharp'
import { PianoContext } from './Piano'

const Keys = () => {

    const {pianoSound} = useContext(PianoContext)

    const colors = {
        piano:'bg-white',
        organo:'bg-yellow-900',
        acordeon:'bg-red-300'
    }

    return (
        <div className="block w-full h-[350px] max-h-[880px] relative ">
            {
                AUDIOS_LIST.map((e, i) => {

                    if (!e.left) {
                        return <Key {...e} key={i} backgroundColor={colors[pianoSound]}>
                            {e.key}
                        </Key>
                    }

                    return <KeySharp {...e} key={i}>
                        {e.key}
                    </KeySharp>

                })
            }
        </div>
    )

}

export default Keys