export default function Post({ id, title, content, authorName }) {
  return (
    <div className="border border-white p-4" key={id}>
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}
