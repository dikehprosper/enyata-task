import Card from '../molecules/Card'


const CardList = ({items, total}) => {
   return (
    <div className='flex w-[90%] gap-[55px] justify-between mb-[75px]'>
       {
        items.length > 0 ? items.map((item,idx) => {
            const {title, update, backgroundColor} = item
            return <Card key={idx} title={title} divBackgroundColor={backgroundColor} update={update} total={total}/>
        }): null
       }
    </div>
   )
}

export  default CardList