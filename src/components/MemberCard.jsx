const styles={
    card:{
        border:"2px solid #ccc",
        borderRadius:"12px",
        padding:"20px",
        width:"180px",
        textAlign:"center",
        backgroundColor:"#f8f9fa",
        boxShadow:"2px 2px 10px rgba(0,0,0,0.1)"
    },
    feedbackText:{
        fontSize:"16px",
        margin:"10px 0",
    },
    btn:{
        backgroundColor:"#2288aaff",
        color:"#dadada",
        border:"none",
        padding:"8px 16px",
        borderRadius:"6px",
        cursor:"pointer",
        fontSize:"15px",
        transition:"0.3s",
    },
}

const MemberCard = ({name, count, onFeedback}) => {
  return (
    <>
      <div style={styles.card}>
        <h3>{name}</h3>
        <p style={styles.feedbackText}>Feedback Count: {count}</p>
        <button style={styles.btn} onClick={onFeedback}>Give Feedback</button>
      </div>
    </>
  )
}

export default MemberCard
