
export const searchBook = async(keyword) => {
    console.log("Search Books")
    const endpoint = 'https://www.googleapis.com/books/v1'
    const query = `${endpoint}/volumes?q=${keyword}`
    const res = await fetch(query);
    const data = await res.json();
    const items = data.items.map(item => {
        const info = item.volumeInfo;
            return {
                id: item.id,
                title: info.title,
                pageCount: info.pageCount
            }
        })
    console.log(items)
    return items
}