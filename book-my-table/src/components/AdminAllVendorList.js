import React from 'react'

const AdminAllVendorList = (props) => {
    const { VendorItem, deletevendor } = props;

    return (
        <tr>
            <td>{VendorItem._id}</td>
            <td>{VendorItem.Email}</td>
            <td>{VendorItem.Mobile_no}</td>
            <td>{VendorItem.Date}</td>
            <td><i style={{ cursor: 'pointer' }} className="fas fa-trash mx-2" onClick={() => deletevendor(VendorItem._id)}></i></td>
        </tr>
    )
}
export default AdminAllVendorList