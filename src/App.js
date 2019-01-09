import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const title = "Count";

class App extends React.Component {










    //Binding these functions
    constructor() {//why did you use props here
        super();




        this.header = "Count";




        this.arr = ["reactJS", "angular", "javascript"];



        // this.name = 1;

        // this.test = function () { console.log("this is test"); };
        // this.handleAddOne = this.handleAddOne;
        // console.log(this.handleAddOne);
        // this.handleMinuesOne = this.handleMinuesOne.bind(this);
        // this.handleReset = this.handleReset.bind(this);
        console.log(this);
    }



    handleAddOne() {
        console.log("Add one");//I will go through the bind method and get back to you
        console.log(this);





        console.log(this.name = this.name + 1);
    }

    handleMinuesOne() {
        console.log("Minus one");
        console.log(this);
    }

    handleReset() {
        console.log("Reset")
    }
    render() {


        var test = this.arr.map(function (arr) {

            console.log(arr)

            return (

                < li > {arr}</li >
            )

        });





        return (
            <div>
                <Header header={this.header} />
                <button onClick={this.test}>test</button>
                <button onClick={this.handleAddOne.bind(this)}>+1</button>
                <button onClick={this.handleMinuesOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>



                <ul>

                    {test}



                </ul>

















            </div>
        );
    }





}


class Header extends React.Component {

    constructor() {




        super();
        console.log(this);


    }




    render() {
        return (
            <div>
                <h1>{this.props.header}</h1>

            </div>
        );
    }





}

export default App;
