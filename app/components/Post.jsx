export default function Post({ id, title, content, authorName }) {
  return (
    <div className="hover:scale-110 border border-black rounded-lg p-4" key={id}>
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}
