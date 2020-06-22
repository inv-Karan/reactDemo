import React from 'react'
import { resolve } from 'url';
import { reject } from 'q';


class School extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            moviename : '',
            selectdate : '',
            selectactor : 'actor1',
            selectdirector : []
        }

    }

    updateDetails = (key, value) => {
        this.setState({[key] : value})
    }

    handleSubmit = () => {
        alert(``)
    }

    updateAll = () => {
        
    }

    render() {
        const { moviename, selectdate, selectactor, selectdirector } = this.state
        return(
            <>
                <form onSubmit = {this.handleSubmit}>


                    <p><label>
                        Movie Name: 
                        <input type="text" value={moviename} onChange={(e) => {
                            this.updateDetails('moviename', e.target.value)
                        }}/>
                    </label></p>


                    <p><label>
                        Select Date: 
                        <input type = "date" value={selectdate} onChange={(e) => {
                            this.updateDetails('selectdate', e.target.value)
                        }}/>
                    </label></p>


                    <p><label>
                        Actor1: 
                        <input type = "radio" value={selectactor} checked={selectactor === 'actor1'} onChange={(e) => {
                            debugger
                            this.updateDetails('selectactor', 'actor1')
                        }}/>
                        Actor2: 
                        <input type = "radio" value={selectactor} checked={selectactor === 'actor2'} onChange={(e) => {
                            debugger
                            this.updateDetails('selectactor', 'actor2')
                        }}/>
                        Actor3: 
                        <input type = "radio" value={selectactor} checked={selectactor === 'actor3'} onChange={(e) => {
                            debugger
                            this.updateDetails('selectactor', 'actor3')
                        }}/>
                    </label></p>


                    <p><label>
                        Director1: 
                        <input type = "checkbox" value={selectdirector} checked={selectdirector.includes('director1')} onChange={(e) => {
                            debugger
                            let b = selectdirector
                            if(selectdirector.includes('director1')) 
                             { b = selectdirector.filter(a => a !== 'director1')}
                             else{ b.push('director1')}
                            this.updateDetails('selectdirector', b)
                        }}/>
                        Director2: 
                        <input type = "checkbox" value={selectdirector} checked={selectdirector.includes('director2')} onChange={(e) => {
                            debugger
                            let b = selectdirector
                            if(selectdirector.includes('director2'))
                            { b = selectdirector.filter(a => a !== 'director2')}
                            else{ b.push('director2')}
                            this.updateDetails('selectdirector', b)
                        }}/>
                        Director3:  
                        <input type = "checkbox" value={selectdirector} checked={selectdirector.includes('director3')} onChange={(e) => {
                            debugger
                            let b = selectdirector
                            if(selectdirector.includes('director3'))
                            { b = selectdirector.filter(a => a !== 'director3')}
                            else{ b.push('director3')}
                            this.updateDetails('selectdirector', b)
                        }}/>
                    </label></p>


                    <p><input /></p>


                    <p></p>


                </form>

            </>
        )
    }
}

export default School