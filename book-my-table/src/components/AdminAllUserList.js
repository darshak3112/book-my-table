import React from 'react'

const AdminAllUserList = (props) => {
    const { UserItem, deleteuser } = props;

    return (
        <tr>
            <td>{UserItem._id}</td>
            <td>{UserItem.Email}</td>
            <td>{UserItem.Mobile_no}</td>
            <td>{UserItem.Date}</td>
            <td><i style={{ cursor: 'pointer' }} className="fas fa-trash mx-2" onClick={() => deleteuser(UserItem._id)}></i></td>
        </tr>
    )
}

export default AdminAllUserList