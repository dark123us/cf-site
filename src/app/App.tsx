import {useApi} from "../shared/lib/hooks/useApi";
import {useEffect} from "react";

const App = () => {

    useEffect( () => {
        const fetchdata = async () => {
            const res = await fetch(process.env.PUBLIC_URL + "/static/js/testrequest.js")
            const data = await res.text()
            console.log(data)
        }
        fetchdata().catch(console.error)

    }, [])

    const onClick = () => {
        console.log('on click')
    }
    return (
        <div className="app">
            Hello World
            <button type={"button"} onClick={onClick}>test data</button>
        </div>
    );
};
export default App;
