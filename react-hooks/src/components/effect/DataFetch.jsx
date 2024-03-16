import { useEffect, useState } from "react";
import axios from "axios";

export default function DataFetch() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idForButton, setIdForButton] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idForButton}`)
    .then(res => {
      console.log(res.data);
      setPost(res.data);
    })
    .catch(e => console.log(e));
  }, [idForButton]);

  const handleClick = () => {
    setIdForButton(id);
  }

  return (
    <>
      <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
        <button type="button" onClick={handleClick}>Show Post</button>
        <h4 key={post.id}>{post.title}</h4>
    </>
  );
}