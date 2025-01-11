// Path: src\component\IfElseRender.jsx



const IfElseRender = () => {

    let stats= true;
    return (
        <div>
            
            {
                stats?
                <button>Logout Button</button>
                :
                <button>Logout Button</button>
            }
        </div>
    );
};

export default IfElseRender;