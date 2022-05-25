import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button,Card} from 'react-bootstrap'

const Books =(props)=>{
    const{book}=props;
    
    return(
       
        <div className="bookContent">
        <div className="image"><img src={book.image} /></div>
        
        <div className="bookName"><b>{book.id}</b></div>
        <div className="author">{book.author}</div>
        <div>{book.name}</div>
        <div className="cName">{book.crossname}</div>
        <div>{book.offer}</div>
        <div>{book.starone}{book.startwo}{book.starthree}{book.starfour}{book.starfive}</div>
        
        
        <Button variant="secondary" className="clickButton"  >Add to Cart</Button>
        </div>
        
        
        
        
    );
}
export default Books;