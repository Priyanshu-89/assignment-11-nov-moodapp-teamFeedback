import { useState } from "react";
import MemberCard from "./components/MemberCard";

// ----------- css for team feedback board----------
const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
    fontFamily: "Poppins, sans-serif",
  },
  title: {
    fontSize: "28px",
    color: "#2b2b2b",
    marginBottom: "30px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  resetButton: {
    marginTop: "25px",
    backgroundColor: "#e18308ff",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
};
// --------------------- assignment Task 1 Mood Change App -----------------

function MoodComponent({ name }) {
  const [isHappy, setIsHappy] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Task 1:- Mood Change App</h1>
      <h2>Hello, {name} 👋</h2>
      <p>Current Mood: {isHappy ? "😊 Happy" : "😢 Sad"}</p>
      <button onClick={() => setIsHappy(!isHappy)} 
       style={{
    backgroundColor: isHappy ? "#4c5bafff" : "#f44336",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s ease",
  }}
        >
        Change Mood
      </button>
    </div>
  );
}


// ---------------- task 2 Team feedback Board -------------------------

export default function App() {
  const team=[
    {id:1, name:"Priyanshu"},
    {id:2, name:"Aarav"},
    {id:3, name:"Diya"},
    {id:4, name:"Neha"}
  ];

  const [feedBack, setFeedBack] = useState(
    team.reduce((acc, member)=>({...acc, [member.id]:0}), {})
  )

  const handleFeedBack=(id)=>{
    setFeedBack((prev)=>({...prev, [id]:prev[id]+1}))
  }

  const handleReset=()=>{
    const resetData={};
    team.forEach((m)=>(resetData[m.id]=0))
    setFeedBack(resetData)
  }
  return <>
  <MoodComponent name="Priyanshu" />;
  <div style={styles.container}>
    <h1>Task 2:- Team Feedback Board</h1>

    <div style={styles.cardContainer}>
      {
        team.map((member)=>(
          <MemberCard 
          key={member.id}
          name={member.name}
          count={feedBack[member.id]}
          onFeedback={()=>handleFeedBack(member.id)}
          />
        ))
      }
    </div>
<button onClick={handleReset} style={styles.resetButton}>Reset All Feedback</button>
  </div>
  </>
}
