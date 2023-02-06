import Key from './Key'
import KeySharp from './KeySharp'

const Keys = ({playNote}) => {

    return (
        <div className="block w-full h-[350px] max-h-[880px] relative ">
            <Key dataKey="65" dataNote="C" playNote={playNote}>
                A
            </Key>
            <KeySharp dataKey="87" dataNote="C#" 
            left="left-[7%]" playNote={playNote}>
                W
            </KeySharp>
            <Key dataKey="83" dataNote="D" playNote={playNote}>
                S
            </Key>
            <KeySharp dataKey="69" dataNote="D#" 
            left="left-[17%]" playNote={playNote}>
                E
            </KeySharp>
            <Key dataKey="68" dataNote="E" playNote={playNote}>
                D
            </Key>
            <Key dataKey="70" dataNote="F" playNote={playNote}>
                F
            </Key>
            <KeySharp dataKey="84" dataNote="F#" 
            left='left-[37%]' playNote={playNote}>
                T
            </KeySharp>
            <Key dataKey="71" dataNote="G" playNote={playNote}>
                G
            </Key>
            <KeySharp dataKey="89" dataNote="G#" 
            left='left-[47%]' playNote={playNote}>
                Y
            </KeySharp>
            <Key dataKey="72" dataNote="A" playNote={playNote}>
                H
            </Key>
            <KeySharp dataKey="85" dataNote="A#" 
            left='left-[57%]' playNote={playNote}>
                U
            </KeySharp>
            <Key dataKey="74" dataNote="B" playNote={playNote}>
                J
            </Key>
            <Key dataKey="75" dataNote="C" playNote={playNote}>
                K
            </Key>
            <KeySharp dataKey="79" dataNote="C#" 
            left='left-[77%]' playNote={playNote}>
                O
            </KeySharp>
            <Key dataKey="76" dataNote="D" playNote={playNote}>
                L
            </Key>
            <KeySharp dataKey="80" dataNote="D#" 
            left='left-[87%]' playNote={playNote}>
                P
            </KeySharp>
            <Key dataKey="186" dataNote="E" playNote={playNote}>
                ;
            </Key>
        </div>
    )

}

export default Keys