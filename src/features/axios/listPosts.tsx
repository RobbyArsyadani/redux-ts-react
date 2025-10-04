import axios from "axios";
import { useEffect, useState } from "react";

export default function ListPosts() {
  const [data, setData] = useState([]);

  async function addPost() {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "percobaan",
          body: "jasdja",
          userId: 190,
        }
      );
      console.log("Response dari POST: ", response.data);

      // Tambahkan data baru ke state tanpa perlu panggil getPosts lagi
      setData((prevData) => [response.data, ...prevData]);
    } catch (err) {
      console.error("Error dari POST data: ", err);
    }
  }

  async function getPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data); // Tidak perlu await untuk response.data
    } catch (err) {
      console.error("Data gagal didapat: ", err);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <button onClick={addPost}>Tambah Post</button>
      {data.map((datas) => (
        <div key={datas.id}>
          <h1>{datas.title}</h1>
          <p>{datas.body}</p>
        </div>
      ))}
    </div>
  );
}

