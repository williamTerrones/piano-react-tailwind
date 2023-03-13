import Key from "./Key"

const KeySharp = ({ children, dataKey, dataNote, left }) => {

    return (
        <Key dataKey={dataKey} dataNote={dataNote}
        className={`w-[6%] h-[60%] text-[#eee] top-0 z-[3] ${left} `}
        position='absolute' baseClassName="" backgroundColor="bg-black" >
            {children}
        </Key>
    )

}

export default KeySharp