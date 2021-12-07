import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const nayoks =['uzzal','jasim','salman shah','bapparaj']
  const products=[
    {
      name:'Photoshop',
      price:'$90'
    },
    {
      name:'illustrator',
      price:'$111'
    },
    {
      name:'excel',
      price:'$18'
    },
    {
      name:'premium',
      price:'$78'
    }
  ]
  const nayakNames = nayoks.map(nayok => nayok)
  const productNames = products.map(p => p.name);
  console.log(productNames);
  console.log(nayakNames);
 
  return (
    <div className="App">
      <header className="App-header">
      <p>I am a react Person</p>
      <Posts></Posts>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
      </ul>
      {
        products.map(pd => <Product product={pd}></Product>)
      }
       {/* <Product product={products[0]}></Product>
       <Product product={products[1]}></Product> */}
      {/* <Person name="Hridoy" job="cricketer"></Person>
      <Person name="Uzzal " job="programmer"></Person>
      <Person name="Shofi" job="farmar"></Person> */}
      </header>
    </div>
  );
}

function Product(props){
  let productStyle ={
    border:'2px solid gray',
    borderRadius:'10px',
    backgroundColor:'green',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name,price} =props.product;
  return(
    <div style={productStyle}>
     <h2>{name}</h2>
     <h5>{price}</h5>
     <button>Buy Now</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] =useState([]);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data =>setUsers(data))
  },[])
  return(
    <div>
      <h3>dynamic data : {users.length} </h3>
      {
        console.log(users)
      }
      <ul>
       {
          users.map(user => <li>{user.phone}</li>)
       }
      </ul>
      
    </div>
  )
}

function Posts(){
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return(
    <div>
      <h3>dynamic data : {posts.length} </h3>
      <ul>
        {
          posts.map(post =><li>{post.id}</li>)
        }
      </ul>
    </div>
  )
}
function Person(props){
  return (
    <div style={{border:"3px solid green",borderRadius:"10px", margin:"10px", padding:"20px"}}>
      <h3>My Name : {props.name}</h3>
      <p>My Profession : {props.job}</p>
    </div> 
  )
}

function Counter(){
  const [count, setCount] = useState(5);
  const IncreaseHandeler = () => {
    const newCount =count+1;
    setCount(newCount);
  }

  const DecreaseHandeler = () =>{
    const decreaseCount = count-1;
    setCount(decreaseCount);
  }
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={IncreaseHandeler}>increase</button>
      <button onClick={DecreaseHandeler}>decrease</button>
    </div>
  )
}



export default App;
