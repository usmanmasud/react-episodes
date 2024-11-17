

export default function User({ user }) {
    const { avatar_url, followers, following, public_repos, url, name, login, created_at } = user

    const joinedDate = new Date(created_at);

    return <div className="user">
        <div>
            <img src={avatar_url} className="avatar" alt="User" />
        </div>
        <div className="name-container">
            <a href={`https://github.com/${login}`}>{name || login}</a>
            <p>User joined on {`${joinedDate.getDate()} ${joinedDate.toLocaleString('en-us', { month: "short" })} ${joinedDate.getFullYear()}`}</p>
        </div>
        <div className="profile-info">
            <div>
                <p>Public Repos</p>
                <p>{public_repos}</p>
            </div>
            <div>
                <p>Followers</p>
                <p>{followers}</p>
            </div>
            <div>
                <p>Following</p>
                <p>{following}</p>
            </div>
        </div>
    </div>
}