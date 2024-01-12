import React, { useState } from "react";

function UseStateObjArr() {
  const [username, setUsername] = useState("");
  const [count, setCount] = useState(3);
  const [data, setData] = useState([
    {
      id: 1,
      name: "Tapan",
      likes: 0,
      dislikes: 0,
    },
    {
      id: 2,
      name: "Rohit",
      likes: 0,
      dislikes: 0,
    },
  ]);

  const addUsername = () => {
    setCount(count + 1);
    //   setData([...data, { id: count, name: username, likes: 0, dislikes: 0 }]);
    setData((prevData) => [
      ...prevData,
      { id: count, name: username, likes: 0, dislikes: 0 },
    ]);
  };

  const removeUsername = (id) => {
    setData((prev) => prev.filter((element) => element.id != id));
  };

  const likeHandler = (id, like) => {
    const newData = data.map((item) =>
      item.id === id ? { ...item, likes: like + 1 } : item
    );
    setData(newData);
  };

  const dislikeHandler = (id, dislike) => {
    const newData = data.map((item) =>
      item.id === id ? { ...item, dislikes: dislike + 1 } : item
    );
    setData(newData);
  };

  const sortHandler = (event) => {
    const newList =
      event === "ASC"
        ? [...data].sort((a, b) => a.likes - b.likes)
        : [...data].sort((a, b) => b.likes - a.likes);
    setData(newList);
  };

  return (
    <>
      <div className="d-flex flex-column gap-5">
        <h1 className="mb-0">Playing with Object using hooks</h1>

        <div>
          <select
            className="w-25 text-center"
            onChange={(event) => sortHandler(event.target.value)}
          >
            <option>Sort</option>
            <option>ASC</option>
            <option>DSC</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Username"
            onChange={(event) => setUsername(event.target.value)}
          ></input>
          <h2>{username}</h2>
          <button
            className="btn btn-success w-100"
            onClick={addUsername}
            disabled={username == ""}
          >
            Add text
          </button>
        </div>

        <div>
          {data.map((data) => (
            <div key={data.id}>
              <h5 className="alert alert-primary w-100 d-flex justify-content-between">
                {data.name}
                <div>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      likeHandler(data.id, data.likes);
                    }}
                  >
                    Like is {data.likes}
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      dislikeHandler(data.id, data.dislikes);
                    }}
                  >
                    Dislike is {data.dislikes}
                  </button>
                </div>
                <button
                  className="btn-close"
                  onClick={() => removeUsername(data.id)}
                ></button>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UseStateObjArr;
