import React, { useState }  from 'react'

const LocalStorage = () => {
  
	const [localData, setLocalData] = useState(() => {
		const saved = localStorage.getItem("name");
		const initialValue = JSON.parse(saved);
  		return initialValue || "";
	});

	const inputHandler = (event) => {
		event.preventDefault();
		setLocalData(event.target.value);
	}
	const saveHandler = (event) => {
		// event.preventDefault();
		localStorage.setItem("name", JSON.stringify(localData));
	}

	return (
		
		<div>
			<h1>Hello {localStorage.getItem("name") || "you"}!</h1>
		<form>
		<input type="text" placeholder="Your name" onChange={inputHandler}/>
		<input type="submit" value="Save" onClick={saveHandler}></input>
	  </form>
	  
	  </div>
  )
};

export default LocalStorage