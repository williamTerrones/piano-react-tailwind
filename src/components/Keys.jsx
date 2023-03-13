import { AUDIOS_LIST } from '../constants/audios'
import Key from './Key'
import KeySharp from './KeySharp'

const Keys = ({ playNote, pianoSound }) => {

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
                        return <Key {...e} playNote={playNote} key={i} backgroundColor={colors[pianoSound]}>
                            {e.key}
                        </Key>
                    }

                    return <KeySharp {...e} playNote={playNote} key={i}>
                        {e.key}
                    </KeySharp>

                })
            }
        </div>
    )

}

export default Keys