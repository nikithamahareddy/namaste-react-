import React from "react";
import { createRoot } from 'react-dom/client';
//react component
const Heading =()=>(
    //putting another component using <Title/> and {ReactComponent()}
    // putting react element using {reactEelement}
    <div>
        <h1>hello react component</h1>
        <Title/> 
        {ReactComponent()} 
        {reactElement }
    </div>
    
);

//component composition 
const Title=()=>(
    <h2>this is component composition</h2>
);
const ReactComponent=()=>(
    <h3>This is another react component</h3>
);
const reactElement = (<h4>this is react element</h4>) ;
const root = createRoot(document.getElementById("root"));
root.render(<Heading/>); // rendering react functional component