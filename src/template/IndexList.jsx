import { Card } from "../components/commonUI"
import { useAuthContext } from "../context/AuthContext"

const IndexList = () => {
    const { user } = useAuthContext()
    return (
        <div className="p-4 flex flex-col items-center justify-around mt-12">
            {user && <h2>ようこそ、{user.email}</h2>}
            <h2>今日のタスク</h2>
            <Card bookname="ポレポレ" pageVolume={10}/>
            <Card bookname="速読英単語" pageVolume={10}/>
            <Card bookname="国際情報入門" pageVolume={10}/>
        </div>
    )
}

export default IndexList