import { useState } from "react";

// interface IProps {
//     handleNextBtn : () => void,
//     questionsCollection: {
//         question: string;
//         options: [string, string, string, string];
//         ans: string
//     }

const Quiz = (props: any) => {
    const questionsCollection = props.questionsCollection;
    const result = questionsCollection.ans;
    const [showAns, setShowAns] = useState<string>("");
    const options1 = questionsCollection.options[0];
    const options2 = questionsCollection.options[1];
    const options3 = questionsCollection.options[2];
    const options4 = questionsCollection.options[3];
    const handleNextBtn = props.handleNextBtn;
    
    const showResult = (data: string) => {
        result === data ? setShowAns("Your answer is correct"): setShowAns("Your answer is incorrect");
    }
    const AnsEmpty = () => {
        setShowAns("");
        handleNextBtn()
    }

    return (
        <div>
            <h3>{questionsCollection.question}</h3>
            
            <div>
                <button onClick={()=>showResult(options1)} style={{margin: "10px"}}>{options1}</button>
                <button onClick={()=>showResult(options2)} style={{margin: "10px"}}>{options2}</button>
                <button onClick={()=>showResult(options3)} style={{margin: "10px"}}>{options3}</button>
                <button onClick={()=>showResult(options4)} style={{margin: "10px"}}>{options4}</button>
            </div>
            {
                showAns === "Your answer is incorrect" ? <p style={{color:"red"}}>{showAns}</p>  : <p style={{color:"green"}}>{showAns}</p>
            }
            <button onClick={AnsEmpty} style={{margin: "10px", padding:"7px 30px", fontSize:"15px"}}>Next</button>
        </div>
    );
};

export default Quiz;