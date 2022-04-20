import { useState } from "react";
import { Input, SearchArea, SearchInput } from "../components/commonUI"
import { searchBook } from "../operations"


const EditBook = () => {
    const [keyword, setKeyword] = useState("")
    const [books, setBooks] = useState([])
    // const [selectBook, setSelectBook] = useState("")

    const chageKeyword = (e) => {
        setKeyword(e.target.value)
    }
    const changeSelectBook = (e) => {
        console.log(e.target.value)
    }
    const changeBooks = (searchKeyword) => {
        const res = searchBook(searchKeyword)
        res.then((res) => {
            console.log(res)
            setBooks(res)
            console.log(books)
        })
    };

    return (
        <div className="w-4/5 mx-auto 
        flex flex-col items-center bg-gray-100">
            <h2 className="font-bold text-2xl mt-10 mb-10">参考書登録画面</h2>
            <SearchInput
                type="text"
                placefolderText = "参考書を入力してください"
                text = "検索"
                value = {keyword}
                onClick = {() => changeBooks(keyword)}
                onChange = {chageKeyword}
             />
            <SearchArea items = {books}  onChange={changeSelectBook}/>
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
             { books.length > 0 && ( books.map(book => 
                     <Input key={book.id} text={book.title} />
             ))}
        </div>
    )
}

export default EditBook