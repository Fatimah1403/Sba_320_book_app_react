import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './SearchForm.css';

function SearchForm() {
  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form'>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type='text' className='form-control' placeholder='The Lost World ...' />
              <button type='submit' className='search-button flex flex-c'>
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
