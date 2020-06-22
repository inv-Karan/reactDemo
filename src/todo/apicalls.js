import React from 'react'
import axios from 'axios'

export default class API extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [],
            name: " ",
            age: " ",
            colour: " "
        }
    }
    componentDidMount() {

        axios.get('https://crudcrud.com/api/51e58a52fc2943d9b612be98d4e25400/unicorns')
        .then(a => {
            const data = a.data
            this.setState({ data })
            //console.log(a.data)
        })

    }

    onAdd = (a, b, c) => {
        this.setState({
            name : a,
            age : b,
            colour : c
        })
    }

    handleSubmit = () => {
        axios.put('https://crudcrud.com/api/51e58a52fc2943d9b612be98d4e25400/unicorns/5eeb490cdb22f603e8d5d6eb', {
            name: this.state.name, age: this.state.age, colour: this.state.colour})
            .then(r => {
                axios.get('https://crudcrud.com/api/51e58a52fc2943d9b612be98d4e25400/unicorns')
        .then(a => {
            const data = a.data
            this.setState({ data })
        })
            })
        
        // axios.delete('https://crudcrud.com/api/51e58a52fc2943d9b612be98d4e25400/unicorns', {
        //     name: this.state.name, age: this.state.age, colour: this.state.colour})
        //     .then(s => {
        //         axios.get('https://crudcrud.com/api/51e58a52fc2943d9b612be98d4e25400/unicorns')
        // .then(b => {
        //     const data = b.data
        //     this.setState({ data })
        // })
        //     })
        
    } 

    render() {
        const {data, name, age, colour} = this.state
        return(
            <>
            
                <p><button onClick={() => {
                    this.handleSubmit()
                }}>submit</button></p>
                <p><label>
                    <input type = "text" value = {name} onChange = {(e) => {
                        this.setState({ name : e.target.value })
                    }}/>
                </label></p>
                <p><label>
                    <input type = "text" value = {age} onChange = {(e) => {
                        this.setState({ age : e.target.value })
                    }}/>
                </label></p>
                <p><label>
                    <input type = "text" value = {colour} onChange = {(e) => {
                        this.setState({ colour : e.target.value })
                    }}/>
                </label></p>
                {/* <p>
                        data is: {data.map((a) => <ul>
                        <li>{a._id}</li>
                        <li>{a.name}</li>
                        <li>{a.age}</li>
                        <li>{a.colour}</li>
                        </ul>)}
                </p>

                <p>
                        agedata are: {data.filter((a) => {return a.age<=25}).map((a) => <ul>
                        <li>{a._id}</li>
                        <li>{a.name}</li>
                        <li>{a.colour}</li>
                        </ul>)}
                </p>

                <p>
                        samename are: {data.filter((a) => {return a.name === "dfgdsfsd Angel123"}).map((a) => <ul>
                        <li>{a._id}</li>
                        <li>{a.age}</li>
                        <li>{a.colour}</li>
                        </ul>)}
                </p>
                <p></p> */}
            </>
        )
    }
}