import React, { useState, useEffect } from 'react'
import styles from './style.module.css'

type Employee = {
    id: string
    employee_name: string
    employee_salary: number
    employee_age: string
    profile_image: string
}

const EmployeeComponent: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([])

    let dolar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummy.restapiexample.com/api/v1/employees')
                const data = await response.json()
                if (data) setEmployees(data.data)
            } catch (error) {
                // TODO service https://dummy.restapiexample.com/api/v1/employees in ocations returns 429
            }
        }
        fetchData()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h4 className={styles.title}>Employee Listing</h4>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee: Employee) => {
                        return (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.employee_name}</td>
                                <td>{employee.employee_age} years</td>
                                <td>{dolar.format(employee.employee_salary)}</td>
                                <td>{employee.profile_image}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeComponent
