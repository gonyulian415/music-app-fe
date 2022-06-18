import { observer } from 'mobx-react'
import { useStores } from '@/hooks/useStores'

const Test = observer(() => {
    const { userStore } = useStores()

    return <>
        <h1>Test</h1>
        <div>{userStore.num}</div>
        <button onClick={() => userStore.add()}>+++</button>
    </>
})

export default Test