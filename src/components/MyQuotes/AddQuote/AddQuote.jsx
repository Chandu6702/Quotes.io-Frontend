import React, { useState, useEffect } from 'react'
import Styles from "./AddQuote.module.css"
import axios from 'axios';

function AddQuote({ fun }) {

    const [data, setData] = useState({
        quote: "",
        genres: []
    })

    const [genresArr, setGenresArr] = useState([
        "motivational",
        "love",
        "sad",
        "friendship",
        "happy",
        "Anime",
        "Movies",
        "Devotional",
    ]);

    const handleGenre = (e) => {

        const genre = e.target.getAttribute("data-value").toLowerCase();

        setData((prev) => {
            const newGenres = prev.genres.includes(genre)
                ? prev.genres.filter((g) => g !== genre)
                : [...prev.genres, genre];

            return { ...prev, genres: newGenres };
        });

    };

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/add-quote`, data, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("ACCESS_TOKEN")
                },
                withCredentials: true
            })
            console.log(response);
        } catch (error) {

        }
    }

    return (
        <div id={Styles['container']}>
            <div id={Styles['main']}>
                <div id={Styles['close']}>
                    <button onClick={() => fun(false)} >X</button>
                </div>
                <textarea name='quote' placeholder='Write your quote here...' onChange={handleChange} />
                <h3>Genres</h3>
                <hr />
                <ul>
                    {genresArr.map((value, idx) => {
                        return <li
                            key={idx}
                            className={data.genres.includes(value.toLowerCase()) ? Styles['selected'] : ""}
                            data-value={value}
                            onClick={handleGenre}>
                            {value}
                        </li>
                    })}
                </ul>
                <div id={Styles['post']}>
                    <button onClick={handleSubmit} >Post</button>
                </div>
            </div>
        </div>
    )
}

export default AddQuote