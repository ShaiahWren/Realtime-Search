import React, { useState, useEffect } from 'react'

const ReactSearch = () => {
    const [input, setInput] = useState('');
    let [artists, setArtists] = useState([]);
    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);

    }


    useEffect(() => {
        (async function () {
            const response = await fetch("https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json");
            const data = await response.json();
            console.log(data);
            setArtists(data.Reggae);
        })();
    }, [setArtists])

    if (input.length > 0) {
        artists = artists.filter((artist) => {
            console.log(artist);
            return artist.match(input);
           
        });
    }



    return (
        <>
            <div>
                <h3 className="search">Search: </h3>
                <input type="text" placeholder="Search the list with React" value={input} onChange={handleChange} />
            </div>
            <div className="artists">
                {artists.length > 0 && artists.map((artist, index) => {
                    return (
                        <div key={index}>
                            <ul>
                                <li>{artist}</li>
                            </ul>
                        </div>
                    )

                }) }
            </div>
        </>
    )
}

export default ReactSearch;

