import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../Slices/accountSlice'

const Accounts = () => {

    const [value, setValue] = useState(0)
    const dispatch = useDispatch()
    const amount = useSelector(state => state.accountRedcer.amount)
    const points = useSelector(state => state.bonousReducer.points)

    return (
        <>
            <div style={{ padding: "1rem" }}>
                <h1>Account component</h1>
                <h1>Amount : ${amount}</h1>
                <h1>Points: ${points}</h1>
            </div>

            <div style={{ display: "flex", gap: "2rem", padding: "2rem", alignItems: "center", justifyContent: "center" }}>
                <button style={{ padding: "12px 6px", background: "yellow", textDecoration: "none", border: "none", borderRadius: "6px" }} onClick={() => dispatch(increment())} >Increment +</button>
                <button style={{ padding: "12px 6px", background: "yellow", textDecoration: "none", border: "none", borderRadius: "6px" }} onClick={() => dispatch(decrement())}>Decrement -</button>
                <input placeholder='Enter Number' style={{ padding: "10px 5px ", textDecoration: "none", border: "none", borderRadius: "6px" }} onChange={(e) => setValue(+e.target.value)} />
                <button style={{ padding: "12px 6px", background: "yellow", textDecoration: "none", border: "none", borderRadius: "6px" }} onClick={() => dispatch(incrementByAmount(value))}>Increement by {value}+</button>
            </div>
        </>
    )
}

export default Accounts