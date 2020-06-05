import React, { useState, useEffect } from 'react';
import classes from './gif.module.scss';


function useGiphy(query) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://api.giphy.com/v1/gifs/search?api_key=ofu7GeBUoJURPgc9a3Xui121MW0Laggr&q=${query}&limit=7&offset=0&rating=G&lang=en`
                );
                const json = await response.json();

                setResults(
                    json.data.map(item => {
                        return item.images.preview.mp4;
                    })
                );
            } finally {
                setLoading(false);
            }
        }

        if (query !== '') {
            fetchData();
        }
    }, [query]);

    return [results, loading];
}

const Gif = () => {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [results, loading] = useGiphy(query);

    console.log(results);

    // const getStatus = () => {
    //     if (results === "") {
    //         return ''
    //     }
    // }
    return (
        <div className={classes.gif}>
            <h2>The Gif Generator</h2>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    setQuery(search);
                    setSearch("");
                }}
            >
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search for Gifs!"
                />
                <button type="submit">Search</button>
            </form>

            {loading ? (
                <h3>Loading gifs</h3>
            ) : (
                    <div className={(results.length === 0 ? `${classes.nope}` : `${classes.videoGrid}`)}>
                        {results.map((item, i) => {

                            return (
                                <div className={classes.vidoes} key={i}>
                                    <video autoPlay loop key={item} src={item} />
                                </div>
                            )

                        })}
                    </div>
                )}
        </div>
    );
}
export default Gif;

