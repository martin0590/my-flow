import formatTodoForAI from "./formatTodoForAI"

const fetchSuggestion = async (board: Board) => {
  const todos = formatTodoForAI(board)

  try {
    const res = await fetch("/api/generateSummary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({todos})
    })
    
    if(!res.ok) return
    const GPTdata = await res.json()
    return GPTdata
  } catch (error) {
    console.log(error)
  }
}

export default fetchSuggestion