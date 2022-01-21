import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit:PropTypes.func,

};
TodoForm.defaultProps={
    onSubmit:null
}
function TodoForm(props) {
    console.log('re-render: todo form')
   const {onSubmit}=props
   const [value, setValue] = useState('');
   const handleValueChange =(e)=>{
    setValue(e.target.value)
   }
   function handleSubmit(e){
       e.preventDefault()
       if(!onSubmit) return
       const formValues={
           title:value,
            
       }
       onSubmit(formValues)
       setValue('')
   }
  return (<div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={value} 
            onChange={handleValueChange} />
        </form>
       

  </div>);
}


export default TodoForm;
