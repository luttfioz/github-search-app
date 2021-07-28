import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import * as Icon from 'react-bootstrap-icons';

class GithubListView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { gitData, fetching } = this.props.gitData;
        const { searchType } = this.props.searchType;

        if (fetching) {
            return (
                <div>
                    YUKLENIYOR.....
                </div>
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
                    case 'issues':
                        content = (<div>
                            {gitData.items.map((item, i) => <IssueCard key={i} {...item} />)}
                        </div>)
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


export const UserCard = (props) => {
    const profile = props;

    return <div className="github-profile">
        <img className="img" src={profile.avatar_url} alt="http://placehold.it/75" />
        <div className="info">
            <div className="name">{profile.login}</div>
            <div className="detail">{profile.type}</div>
        </div>
    </div>;
}

export const IssueCard = (props) => {
    const item = props;

    return <div className="github-profile">
        <div className="info">
            <div className="name">{item.title}</div>
        </div>
    </div>;
}

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