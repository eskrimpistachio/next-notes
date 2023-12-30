export default function Notes({ id, title}) {
  return (
    <div className="hover:scale-110 border border-black rounded-lg p-4 h-[200px] w-[300px] flex flex-col gap-16" key={id}>
      <h4>Title : <span className="font-semibold">{title}</span></h4>
      <h6>Click here to see the details...</h6>
    </div>
  );
}
