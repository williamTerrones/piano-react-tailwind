import KeyLetter from "./KeyLetter";

const Key = ({ 
    children, dataKey, dataNote, className, 
    position = 'relative', baseClassName='float-left w-[10%] h-[100%] bg-white',
    playNote
}) => {

    return (
        <div data-key={dataKey} onClick={() => playNote && playNote(dataKey) }
        className={`${position} key border-solid border-black border-[4px] rounded-lg block box-border z-[2] ${className} ${baseClassName} `} 
        data-note={dataNote}>
            <KeyLetter>
                {children}
            </KeyLetter>
        </div>
    )

}

export default Key