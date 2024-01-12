import Person from "./person";

function ListData() {
  const numArray = [1, 2, 2, 1, 5];
  const userData = {
    user: [
      { id: 1, name: "Test", data: "lorem" },
      { id: 2, name: "Test2", data: "lorem2" },
    ],
  };

  const person = [
    {
      id: 1,
      name: "rohit",
      age: 23,
      skill: "react",
    },
    {
      id: 2,
      name: "shashwat",
      age: 23,
      skill: "javascript",
    },
    {
      id: 3,
      name: "krishna",
      age: 25,
      skill: "HTML",
    },
    {
      id: 4,
      name: "Tapan",
      age: 23,
      skill: "angular",
    },
  ];

  return (
    <>
      <div className="content-center w-100">
        {person.map((data) => (
          <Person key={data.id} person={data} />
        ))}

        <h1>Hey I am Listing Data</h1>
        <ul>
          {userData.user.map((element) => (
            <li key={element.id}>{element.name}</li>
          ))}
          {numArray.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListData;
