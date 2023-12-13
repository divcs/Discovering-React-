import { useFetchCustom } from './useFetchCustom';

// export const Customs = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((result) => result.json())
//       .then((d) => setData(d));
//   });

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <li key={item.id}>{item.title}</li>;
//         })}
//     </>
//   );
// };

export function Customs(){
  const [data] = useFetchCustom("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
    </>
  );
};