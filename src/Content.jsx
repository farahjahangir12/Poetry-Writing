import React from 'react';
import Navbar from './Navbar';
import { useState ,useRef } from 'react';
import Footer from './Footer';
import Words from './Words'
import { useReactToPrint } from 'react-to-print';


function Content() {
  const [title,setTitle]=useState('');
  const [text,setText]=useState('');
  const [theme,setTheme]=useState('1');
  const [list,setList]=useState([]);
  const content=useRef(null);

  const handleSave = () => {
  if(title!=='' || text!='')
    { 
      handlePrint(); 
    } else {
      alert('First Fill!');
    }
  }; 
  const handlePrint = useReactToPrint({
    content:() => content.current,
    title:"My Poem",
  });

  
  const handleDelete=()=>{
  if(title!=='' || text!='')
  {
  setTitle('');
  setText('');
  setList([]);

  }
  else
  alert('Nothing To Delete');
}

 const handleWritings=()=>{
  setTitle('');
  setText('');
  setList([]);

 }

 const changeTheme=(theme)=>{
  setTheme(theme);
 }
  return (
    <div className={`container theme-${theme}`}>
      <section className="header">
      <Footer changeTheme={changeTheme}/>
      <Navbar title={title} text={text} onSave={handleSave} onDelete={handleDelete} onWritings={handleWritings}/>
      </section>
      <div ref={content}>
      <section>
        <h4>Title</h4>
        <input type="text" required placeholder="Enter your title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </section>
     
      <section>
        <h6>Your Text</h6>
       <textarea name="text" id="text" rows={8} cols={12} placeholder='Enter your text here...' value={text} onChange={(e)=>setText(e.target.value)}></textarea>
       </section> 
       </div>
       <Words title={title} list={list} setList={setList}/>
    </div>
  );
}

export default Content;
