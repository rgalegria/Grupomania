import React from "react";

// Icons
import back from "../../images/back-icon.svg";
import signup from "../../images/signup-icon.svg";

// Components
import ActionBtn from "../Buttons/ActionBtn/ActionBtn";

const NavSignUp = (props) => {
    return (
        <>
            <ActionBtn icon={back} name="retourner" onClick={props.backHandle} />
            <ActionBtn id="signup-btn" form="signup-form" name="s'inscrire" type="submit" icon={signup} />
        </>
    );
};

export default NavSignUp;
