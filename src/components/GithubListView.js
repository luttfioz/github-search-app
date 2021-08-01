import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import { UserCard } from './UserCardView'
import { RepositoryCard } from './RepositoryCardView'

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


