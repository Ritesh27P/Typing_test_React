import { useState } from "react"
import data from "../text_data"

// Make 5 errors in typing and game over

const Text = (props)=>{
    let [sentenceArr, setSentenceArr] = useState(data.split(" "))
    let [sentence, setSentence] = useState(data)
    let [unaccuracy, setUnaccuracy] = useState(0)


    // Handing key press
    const handle_key = (event)=>{
        const keyPress = event.key
        
        let Message = (event.target.value)
        let Message_list = Message.split(" ")
        let last_word = Message_list.at(-1)


        props.st_func()

        if (keyPress === sentence[0]){
            setSentence(prevData=>{
                return prevData.slice(1);
            })
        } else {
            event.target.value = "  "
            setUnaccuracy(prevData=>prevData+1)
            console.log(unaccuracy)
        }

        // If pressed space bar 
        if (event.keyCode === 32){
            event.target.value = " "
            if (last_word === sentenceArr[0]){
                setSentenceArr(prevData=>{
                    prevData.shift()
                    return prevData;
                })
            }
        }

        if (props.time > 5) {
            clearInterval(props.nIntervalId);
            
        }
    }

    return <div>
                <div className="row textF">
                    <input className="col-6" onKeyDown={handle_key} placeholder="Click here and start Typing"/>
                    <p className="col-6" style={{marginTop: "115px"}}>{sentence.slice(0, 20)}</p>
                </div>                
            </div> 

}

export default Text;