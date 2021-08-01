import useFetch from './../useFetch';

export const UserCard = (props) => {
    const profile = props;
    const { data, loading, error } = useFetch('https://api.quotable.io/random')

    return <div className="github-profile">
        <img className="img" src={profile.avatar_url} alt="http://placehold.it/75" />
        <div className="info">
            <div className="name" data-testid='name'>{profile.login}</div>
            <div className="detail">Favorite Quote: {JSON.stringify(data)}</div>
        </div>
    </div>;
}