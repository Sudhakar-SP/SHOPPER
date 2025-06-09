import React from 'react'
import './Newcollection.css'
import new_collection from "../components/assets/new_collection.js";
import Item from '../components/item/item'

const Newcollection = () => {
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="colletions">
        {new_collection.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Newcollection