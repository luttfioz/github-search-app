import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import * as Icon from 'react-bootstrap-icons';
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import { UserCard } from './UserCardView'

class GithubListView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { gitData, fetching } = this.props.gitData;
        const { searchType } = this.props.searchType;

        if (fetching) {
            return (
                <>
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        <span className="visually-hidden">Loading...</span>
                    </Button>{' '}
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                </>
            )
        } else {
            let content = null;
            console.log(gitData.items)
            if (gitData.items && gitData.items.length > 0) {
                switch (searchType) {
                    case 'users':
                        content = (<Grid container spacing={3}>
                            {gitData.items.map((item, i) => <Grid key={i} item xs={6} sm={4}> <UserCard key={i} {...item} /> </Grid>)}
                        </Grid>)
                        break;
                    case 'repositories':
                        content = (<Grid container spacing={3}>
                            {gitData.items.map((item, i) => <Grid key={i} item xs={12} sm={6}> <RepositoryCard key={i} {...item} /> </Grid>)}
                        </Grid>)
                        break;
                    default:
                        break;
                }
            }

            return content
        }
    }

}

export default GithubListView;



export const RepositoryCard = (props) => {
    const item = props;

    return <div className="github-profile">
        <Icon.BookmarkStar className="icon" />
        <div className="info">
            <a href={item.html_url}>{item.name}</a>
            <div className="name">{item.description}</div>
            <div className="detail">
                <strong> {item.stargazers_count}</strong>  Stars ·
                <strong> {item.forks_count}</strong>  Forks ·
                <strong> {item.open_issues_count}</strong>  Issues
            </div>

        </div>
    </div>;
}