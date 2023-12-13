const Button =()=>{
    const handleClick=(a,b)=>{
        console.log(a+b);
    }
    return(
        <button onClick={()=>handleClick(2,5)}>Click</button>
    )
}

export const Event = () => {
  return (
    <>
    <Button/>
    </>
    
  )
}
