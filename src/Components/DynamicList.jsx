function DynamicList() {

    /* This is where the item list will be pulled from the database
    *  This list of baybies is temp for now */
    function getItemList() {
        let itemList = ["annie~sama", "vinky~poo", "eddie~teddie", "davie~baybie"]
        return itemList
    } 

    let items = getItemList()

    let itemMap = items.map((item, index) => {
        return (
            <h1 className='listItem' key={index}>
                {item}
            </h1>
        )
    })

    return (
        <div className='exampleComponent'>
            {itemMap}
        </div>
    )
}

export default DynamicList;