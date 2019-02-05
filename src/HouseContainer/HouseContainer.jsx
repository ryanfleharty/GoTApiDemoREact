import React, { Component } from 'react';
import House from './House/House';

export default class HouseContainer extends Component{
    constructor(){
        super();
        this.state = {
            houses: [],
            dataLoaded: false
        }
    }
    deleteHouse = (index) => {
        console.log("DELETING HOUSE AT INDEX " + index)
        const newHouses = this.state.houses;
        newHouses.splice(index, 1);
        this.setState({
            houses: newHouses
        })
    }
    getHouses = async () => {
        console.log("GETTIN THE HOUSES")
        const apiResponse = await fetch("https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/houses?pageSize=50");
        const houses = await apiResponse.json();
        this.setState({
            houses: houses,
            dataLoaded: true
        })
    }
    componentDidMount(){
        this.getHouses();
    }
    render(){
        const houseList = this.state.houses.map((house, index)=>{
            return(
                <House key={index} house={house} index={index} deleteHouse={this.deleteHouse}/>
            )
        })
        return(
            <div>
                <h1>Howdy pardner</h1>
                { this.state.dataLoaded ? 
                    houseList :
                    <p>data loading...</p>
                }
            </div>
        )
    }
}