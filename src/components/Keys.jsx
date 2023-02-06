import { AUDIOS_LIST } from '../constants/audios'
import Key from './Key'
import KeySharp from './KeySharp'

const Keys = ({ playNote }) => {

    return (
        <div className="block w-full h-[350px] max-h-[880px] relative ">
            {
                AUDIOS_LIST.map((e, i) => {

                    if (!e.left) {
                        return <Key {...e} playNote={playNote} key={i}>
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