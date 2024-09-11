import React, { useState } from 'react'

const Search = ({ starships, setStarshipsShown, setIsFiltered }) => {
    const [inputValue, setInputValue] = useState('');
    const [hasResult, setHasResult] = useState(true);

    const handleOnchange = (e) => {
        setInputValue(e.target.value)
    }

    const handleOnclick = () => {
        if (inputValue.trim() === '') {
            setIsFiltered(false);
            setHasResult(true);
        } else {
            const filteredData =
                starships.filter(item =>
                    item.name.toLowerCase().includes(inputValue.trim().toLowerCase()) ||
                    item.model.toLowerCase().includes(inputValue.trim().toLowerCase()));

            filteredData.length ? setHasResult(true) : setHasResult(false);
            setStarshipsShown(filteredData);

            setIsFiltered(true);
        }
    }

    return (
        <>
            <div className='search'>
                <p>Name / Model</p>
                <input name='search' type="text" placeholder='Name / Model' value={inputValue} onChange={(e) => handleOnchange(e)} />
                <button onClick={handleOnclick}>Filter</button>
            </div>
            {!hasResult && <h1>No relevant results.</h1>}
        </>

    )
}

export default Search