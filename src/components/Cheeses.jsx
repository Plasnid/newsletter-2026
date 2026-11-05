import { Link, Outlet } from 'react-router'
export default function Cheeses(){
    return (
        <>
            <h1>Cheeses</h1>
            <nav>
                <Link to="brie">Brie</Link> | <Link to="cheddar">Cheddar</Link>
            </nav>
            <Outlet />
        </>
    )
}