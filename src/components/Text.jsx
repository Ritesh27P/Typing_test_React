import { useState } from "react"
import data from "../text_data"

const Text = ()=>{
    let [message, setMessage] = useState("Ritesh")
    let [words, setWords] = useState(data)
    let [list, setList] = useState([])
    let [dataList, setDataList] = useState(data.split(" "))
    let speacial_key = [190, 191, 222, 188]

    // Input's style
    const inputStyle = {
        width: "50%"
    }

    let list_data = data.split(" ")
    setMessage(list_data[0])

    // Handing key press
    const handle_key = (event)=>{
        const keyPress = event.key
        
        let Message = (event.target.value)
        let Message_list = Message.split(" ")
        let last_word = Message_list.at(-1)

        if (message.substring(0, 1) === event.key){
            setMessage(prevData=>{
                return prevData.substring(1);
            })
            setWords(prevData=>{ 
                return prevData.substring(1);
            })
        }
        if (event.keyCode === 32){
            console.log(list)
            setDataList(prevData=>{
                return prevData.shift()
            })
            
        }

        
    }

    return <div>
                <div className="row textF">
                    <input className="col-6" style={inputStyle} onKeyDown={handle_key} />
                    <p className="col-6" style={{marginTop: "75px"}}>{data.substring(0, 15)}</p>
                </div>
                
            </div> 

}

export default Text;