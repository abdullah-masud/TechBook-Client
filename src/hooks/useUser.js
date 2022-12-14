import { useEffect, useState } from "react"

const useUser = (userInfo) => {
    const [user, setUser] = useState('');

    useEffect(() => {
        const email = userInfo?.user?.email;
        const currentUser = { email: email }
        if (email) {
            fetch(`https://techbook-server.onrender.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    setUser(data)
                })
        }
    }, [userInfo])
    return [user]
}

export default useUser;