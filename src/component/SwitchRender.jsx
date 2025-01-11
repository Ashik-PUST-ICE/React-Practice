// Path: src\component\SwitchRender.jsx

const SwitchRender = () => {
    const status = true;

    let renderContent;
    switch (status) {
        case true:
            renderContent = <button>Logout Btn</button>;
            break;
        case false:
            renderContent = <button>Log in</button>;
            break;
        default:
            renderContent = null;
    }

    return (
        <div>
            {renderContent}
        </div>
    );
};

export default SwitchRender;
