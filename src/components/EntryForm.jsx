import { useState } from 'react'
import { useNavigate } from 'react-router'
export default function EntryForm({ formAction }){
    const [value, setValue] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        formAction(value)
        navigate('/result');
    }

    return (
        <>
            <h1>What is your muppet name?</h1>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={(e) =>setValue(e.target.value)} placeholder="Muppet Name" />
                <button type="submit">Submit Muppet Name</button>
            </form>
        </>
    )
}