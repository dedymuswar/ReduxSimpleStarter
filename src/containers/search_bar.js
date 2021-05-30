import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions'
class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(event) {
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term)
        this.setState({term:''})
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="mengambil lima hari hari cuaca terakhir di kota favorite anda"
                    className="form-control"
                    defaultValue={this.state.term}
                    onChange={this.onInputChange}
                    type="text"
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather:fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps) (SearchBar)
