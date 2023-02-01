import { useState } from 'react'
import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const Employees = () => {

    const [employees, setEmployees] = useState([{

        id: 1,
        fullName: "Onu Chukwukamso",
        designation: "Javascript Developer",
        gender: "Male",
        teamName: "Frontend Team"
    },
    {
        id: 2,
        fullName: "Emmanuel Wifi",
        designation: "PHP Developer",
        gender: "Male",
        teamName: "Frontend Team"
    },
    {
        id: 3,
        fullName: "Chikeziem Nwadinobi",
        designation: "ReactJs Developer",
        gender: "Male",
        teamName: "Frontend Team"
    },
    {
        id: 4,
        fullName: "Alex Ogubuike",
        designation: "C# Developer",
        gender: "Female",
        teamName: "Backend Team"
    },
    {
        id: 5,
        fullName: "Ugochukwu Udeh",
        designation: "C# Developer",
        gender: "Male",
        teamName: "Backend Team"
    },

    {
        id: 6,
        fullName: "Ifunanya Edeh",
        designation: "Wordpress Developer",
        gender: "Female",
        teamName: "Frontend Team"
    },
    {
        id: 7,
        fullName: "Chioma Uche",
        designation: "Designer",
        gender: "Female",
        teamName: "Frontend Team"
    },
    {
        id: 8,
        fullName: "Chibuike Okafor",
        designation: "Wordpress Developer",
        gender: "Female",
        teamName: "Backend Team"
    },
    {
        id: 9,
        fullName: "Albert Tarkaa",
        designation: "Node Developer",
        gender: "Male",
        teamName: "Backend Team"
    },
    {
        id: 10,
        fullName: "Ebube Onah",
        designation: "Testing",
        gender: "Male",
        teamName: "Backend Team"
    },
    {
        id: 11,
        fullName: "Kingsley Ibeh",
        designation: "Node Developer",
        gender: "Male",
        teamName: "Backend Team"
    },
    {
        id: 12,
        fullName: "Bob Zirol",
        designation: "Javascript Developer",
        gender: "Male",
        teamName: "Frontend Team"
    },])

    return (
        <main className='container'>
            <div class='row justify-content-center mt-3 mb-3'>
                <div class='col-8'>
                    <div class='card-collection'>
                        {
                            employees.map((employee) => (
                                <div id={employee.id} className='card m-2' style={{cursor: 'pointer'}}>


                                    <img src={maleProfile} className='card-img-top' />


                                    <div className='card-body'>
                                        <h5 className='card-title'>Fullname: {employee.fullName}</h5>
                                        <p className='card-text'><b>Designation:</b> {employee.designation}</p>

                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employees;