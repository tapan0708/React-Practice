

function ListData() {
    const numArray = [1, 2, 3, 4, 5];
    const userData = {
        user: [
            { id: 1, name: "Test", data: "lorem" },
            { id: 2, name: "Test2", data: "lorem2" }
        ]
    }
    return (
        <>
            <div class="content-center w-100">
                <h1>Hey I am Listing Data</h1>
                <ul>
                    {userData.user.map((element) => <li>{element.name}</li>)}
                    {numArray.map((element) => <li>{element}</li>)}
                </ul>
                

            </div>
        </>
    );
};

export default ListData;