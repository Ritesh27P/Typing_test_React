import { useState } from "react";
import data from "../text_data";
import Navbar from "./Navbar";

const Text = (props)=>{
    let [sentenceArr, setSentenceArr] = useState(data.split(" "))
    let [sentence, setSentence] = useState(data)
    let [word, setWord] = useState(0)
    let [WPM, setWPM] = useState(0)
    let [wrongTyped, setWrongTyped] = useState(0)
    let [accuracy, setAccuracy] = useState(0)


    // Handing key press
    const handle_key = (event)=>{
        const keyPress = event.key
        
        let Message = (event.target.value)
        let Message_list = Message.split(" ")
        let last_word = Message_list.at(-1)
        props.st_func()

        setWord(prevData=>{
            return prevData + 1;
        })

        // check if word entered is equal to 1st element
        if (keyPress === sentence[0]){
            setSentence(prevData=>{
                return prevData.slice(1);
            })
        } else {
            event.target.value = "  "

            // counting incorrect word
            setWrongTyped(prevData=>{
                return prevData + 1;
            })
        }

        // If pressed space bar 
        if (event.keyCode === 32){
            event.target.value = " "
            if (last_word === sentenceArr[0]){

                setWord(prevData=>{
                    return prevData + 1;
                })

                setSentenceArr(prevData=>{
                    prevData.shift()
                    return prevData;
                })
            }
        }

        // Calcualting words per minute
        setWPM(prevData=>{
            if (props.time > 0){
                return Math.floor(((word/props.time) * 60)/10)
            }
        })     
        // Calculating Accuracy
        setAccuracy(prevData=>{
            if (props.time > 0){
                var gpm = ((word - wrongTyped)* 60)/10
                return (gpm)* (100/WPM)
                // return (100 - (word * (wrongTyped/word)))
                // return 
            }
        })

        if (props.time > 5) {
            clearInterval(props.nIntervalId);
            
        }
    }

    return <div>
                <div className="row textF">
                    <Navbar WPM={WPM} time={props.time} Accuracy={accuracy} />
                    <input className="col-6" onKeyDown={handle_key} placeholder="Click here and start Typing"/>
                    <p className="col-6 data" style={{marginTop: "115px"}}><span>{sentence.slice(0,1)}</span>{sentence.slice(1, 30)}</p>
                </div>                
            </div> 
}

export default Text;