const Profile = (props) => {
  const { name, position, id, getId } = props;
  function onClickHandler() {
    getId(id);
  }
  return (
    <article>
      <h2>{name}</h2>
      <h2>{position}</h2>
      <button onClick={onClickHandler}>Click</button>
    </article>
  );
};

export default Profile;
