import { useState } from "react"

export function InfoCard(): JSX.Element {
    const [name, setName] = useState<string>("Aron");
    const [hobbies, setHobbies] = useState<string>("basket ball");
    const [age, setAge] = useState<number>(10);
    const [visible, setVisible] = useState<boolean>(true);

    function hideAndShow() {
        setVisible(!visible)
    }
    return (
        <div>
            <button onClick={hideAndShow}> {visible?"hide":"show" }  </button>
            {
                visible && <div>
                    <p>My name is {name}</p>
                    <p>Hobbies : {hobbies}</p>
                    <p>age : {age}</p>
                </div>
            }
        </div>
    )
}