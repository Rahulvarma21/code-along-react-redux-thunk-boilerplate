import DataFetch from "./Components/Action";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch();
    const p = useSelector((state) => state);
    console.log(p)
    return (
        <div>
            <div className="btn">
            <button onClick={() => dispatch(DataFetch())}>Fetch Data</button>
            </div>
          
            {p.items.map((p1, index) => {
                return (
                    <div key={index}>
                        <h2 style={{display:"flex",justifyContent:"center"}}>{p1.name}</h2>
                        <h3 style={{display:"flex",justifyContent:"center"}}>{p1.email}</h3>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default App;