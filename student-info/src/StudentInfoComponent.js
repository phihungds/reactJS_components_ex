import React from "react";
import Button from "./button";
import Input from "./input";

class Student extends React.Component {
    constructor() {
        super()
        this.state = { students :[
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
            }]
        }
        this.draft = 
          { id : '',
            name : '',
            age : '',
            address: ''
            } 
        
    }
    updateList = () => {
        this.state.students.push(this.draft)
        this.setState(this.state)
        this.draft = 
          { id : '',
            name : '',
            age : '',
            address: ''
            } 
    }
    

    render() {
        return (
            <div className="student-list">

                <h2>Students</h2>

                <Input placeholder='ID' onChange={(e) => {this.draft.id = e.target.value}} />
                <Input placeholder='Name' onChange={(e) => {this.draft.name = e.target.value}} />
                <Input placeholder='Age' onChange={(e) => {this.draft.age = e.target.value}} />
                <Input placeholder='Address' onChange={(e) => {this.draft.address = e.target.value}} />

                <Button onClick={this.updateList}>Add new student</Button> 
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
                        { 
                        this.state.students.map((student) => (
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br/>
                

            </div>
        )
    }

}





export default Student