const names = ["Sengkim", "GekEng", "Nyvar", "Kimreach", "Lyly", "Meimei"];
const userName = names.map((n) => {
  return <h3>{n}</h3>;
});
export const User = () => {
  return (
    <div>
      {names.map((n) => (
        <h3>{n}</h3>
      ))}
    </div>
  );
};
