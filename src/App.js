
import {useState} from 'react';
import './App.css';
import {styled} from 'styled-components';



const Box=styled.div`
    background: #222;
    color:#fff;
    padding: 20px 0;
`

function App() {
   let [fashion, setFashion] = useState(['편집샵','백화점','아울렛']);
   let [count, setCount]=useState(0);
   let [modal, setModal]=useState(false);
   let [title, setTitle]=useState(0);
   let [input, setInput]=useState('');
  return (
    <div>
        <Box>
            <h4>블로그</h4>
        </Box>
        <button onClick={()=>{
            let copy=[...fashion]
            copy[0]='대형마트';
           
            setFashion(copy)
            console.log(copy)
        }}>내용수정 </button>
       
       {
            modal == true ? <Modal fashion={fashion} color={'yellow'} setFashion={setFashion} title={title}/> : null
       }
       {
            fashion.map((item, i) => {
               // console.log(item)
                return (
                    <div className='list' key={i}>
                            <h4 onClick={() =>{setModal(!modal); setTitle(item)}}>{item} <span className='font' onClick={(e)=>{e.stopPropagation(); setCount(count+1)}}>좋아요!!👍{count}</span></h4>
                            <p>2023/07/24</p>
                            <button onClick={() =>{
                                let copy=[...fashion];
                                copy.splice(i,1);
                                setFashion(copy)
                            }}>삭제</button>
                    </div>
                )
            })
        }
        <input type="text" onChange={(e) => {setInput(e.target.value);/*  console.log(input) */}}/>
        <button onClick={()=>{
            let copy=[...fashion];
            //console.log(copy)
            copy.unshift(input);
            setFashion(copy)
        }}>글쓰기</button>
    </div>
  );
}

function Modal({color, fashion,setFashion,title}){
    let [a,setA]=useState('대형마트에는 가격이 저렴합니다.')
    return(
        <div className="modal" style={{background:color}}>
        <h2>{title}</h2>
        <p>날짜</p>
        <p>{a}</p>
        <button onClick={() =>{setA('마트의 장점');}}>글수정</button>
    </div>
    )
}

export default App;
