import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext";

const Title = (props) => {
  return (
    <div className="title-card">
      <h5 className="bold">Title: {props.title}</h5>
    </div>
  );
};

const List = () => {
  const context = useContext(noteContext);
  const { filteredAlbums } = context;

  return <div className='title-container'>
    {filteredAlbums.map((item) => <Title title={item.title} />)}
  </div>
}
export default List;
