import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import debounce from 'lodash.debounce';

class GithubFormView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchArea: 'gaearon',
            searchType: 'users'
        }
    }

    setAction() {
        const { searchType, searchArea } = this.state;
        this.props.getGitData(searchType, searchArea);
        this.props.getSearchType(searchType);
    }

    setActionDebounce = debounce(() => {
        this.setAction();
    }, 2000);

    componentDidMount() {
        this.setAction();
    }

    componentDidUpdate(prevProps, prevState) {
        this.setActionDebounce();
    }

    handleChange = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { searchType, searchArea } = this.state;
        return (
            <div>
                <TextField style={{ marginRight: 10 }} className="margin-right" variant="outlined" type="text" name="searchArea" value={searchArea} onChange={this.handleChange} />
                <Select variant="outlined" name="searchType" value={searchType} onChange={this.handleChange}>
                    <option value="users">User</option>
                    <option value="repositories">Repository</option>
                    <option value="issues">Issue</option>
                </Select>
            </div>
        )
    }
}

export default GithubFormView;