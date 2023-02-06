const { useEffect } = require("react");

const usePiano = () => {

    const playNote = (e) => {

        const keyCode = e?.keyCode || e
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${keyCode}"]`)

        if (!audio) return;

        key.classList.add("bg-blue-300");
        audio.currentTime = 0;
        audio.play();

        setTimeout(() => {
            key.classList.remove('bg-blue-300')
        }, 330)

    }

    useEffect(() => {

        window.addEventListener("keydown", playNote);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        playNote
    }

}

export default usePiano