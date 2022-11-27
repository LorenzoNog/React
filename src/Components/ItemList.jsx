import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <>
            {
                items.length > 0 ?
                items.map(item => 
                    <Item 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    cost={item.cost}
                    desc={item.desc} 
                    img={item.image}
                />)
                :
                <h1>Cargando...</h1>
            }
        </>
    ) 
}
export default ItemList;