import React from 'react'
import YorRestItem from './AdminAllUserList';

const AdminAllUser = (props) => {

    const RestInitial = []
    const [YourRestList, YoursetRestList] = useState(RestInitial);
    const getYourRestaurant = async () => {

        const response = await fetch("http://localhost:5000/api/admin/getuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token-admin": localStorage.getItem("AToken")
            },
        });
        const json = await response.json();
        console.log(json);
        YoursetRestList(json);
    };

    useEffect(() => {
        getYourRestaurant();
    }, []);

    const deleteRest = async (id) => {
        const response = await fetch(`http://localhost:5000/api/admin/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token-admin": localStorage.getItem("AToken"),
            },
        });
        const json = await response.json();
        console.log(json);
        const newrestlist = YourRestList.filter((rest) => {
            return rest._id !== id;
        });
        YoursetRestList(newrestlist);
    }

    return (
        <>
            <div className="container">
                <div className="row" >
                    <h1><center>Users List</center></h1>
                    <hr />
                    <div className="container mx-3">
                        {YourRestList.length === 0 && 'No Restaurant Added'}
                    </div>
                    {YourRestList.map((YourRestItem) => {
                        return <YorRestItem key={YourRestList._id} YourRestItem={YourRestItem} deleteuser={deleteRest} />
                    })}
                </div>
            </div>
            <div style={{ height: "40px" }}></div>
        </>
    );
};

export default AdminAllUser;