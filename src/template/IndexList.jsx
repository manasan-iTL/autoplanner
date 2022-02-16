import { Card } from "../components/commonUI"

const IndexList = () => {
    return (
        <div className="p-4 flex flex-col items-center justify-around mt-12">
            <h2>今日のタスク</h2>
            <Card bookname="ポレポレ" pageVolume={10}/>
            <Card bookname="速読英単語" pageVolume={10}/>
            <Card bookname="国際情報入門" pageVolume={10}/>
        </div>
    )
}

export default IndexList