const Data = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="data">
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button className="delete" onClick={deleteNote}>
            <i className="fa-sharp fa-solid fa-trash "></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Data;
