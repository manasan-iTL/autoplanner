import {CommonButton} from '../components/commonUI'
const Detail = (props) => {
    return (
        <div>
            <div>
                <h2 >{props.text}</h2>
                <CommonButton text="削除" />
            </div>
            <div>
                <p>{props.day}日連続でタスク達成</p>
                <p>このまま継続していこう！！</p>
            </div>
            <div>
                <h2>進捗状況</h2>
                <div>
                    グラフ
                </div>
                <h2>{props.percent}%達成</h2>
            </div>
            <div>
                <p>残り日数：{props.left}日</p>
                <p>明日も頑張ろう。</p>
            </div>
        </div>
    )
}

export default Detail