import { CommonButton } from "."

const Card = (props) => {

    const prevPage = 0;

    return (
        <div className="w-5/6 bg-slate-200 shadow mx-auto mb-4 p-8 ">
            <p className="pb-8">参考書名: {props.bookname}</p>
            <p className="pb-8">ページ数: p{prevPage}~{props.pageVolume + prevPage} ({props.pageVolume})</p>
            <CommonButton text="完了"/>
            <CommonButton text="持ち越し"/>
        </div>
    )
}

export default Card