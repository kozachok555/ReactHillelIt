import { useState, useEffect } from "react";
import './Smile.css'
const smileArray = [
    {name: "smileOne",label: "😀"},
    {name: "smileTwo",label: "😁"},
    {name: "smileThree",label: "😝"},
    {name: "smileFour",label: "😬"},
    {name: "smileFive",label: "😪"}
]
const SmileItem = ({onClick, label})=>{
    return <p onClick={onClick}>{label}</p>
}
const SmileResults = ({smileCounts})=>{
    const [winner,setWinner] = useState(false)
    return(<div>
            <div className="results">
                <p>{smileCounts.smileOne}</p>
                <p>{smileCounts.smileTwo}</p>
                <p>{smileCounts.smileThree}</p>
                <p>{smileCounts.smileFour}</p>
                <p>{smileCounts.smileFive}</p>
            </div>
            <button className="show-results" onClick={()=>{
                setWinner(true)
            }}>
                Show Results
            </button>
            {winner && <Winner smileCounts={smileCounts}/>}
        </div>
    )
}
const Winner = ({smileCounts})=>{
    const getWinner = (counts)=>{
        const smileCountsArr = Object.entries(counts)
        const [winnerKey, winnerValue] = smileCountsArr.reduce(
            (max, current) => (current[1] > max[1] ? current : max),
            ["", 0]
        );
        return { winnerKey, winnerValue };
    }
    const winner = getWinner(smileCounts)
    return(
        <div>
            <h2>Результати Голосування:</h2>
            <p>Переможець:</p>
            <div>{smileArray.map(({name,label})=>{
                if(name === winner.winnerKey){
                    return <p>{label}</p>
                }
                return null
            })}</div>
        </div>
    )
}

function Smile(){
    const [visible,setVisible] = useState(false)
    const [allowClick,setAllowClick] = useState(true)
    const [smileCounts,setSmileCounts] = useState({
        smileOne: 3,
        smileTwo: 5,
        smileThree: 2,
        smileFour: 1,
        smileFive: 9,
    })
    useEffect(() => {
        const savedCounts = localStorage.getItem("smileCounts");
        if (savedCounts) {
            setSmileCounts(JSON.parse(savedCounts));
        }
    }, []);
    const voteCount = (smile)=>{
        setSmileCounts((prev)=>{
            const updatedCounts = {...prev,[smile]: prev[smile] + 1};
            localStorage.setItem("smileCounts", JSON.stringify(updatedCounts));
            return updatedCounts;
            });
        setAllowClick(false);
    };
    const handlerOnClick = (name)=>{
        if(allowClick){
            voteCount(name)
            setVisible(true)
        }
    }
    return(
        <div className="Smile">
            <p className="vote-text">Голосування за накращий смайлик</p>
            <div className="smile-list">
                {smileArray.map(({name,label})=>{
                    return <SmileItem onClick={()=>{handlerOnClick(name)}} label = {label}/>
                })}
           </div>
            {visible && <SmileResults smileCounts={smileCounts}/>}
        </div>
    )
}
export default Smile;