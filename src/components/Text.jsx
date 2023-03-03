import { useState } from "react"
import data from "../text_data"

const Text = ()=>{
    const [text, setText] = useState("")
    let [word, setWord] = useState("")
    let [list, setList] = useState([])
    let speacial_key = [190, 191, 222, 188]

    // Input's style
    const inputStyle = {
        width: "50%"
    }

    // Handing key press
    const handle_key = (event)=>{
        const keyPress = event.key 
        if (event.keyCode === 32){
            console.log(list)
            setList(prevData=>{
                return [...prevData, word];
            })

            // reseting the temp word
            setWord("");
        }
        
        if ((event.keyCode === 8) & (word.length > 0)) {
            setWord(prevData=>{
                return prevData.substring(0, prevData.length -1);
            })
        } else if ((event.keyCode > 64) | (event.keyCode < 91) | (event.keyCode in speacial_key)) {
            setWord(prevData=>{
                return (prevData + keyPress)
            })
        }
        
    }

    return <div>
                <div className="row textF">
                    <input className="col-6" style={inputStyle} onKeyDown={handle_key} />
                    <p className="col-6" style={{marginTop: "75px"}}>{data.substring(0, 12)}</p>
                </div>
                
            </div> 

}

export default Text;