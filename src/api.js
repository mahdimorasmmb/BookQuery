const baseAddress = "http://localhost:4000";

export const getAllBooks = async () => {
  const response = await fetch(`${baseAddress}/books/`);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};

export const updateBook = async ({ id, ...data }) => {
  const response = await fetch(`${baseAddress}/books/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getBook = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const response = await fetch(`${baseAddress}/books/${id}`);

  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const removeBook = async (id) => {
  const response = await fetch(`${baseAddress}/books/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
};

export const createBook = async (data)=>{
  const response = await fetch(`${baseAddress}/books/`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
}
