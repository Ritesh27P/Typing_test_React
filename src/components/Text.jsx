import { useState } from "react"
import data from "../text_data"


const Text = ()=>{
    let [correctChar, setCorrectChar] = useState(true)
    let [sentenceArr, setSentenceArr] = useState(data.split(" "))
    let [sentence, setSentence] = useState(data)
    let speacial_key = [190, 191, 222, 188]


    // Handing key press
    const handle_key = (event)=>{
        const keyPress = event.key
        
        let Message = (event.target.value)
        let Message_list = Message.split(" ")
        let last_word = Message_list.at(-1)

        if (keyPress === sentence[0]){
            setSentence(prevData=>{
                return prevData.slice(1);
            })
            setCorrectChar(true)
        } else {
            setCorrectChar(false)
        }

        // If pressed space bar 
        if (event.keyCode === 32){
            if (last_word === sentenceArr[0]){
                console.log("Same word");
                setSentenceArr(prevData=>{
                    prevData.shift()
                    return prevData;
                })
            }
        }
    }

    return <div>
                <div className="row textF">
                    <input className="col-6" onKeyDown={handle_key} placeholder="Click here"/>
                    <p className="col-6" style={{marginTop: "75px"}}>{sentence}</p>
                </div>                
            </div> 

}

export default Text;