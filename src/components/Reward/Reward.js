
import { useSelector, useDispatch } from 'react-redux'
import {incrementReward} from '../../Redeucer/reward'

const Reward = () => {
    const dispatch = useDispatch()
    const reward = useSelector(state => state.rewardRedcer.reward)

    return (
        <>
            <h1>Reward comp</h1>
            <h1>Reward :${reward} </h1>
            <div style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center" }}>
                <button onClick={() => dispatch((incrementReward()))} >Reward     +</button>
            </div>
        </>
    )
}

export default Reward