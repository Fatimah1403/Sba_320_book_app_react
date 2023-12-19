import React, {useRef, useEffect}from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './SearchForm.css';

function SearchForm() {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (event) => {
    event.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if ((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0) {
      setSearchTerm("The lost world");
      setResultTitle("Please Enter something  ...");
    } else {
      setSearchTerm(searchText.current.value)
    }
    navigate("/book");

  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content' onSubmit={handleSubmit}>
          <form className='search-form'>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type='text' className='form-control' placeholder='The Lost World ...' ref={searchText} />
              <button type='submit' className='search-button flex flex-c'
                onClick={handleSubmit}>
                <FaSearch className='text-blue' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SearchForm;
