import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const notFound = () => {
    const route = useRouter();

    useEffect(()=> {
        setTimeout(()=> {
            route.push('/')
        }, 3000)
    }, [])
    
    return (
        <div className="not-found">
            <h2>Ooops...</h2>
            <h3>Nothing for you here Matey.</h3>
            <p>Go back <Link href='/'><a>Home</a></Link> </p>
        </div>
    )
}

export default notFound
