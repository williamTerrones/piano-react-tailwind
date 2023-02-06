import Key from "./Key"

const KeySharp = ({ children, dataKey, dataNote, left, playNote }) => {

    return (
        <Key dataKey={dataKey} dataNote={dataNote} playNote={playNote}
        className={`w-[6%] h-[60%] bg-black text-[#eee] top-0 z-[3] ${left} `}
        position='absolute' baseClassName="" >
            {children}
        </Key>
    )

}

export default KeySharp