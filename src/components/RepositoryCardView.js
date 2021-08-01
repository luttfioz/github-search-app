import * as Icon from 'react-bootstrap-icons';

export const RepositoryCard = (props) => {
    const item = props;

    return <div className="github-profile">
        <Icon.BookmarkStar className="icon" />
        <div className="info">
            <a className="link" href={item.html_url} target="_blank">{item.name}</a>
            <div className="name" data-testid='description'>{item.description}</div>
            <div className="detail">
                <strong> {item.stargazers_count}</strong>  Stars ·
                <strong> {item.forks_count}</strong>  Forks ·
                <strong> {item.open_issues_count}</strong>  Issues
            </div>

        </div>
    </div>;
}