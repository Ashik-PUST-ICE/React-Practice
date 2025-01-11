// Path: src\component\CondiRender.jsx



const LoginstaBtn=(Status)=>{


    if(Status)
    {
        return <button>Logout Btn</button>
    }

    else
    {
        return  <button>Login Btn</button>
    }

}

const CondiRender = () => {

  
    return (
        <div>
            <h1>Login Status</h1>
            {
                LoginstaBtn(false)
            }
        </div>
    );
};

export default CondiRender;