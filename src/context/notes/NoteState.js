import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "https://jsonplaceholder.typicode.com";
  const notesInitial = [];
  const [albums, setAlbums] = useState(notesInitial);
  const [filteredAlbums, setFilteredAlbums] = useState(notesInitial);

  const getAlbums = async () => {
    const response = await fetch(`${host}/albums`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setAlbums(json);
  };

  
  const getFilteredAlbums = async(searchTerm) => {
    console.log("searchTerm",searchTerm)
    if(!searchTerm) {
      setFilteredAlbums([])
      return;
    }
    const filtered = albums.filter(
      (album) =>
        album.title.includes(searchTerm) ||
        album.userId.toString() === searchTerm
    );
    setFilteredAlbums(filtered);

  };

  return (
    <NoteContext.Provider
      value={{ albums, filteredAlbums, getAlbums, getFilteredAlbums }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
