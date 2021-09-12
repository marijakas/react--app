import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
             <h1>Check out these React tutorials!</h1>  
             <div className="cards__container">
               <div className = "cards__wrapper">
                   <ul className='cards__items'>
                       <CardItem 
                       src="/images/react5.jpg"
                       text="React JS Course 2021"
                       label = 'React tutorial'

                       path='/services'
                       />

                       <CardItem 
                       src="/images/react1.png"
                       text="React JS - React Tutorial for Beginners"
                       label = 'React tutorial'

                       path='/services'
                       />
                   </ul>

                   <ul className='cards__items'>
                       <CardItem 
                       src="/images/react2.jpg"
                       text="How I learned React JS in 7 Days"
                       label = 'React tutorial'

                       path='/services'
                       />

                       <CardItem 
                       src="/images/react3.jpg"
                       text="Full React Tutorial"
                       label = 'React tutorial'

                       path='/services'
                       />
                       <CardItem 
                       src="/images/react4.jpg"
                       text="React JS - React Tutorial for Beginners"
                       label = 'React tutorial'

                       path='/services'
                       />
                        <CardItem 
                       src="/images/react5.jpg"
                       text="React JS Course 2020"
                       label = 'React tutorial'

                       path='/services'
                       />
                   </ul>
                   </div>  
             </div>
        </div>
    )
}

export default Cards
