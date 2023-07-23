import React, { useState } from 'react'
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";

export default function App() {

  const [istextcopy, setcopiedtext]=useState()
    const [isCopied, setCopied] = useClipboard(istextcopy);

  const start= ()=> SpeechRecognition.startListening({continuous:true})
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({  })
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <>
      

      <div className='Container'>
        <h2>Speech to text Convert</h2>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vitae.</p>


        <div className="main-content" onClick={()=>setcopiedtext(transcript)}>
          {transcript}
        </div>
        <div className="btn-style">
          <button onClick={setCopied}>
      copy clipboard {isCopied ? "Yes! 👍" : "Nahi hua! 👎"}
    </button>
          <button onClick={start}>start</button>
          <button onClick={SpeechRecognition.stopListening}>stop</button>

          

        </div>
      </div>
    </>
  )
}
