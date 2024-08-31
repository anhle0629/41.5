import React, {useState} from 'react'
import './answers'
import'./Eightball.css'
import defaultAnswer from './answers'
import { choice } from "./Random";

const Eightball = (answers = defaultAnswer) =>{
    const [answers, setAnswer] = useState({
        msg: 'Think of question', 
        color: 'black'
    })
    
    
    function handleClikc(evt){
        setAnswer(choice(answers))
    }

    return(
        <div 
            className='EightBall'
            onClick={handleClikc} 
            style={{backgroundColor: answers.color}}>
            
            <b>{answers.msg}</b>
        </div>
    )

    
}

export default Eightball


