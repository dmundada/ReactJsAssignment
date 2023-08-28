import React, { useEffect, useContext } from 'react';
import '../css/CardList.css';
import List from './List'
import noteContext from "../context/notes/noteContext";
import Card from './Card';

const Home = () => {
  const context = useContext(noteContext);
  const { albums, getAlbums, getFilteredAlbums } = context;

  const groupedAlbums = albums.reduce((groups, album) => {
    const userId = album.userId;
    if (!groups[userId]) {
      groups[userId] = [];
    }
    groups[userId].push(album);
    return groups;
  }, {});

  useEffect(() => {
    getAlbums()
  }, []);

  return (
    <>
      <div className="card-container">
        {
          Object.keys(groupedAlbums).map((userId) => (
            <Card key={userId} title={userId} handleClick={() => getFilteredAlbums(userId)} numberOfCards={groupedAlbums[userId].length} />
          ))
        }
      </div>
      <List />
    </>
  );
};

export default Home;


