import { Input, SearchInput } from "../components/commonUI"

const EditBook = () => {
    return (
        <div className="w-4/5 mx-auto flex flex-col items-center bg-gray-100">
            <h2 className="font-bold text-2xl mt-10 mb-10">参考書登録画面</h2>
            <SearchInput
                type="text"
                placefolderText = "参考書を入力してください"
                text = "検索"
             />
            <Input 
                type="text"
                placefolderText = "参考書名"
                value = "速読英単語　上級"
                text = "変更"
             />
            <Input 
                type="number"
                placefolderText = "ページ数"
                value = {150}
                text = "変更"
             />
            <Input 
                type="date"
                placefolderText = "開始日"
                text = "変更"
             />
            <Input 
                type="date"
                placefolderText = "終了日"
                text = "変更"
             />
            <Input 
                type="number"
                placefolderText = "1日のタスク"
                text = "変更"
             />
        </div>
    )
}

export default EditBook