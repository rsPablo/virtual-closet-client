/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState } from "react";

function App() {
  const [post, setPost] = useState<{ title: string; photo: any }>({
    title: "",
    photo: null,
  });

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("photo", post.photo);
    const response = await axios.post(
      "http://localhost:3000/upload",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <input
          type="file"
          placeholder="photo"
          onChange={(e) => {
            if (e.currentTarget.files) {
              console.log(":D");
              setPost({ ...post, photo: e.currentTarget.files[0] });
            }
          }}
        />
        <button>Upload</button>
      </form>
    </div>
  );
}

export default App;
