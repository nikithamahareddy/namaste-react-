/**
 * nested elements using react
 * ////pattern////
 * <div id="parent">
 *  <div id ="child">
 *      <h1>hello h1</h1>
 *      <h2>hello h2</h2>
 *  </div>
 * </div>
 */
const nPattern = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child" },
            [React.createElement("h1", {}, "hello nested divs"),
            React.createElement("h2", {}, "hello nested sibling divs")
            ]
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [React.createElement("h1", {}, "hello nested divs"),
            React.createElement("h2", {}, "hello nested sibling divs")
            ]
        )
    ]

)





const heading = React.createElement(
    "h1",
    { id: "heading" }, //props
    "hello world from react" //children
);

console.log(heading) // returns object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nPattern);