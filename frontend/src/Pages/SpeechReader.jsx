import React, { useState } from 'react';

const SpeechReader = () => {
    const [text, setText] = useState('');
    const [speaking, setSpeaking] = useState(false);
    const synth = window.speechSynthesis;

    const speakText = () => {
        if (!speaking && text !== '') {
            const utterance = new SpeechSynthesisUtterance(text);
            setSpeaking(true);
            utterance.onend = () => {
                setSpeaking(false);
            };
            synth.speak(utterance);
        }
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className='justify-content-center text-center'>
            <div className='text-bold mt-5 mb-4'>Speech Reader</div>
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Type something to read aloud..."
                rows="4"
                cols="50"
            />
            <div className='mt-4'>
                <button onClick={speakText} disabled={speaking}>
                    {speaking ? 'Speaking...' : 'Speak'}
                </button>
            </div>
        </div>
    );
};

export default SpeechReader;
