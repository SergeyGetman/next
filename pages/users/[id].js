import {useRouter} from "next/router";
import style from "../../style/user.module.scss"

export default function User () {

    const router = useRouter()
    console.log('this is router', router)
    const {query} = router;
    console.log('this is query', query)
    return (
        <div className={style.block}>
            <h1>
                {`Пользователь number ${query.id}`}
            </h1>

        </div>
    )
}