import React, { useEffect, useState } from 'react'
import { RadioButton } from "primereact/radiobutton";

const MultiScreenForm = () => {
    const [screen, setScreen] = useState(0)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        description: ''
    })
    useEffect(() => {
        const storedData = localStorage.getItem('formData')
        if (storedData) {
            setFormData(JSON.parse(storedData))
        }
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })

    }
    const handleSubmit = () => {
        localStorage.setItem('formData', JSON.stringify(formData))
        setScreen(screen + 1)
    }
    const handleNext = () => {
        setScreen(screen + 1)
    }
    const handlePrevious = () => {
        setScreen(screen - 1)
    }
    const handleCancle = () => {
        setScreen(0)
    }
    return (
        <>
            {
                screen == 0 && (
                    <div className='m-auto mt-6 w-4 p-2 surface-hover'>
                        <div className='ml-4'>First one </div>
                        <input type="text" name="name" className='mt-3 w-6 ml-4 border-none' placeholder='Name' value={formData.name} onChange={handleChange} />
                        <div className='mt-4 ml-4'>
                            <button onClick={handleNext}>Next</button>
                        </div>
                    </div>
                )
            }
            {
                screen == 1 && (
                    <div className='m-auto mt-6 w-4 p-2 surface-hover'>
                        <div className='p-3'>Second Page</div>
                        <div className='ml-3 mb-2'>Email</div>
                        <input type="text" name="email" placeholder='Email' className='ml-3' value={formData.email} onChange={handleChange} />
                        <div className='mt-3 ml-3'>Gender</div>
                        <div className="card flex justify-content-center">
                            <div className="flex flex-wrap gap-3">
                                <div className="flex align-items-center">
                                    <RadioButton inputId="ingredient1" name="gender" value="male" onChange={handleChange} checked={formData.gender === 'male'} />
                                    <label htmlFor="ingredient1" className="ml-2">Male</label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton inputId="ingredient2" name="gender" value="female" onChange={handleChange} checked={formData.gender === 'female'} />
                                    <label htmlFor="ingredient2" className="ml-2">Female</label>
                                </div>

                            </div>
                        </div>
                        <div>
                            <button className='ml-3 mt-3' onClick={handlePrevious}>Previous</button>
                            <button className='ml-3 mt-3' onClick={handleNext}>Next</button>
                        </div>
                    </div>
                )
            }
            {
                screen == 2 && (
                    <div className='m-auto mt-6 w-4 p-2 surface-hover'>
                        <div className='ml-4'>Third one </div>
                        <input type="text" name="description" className='mt-3 w-6 ml-4 border-none' placeholder='Name' value={formData.description} onChange={handleChange} />
                        <div className='mt-4 ml-4'>
                            <button onClick={handlePrevious}>Previous</button>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                )
            }
            {screen === 3 && (
                <div className='m-auto mt-6 w-4 p-2 surface-hover'>
                    <div className='ml-4'>Form Data:</div>
                    <ul>
                        {Object.keys(formData).map((key) => (
                            <li key={key}>
                                <strong>{key}:</strong> {formData[key]}
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleCancle}>Cancle</button>
                </div>
            )}
        </>

    )
}

export default MultiScreenForm