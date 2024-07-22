import React from 'react';
import { FaSave, FaTrashAlt, FaPen } from 'react-icons/fa';

function Navbar({ title, text, onSave, onDelete, onWritings }) {

  return (
    <nav>
        <div><FaSave onClick={onSave}/></div>
        <div><FaTrashAlt onClick={onDelete}/></div>
        <div><FaPen onClick={onWritings}/><span></span></div>
    </nav>
  );
}

export default Navbar;
