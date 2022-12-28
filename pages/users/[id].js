import {useRouter} from "next/router";
import style from "../../style/user.module.scss"

export default function User ({user}) {
    console.log('this is user', user)
    const router = useRouter()
    const {query} = router;
    return (
        <div className={style.block}>
            <h1>
                {`Пользователь number ${query.id}`}
            </h1>
            <div>
                {`Name User: ${user.name}`}
            </div>

        </div>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: {user}, // will be passed to the page component as props
    }
}