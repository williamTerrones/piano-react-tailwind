const { useEffect, useState } = require("react");

const usePiano = () => {


    const [pianoSound, setPianoSound] = useState('piano')

    const playNote = (e) => {

        const keyCode = e?.keyCode || e
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${keyCode}"]`)

        if (!audio) return;

        const playAudio = () => {
            key.classList.add("bg-blue-300")
            audio.currentTime = 0
            audio.play()
            removeActiveKey()
        }

        const removeActiveKey = () => {
            setTimeout(() => {
                key.classList.remove('bg-blue-300')
            }, 330)
        }

        playAudio()

    }

    useEffect(() => {
        window.addEventListener("keydown", playNote)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        playNote,
        setPianoSound,
        pianoSound,
    }

}

export default usePiano