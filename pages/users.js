import {useState, useEffect} from 'react'
import Link from "next/link";
import MainContainer from "../components/MainContainer";
const Users = ({users}) => {

    return (
        <MainContainer keywords={"users next js"}>
            <h1>Cписок пользователей</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <p>{user.name}</p>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()

    return {
        props: {users},
    }
}
