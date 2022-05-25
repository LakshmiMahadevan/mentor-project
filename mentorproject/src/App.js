import './App.css';
import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Card} from 'react-bootstrap'
import Col from "react-bootstrap/Col";
import {StarFill,Star} from 'react-bootstrap-icons';
import {Switch,Route} from 'react-router-dom'
import Row from "react-bootstrap/Row";
import Login from "./Login"
import Books from "./main"
function App() {
  /* const [cart, setCart]= useState([]);
 const [name,setName]= useState("lakshmi")
  const [cts,setCTS]= useState(1)*/
  const [bookList]=useState([
  {image:"https://cdn01.sapnaonline.com/product_media/9789387979710/sm_9789387979710.png",
   id: "Antarangada Vignaana Anandakke Yogiya Kaipidi",
   author:"by Sadhguru Jaggi Vasudev",
  name: "₹200",
  crossname:"₹400",
   offer:"(50%Offer)",
   starone: <StarFill/>, startwo:<StarFill/>, starthree:<StarFill/>, starfour:<Star/>, starfive:<Star/>},

  {image:"https://cdn01.sapnaonline.com/product_media/9789393224088/sm_9789393224088_170220220950708.jpg",
  id: "Neene Rajakumara : Puneeth Jeevana Kathana",
  author:"by Sharanu Hullur, Sawanna Enterprises",
  name: "₹250",
  crossname:"₹500",
   offer:"(50% Offer)",
   starone: <StarFill/>, startwo:<StarFill/>, starthree:<StarFill/>, starfour:<Star/>, starfive:<Star/>
},

  {
    image:"https://cdn01.sapnaonline.com/product_media/9789390607105/sm_9789390607105_221020211021694.jpg",
    id:"Ikigai : Dheerga Hagu Santsabharita Jeevanakke Japaniyara Guttu",
    name:"₹300",
    author:"by Wow Publishings Pvt.Ltd",
    crossname:"₹500",
     offer:"(30% Offer)",
     starone: <StarFill/>, startwo:<StarFill/>, starthree:<StarFill/>, starfour:<StarFill/>, starfive:<Star/>

  },

  {image:"https://cdn01.sapnaonline.com/product_media/9789382585015/sm_9789382585015.jpg",
  id:"Himalaya Guruvina Garadiyalli", 
  author:"by Magenta Publication Pvt Ltd",
  name: "₹320",
  crossname:"₹740",
   offer:"(50% Offer)",
   starone: <StarFill/>, startwo:<StarFill/>, starthree:<StarFill/>, starfour:<Star/>, starfive:<Star/>
  },
  {
    image:"https://cdn01.sapnaonline.com/product_media/5551234108359/sm_5551234108359.jpg",
    id:"Samvidhana Odu : Vidhyarthi Yuvajanarigagi Kaipidi",
    author:"by Hn Nagamohan Das, Sahayana Kerekon",
    name: "₹410",
    crossname:"₹600",
   offer:"(25% Offer)",
   starone: <StarFill/>, startwo:<StarFill/>, starthree:<StarFill/>, starfour:<StarFill/>, starfive:<Star/>
  },
  {
    image:"https://cdn01.sapnaonline.com/product_media/9789387069480/sm_9789387069480.jpg",
    id:"Swami Vivekananda-304",
    author:"by Kuvempu, Sri Ramakrishna Ashrama",
    name: "₹410",
    crossname:"₹600",
   offer:"(25% Offer)",
   starone: <StarFill/>, startwo:<StarFill/>, starthree:<StarFill/>, starfour:<Star/>, starfive:<Star/>
  },
  {
    image:"https://cdn01.sapnaonline.com/product_media/9788195317714/sm_9788195317714_130920211149529.jpg",
    id:"Namma Dehada Vijnana image",
    author:"by G Francis Jevier, Jaico Book House",
    name:"₹550",
    crossname:"₹1000",
   offer:"(50% Offer)",
   starone: <StarFill/>, startwo:<StarFill/>, starthree:<StarFill/>, starfour:<StarFill/>, starfive:<Star/>
  },
  {
    image:"https://cdn01.sapnaonline.com/product_media/9789388423274/sm_9789388423274_290120221744505.jpg",
    id:"100 Spoorthidayaka Kathegalu",
    author:"by Tr Anantharamu,Someshwara N",
    name:"₹450",
    crossname:"₹900",
    offer:"(50% Offer)",
    starone: <StarFill/>, startwo:<StarFill/>, starthree:<StarFill/>, starfour:<Star/>, starfive:<Star/>
  },
  {
    image:"https://cdn01.sapnaonline.com/product_media/9789350260173/sm_9789350260173_241220211613465.jpg",
    id:"Agniya Rekkegalu",
    author:"by Jayaprakash Puttur, Vasan Book Depot",
    name:"₹480",
    crossname:"₹750",
    offer:"(40% Offer)",
    starone: <StarFill/>, startwo:<StarFill/>, starthree:<StarFill/>, starfour:<StarFill/>, starfive:<Star/>
  },
  {
    image:"https://cdn01.sapnaonline.com/product_media/9789387192461/sm_9789387192461.png",
    id:"No Presents Please",
    author:"by Jayant Kaikini, Ankita Pustaka",
    name:"₹380",
    crossname:"₹760",
    offer:"(50% Offer)",
    starone: <StarFill/>, startwo:<StarFill/>, starthree:<StarFill/>, starfour:<StarFill/>, starfive:<StarFill/>
  }
  

]);
  

  /*useEffect(()=>{
    console.log('inside useEffect')
  },[])
  useEffect(()=>{
    console.log('inside change of state')
  },[name])
  useEffect(()=>{
    console.log(`count incremented-- ${cts}`)
  },[cts])
  const  addToCart=(book) => {
    console.log('we are in addTocart');
    setCart([...cart, book]);
   
  };*/
  

  return (
    
    <div className="App">
     
       <header className="App-header">
         <h2>India's largest book mall</h2>
         <button>Go to Cart</button>
      <h1>SAPNA</h1>
      
      </header> 
      
      <div className="bookInfo"> 
      <Card>
      <Container className="BookInfos" >
      <Row>
      
      {bookList.map((book)=>{
       return(
         <Col sm={12} md={5} lg={4}>
         <Books book={book}/>
         </Col>
       
       );
        
      
  
      
      })}
      </Row>
      </Container>
      </Card>
    </div>
    
  </div> 
    
  
    
    
    

  );
}

export default App;