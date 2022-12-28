import {useEffect, useState} from "react";
import Link from "next/link";

const Users = ({users}) => {


    return (
        <div>
            <h1>All users</h1>
            <ul>{users.map((el, idx) => {
                return (
                    <li key={idx}>
                        <Link href={`/users/${idx + 1}`}>
                            <h2>{el.name}</h2>
                        </Link>
                    </li>
                )
            })}</ul>
        </div>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: {users}, // will be passed to the page component as props
    }
}