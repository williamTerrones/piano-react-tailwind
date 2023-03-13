import KeyLetter from "./KeyLetter";

const Key = ({
    children, dataKey, dataNote, className,
    position = 'relative',
    baseClassName = 'float-left w-[10%] h-[100%]',
    backgroundColor = 'bg-white',
    playNote
}) => {

    return (
        <div data-key={dataKey} onClick={() => playNote && playNote(dataKey)}
            className={`${position} key border-solid border-black sm:hover:bg-opacity-80 border-[4px] rounded-lg block box-border z-[2] ${className} ${baseClassName} ${backgroundColor} `}
            data-note={dataNote}>
            <KeyLetter>
                {children}
            </KeyLetter>
        </div>
    )

}

export default Key