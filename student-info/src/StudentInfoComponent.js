import React from "react";

class Student extends React.Component {
    constructor() {
        super()
        this.students = [
            {
                id: 1,
                name: 'Nguyễn Văn A',
                age: '19',
                address: 'Hải Phòng'
            },
            {
                id: 1,
                name: 'Nguyễn Văn A',
                age: '19',
                address: 'Hải Phòng'
            },
            {
                id: 1,
                name: 'Nguyễn Văn A',
                age: '19',
                address: 'Hải Phòng'
            }
        ]
    }
    

    render() {
        return (
            <div>
                <h2>Students</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.students.map((student) => (
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

}





export default Student