import { useParams } from 'react-router'
export default function Greetings(){
    const { name } = useParams()
    return (
        <h1>Hello, {name}!</h1>
    )
}