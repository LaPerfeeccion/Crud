import React, { useState, useRef, useEffect } from 'react'

const Notes = ({value,deleteNote, noteid}) => {
    console.log(noteid)
    const [valueStea, setValueStea] = useState(value)
    const [state, setstate] = useState(true)
    const textRef = useRef(null);

    useEffect(() => {
      localStorage.setItem('value', JSON.stringify(valueStea));
  }, [valueStea]);

    const HandleClick = () => {
        setstate(!state)
        if (state) {
            console.log('si esta')
            textRef.current.focus();
        }
    }
    const handleOnChange = (e) => {
        setValueStea(e.target.value); // Update the state with the input value
     };
     
     const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            HandleClick(); // Perform action on Enter key press
          // Call your function here, e.g., HandleClick()
        }
     };
     const handleClick = () => {
        console.log('si va');
        // Assuming HandleClick is defined elsewhere
        HandleClick();
     };
    
     const handleDoubleClick = () => {
        console.log('aki dos');
        // Assuming deleteNote is defined elsewhere
        deleteNote(noteid);
     };
  return (
    <>
       <div style={{
        position: 'relative',
        width: '20pc',
        height: '20pc',
        background: 'red'
       }}>
       <textarea  style={{
            border: '1px solid red',
            height: '100%',
            width: '100% '
        }} 
        ref={textRef}
        type="text" 
        value={valueStea} 
        onChange={handleOnChange}
        onKeyPress={handleKeyPress}
        />
        <div 
        style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0
        }}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        ></div>
       </div>
    </>
  )
}

export default Notes
