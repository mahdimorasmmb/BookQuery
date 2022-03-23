const baseAddress = "http://localhost:4000"

export const getAllBooks = async ()=>{
  const response = await fetch(`${baseAddress}/books`)

  if(!response.ok){
    throw new Error("Something went wrong")
  }

  return response.json()
}

export const removeBook = async (id) =>{
  const response = await fetch(`${baseAddress}/books/${id}`,{
    method:"DELETE",
  })

  if(!response.ok){
    throw new Error(response.json().message)
  }

  return true
}
