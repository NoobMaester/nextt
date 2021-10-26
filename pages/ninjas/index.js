import Link from 'next/link'
import styles from '../../styles/Ninjas.module.css'


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {ninjas: data}
    }
}


const ninjas = ({ninjas}) => {
    return (
        <div>
            <h1 className = {styles.tit}>Ninjas Y'all</h1>
            {ninjas.map(ninja => (
                <Link href={`ninjas/${ninja.id}`} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default ninjas
