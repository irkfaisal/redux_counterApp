
import { useSelector, useDispatch } from 'react-redux'
import { incBonus } from '../../Slices/bonousSlice'

const Bonous = () => {
    const dispatch = useDispatch()
    const amount = useSelector(state => state.accountRedcer.amount)
    const points = useSelector(state => state.bonousReducer.points)

    return (
        <>
            <div style={{ padding: "4px" }}>
                <h1>Bonous component</h1>
                <h1>Total Bonous : ${points}</h1>
                <h1>Total Amount : ${amount}</h1>
            </div>
            <div style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center" }}>
                <button style={{ padding: "12px 6px", background: "yellow", textDecoration: "none", border: "none", borderRadius: "6px" }} onClick={() => dispatch(incBonus())} >Increement +</button>
            </div>
        </>
    )
}

export default Bonous