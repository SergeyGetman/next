import Link from "next/link";
import cl from "./style.module.css"
import A from "../components/A";

const Index = () => {

    return (
        <div>
            <div className={cl.navbar}>
                <A href={"/"} text="Главная">Main</A>
                <A href={"/users"} text="Пользователи">Main</A>
            </div>
            <h1>Main Command</h1>
        </div>
    );
};

export default Index;