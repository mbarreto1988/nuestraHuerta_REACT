import React from "react";
import foto from '../assets/images/404.jpg';

function NotFound (){
    return (
        <div>
            <h1>Relaje y coma sano por favor!</h1>
            <img src={foto} alt="Admin NH - 404" />
        </div>
    );
}

export default NotFound;