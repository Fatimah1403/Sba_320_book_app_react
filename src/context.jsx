import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import axios from 'axios'; 
const URL = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async() => {
        setLoading(true);

        try {
            const response = await axios.get(`${URL}${searchTerm}`);
            const data = response.data;
            console.log(data);
            const { docs } = data;
            // console.log(docs)

            if (docs) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year, title, place} = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                        place: place
                    }
                });
                setBooks(newBooks);

                if (newBooks.length > 1) {
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Result Found!");
                }
            } else {
                setBooks([]);
                setResultTitle("No Result Found!")
            }
            setLoading(false)

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider };