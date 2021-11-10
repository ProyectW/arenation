export default function PayMethodsCards(props) {
  return (
    <div key={props.key} className="w-full bg-secondary-light p-4 rounded-2xl my-2 flex flex-col">
      <h4>{props.methodName}</h4>
      <span className="text-secondary-gray text-sm">{props.methodEmail}</span>
    </div>
  );
}
