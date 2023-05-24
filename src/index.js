import React from "react";
import ReactDOM from "react-dom";

//ReactDOM's render function is used to output the html elements
//ReactDOM.render("What has to be the output", "Where this has to be output");

//Here the h1 element is rendered without manipulating the html file from the .js file using JSX
// which intercouples HTML and JS together for responsve pages using Babel complier which converts JSX
// code to browser level code
//Here the h1 is rendered to the div element in html which is root
ReactDOM.render(<h1>HELLO WORLD!!! </h1>, document.getElementById("root"));

//Using div element to render 2 html elements. the render method treats div as a single html element

//Variable declarations to use in html element using {}'s, we can use any expression inside
//these brackets but not statements (eg {math.round(math.random)} also works but not {if a>b})

var name = "Vaish";
var year = "2019";
var Year = new Date().getFullYear();

const img =
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa7%2FReact-icon.svg&tbnid=3yb309DfyvIz2M&vet=12ahUKEwiLjMTt8Yz_AhWAK0QIHW58BY4QMygAegUIARDIAQ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AReact-icon.svg&docid=nfz2qKo0MFLwMM&w=800&h=696&q=react%20img&ved=2ahUKEwiLjMTt8Yz_AhWAK0QIHW58BY4QMygAegUIARDIAQ";

//The html attributes for its elements are in camel case in react
//<img should have close /> instead of </img> in react
ReactDOM.render(
  <div>
    <h1 className="heading">HELLO {name}!!! </h1>
    <img src={img} />
    <p> copyright {Year} </p>
  </div>,
  document.getElementById("root")
);
