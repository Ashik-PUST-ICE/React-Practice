// Path: src\component\Invoked.jsx

const Invoked = () => {

    let marks=90;
    return (
        <div>
     {(()=>{
          

          if(marks>80 && marks<100)
          {

            return <h1>A+</h1>
          }
         
          else if(marks>70 && marks<80)
          {
            return <h1>A-</h1>
          }

          else
          {
            return <h1>Others</h1>
          }




        })()}
            
        </div>
    );
};

export default Invoked;