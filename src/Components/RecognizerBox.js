import React, { useContext } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function RecognizerBox() {
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition()
  const startListening  = ()=>{
    SpeechRecognition.startListening({continuous: true, language: 'en-IN'})
  }
  const stopListening = ()=>{SpeechRecognition.stopListening()}

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (

    <>
      <div className="container " style={{width: "60%", height: "90vh", border: "2px solid blue", backgroundColor: "#eefbfb"}}>
        <div className="container my-5 mx-auto" style={{width: "90%", height: "50vh", border: "2px solid black", backgroundColor: "white", scrollBehavior: 'auto smooth', overflowY: 'scroll' }}>
          {transcript}
        </div>
        <div className="container mx-4 ">
          <button type="button" className=" btn btn-primary mx-1 my-2">Copy</button>
          <button onClick={startListening} type="button" className=" btn btn-primary mx-1 my-2">Start Voice Recognition</button>
          <button onClick={stopListening} type="button" className=" btn btn-primary mx-1 my-2">Stop voice Recognition</button>
          <button onClick={resetTranscript} type="button" className="btn btn-primary mx-1 my-2" >Clear</button>
        </div>
      </div>
    </>
  );
}
