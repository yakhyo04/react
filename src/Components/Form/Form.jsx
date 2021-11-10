import { useEffect, useState  } from 'react';
import './Form.scss';

function Form(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(true)

    useEffect(()=>{
        if (username.length > 2 && password.length > 5) {
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }, [username, password])

    function Submit(e){
        e.preventDefault();

       const response = fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: username,
                password: password
            })
        }).then(res=> console.log(res))

        const data = response;
        console.log(data)
//     async function fetchLogin(){
//         const response = await fetch('https://reqres.in/api/register',{
//         method: 'POST',
//         headers: {
//            'Content-Type' : 'application/json' 
//         },
//         body: JSON.stringify({
//             email: username,
//             password: password
//         })
//     });
//     const data = await response.json();
//     if(data){
//         window.localStorage.setItem('__auth_token__', JSON.stringify(data))
//         window.location.replace('index.html')
//     }
//     console.log(data);
// }
// fetchLogin()
}
    
    
    return(
        <>
        <div className="container">
        <form className="form" onSubmit={Submit}>
            <input className="form__input" type="text" placeholder="Your name" />
            {/* <label className="form__label" htmlFor="gender">Gender
            <select className="form__select">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            </label> */}
            <input className="form__input"  placeholder="username" type="text" onChange={(e)=> setUsername(e.target.value)} />
            <input className="form__input" placeholder="password" type="text" onChange={(e)=> setPassword(e.target.value)} />
            <button className="form__btn" type={'submit'} disabled={disabled}>{disabled ? 'You should enter at least 6 characters to input' : 'Submit'}</button>
        </form>
        </div>
        </>
    )
}

export default Form;