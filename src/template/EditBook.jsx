import { Input } from "../components/commonUI"

const EditBook = () => {
    return (
        <div>
            <h2>参考書登録画面</h2>
            <Input 
                type="text"
                placefolderText = "参考書を入力してください"
                disabled = {false}
             />
            <Input 
                type="text"
                placefolderText = "参考書名"
                value = "速読英単語　上級"
                disabled = {true}
             />
            <Input 
                type="number"
                placefolderText = "ページ数"
                value = {150}
                disabled = {true}
             />
            <Input 
                type="date"
                placefolderText = "開始日"
                disabled = {false}
             />
            <Input 
                type="date"
                placefolderText = "終了日"
                disabled = {false}
             />
            <Input 
                type="number"
                placefolderText = "1日のタスク"
                disabled = {false}
             />
        </div>
    )
}

export default EditBook