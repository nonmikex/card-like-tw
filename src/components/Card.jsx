/* eslint-disable react/prop-types */

import { useState } from "react"

export default function Card({ fullName, userName, initialFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const className = isFollowing ? 'is-following card-button' : 'card-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="card">
            <header className="card-header">
                <img src={`https://unavatar.io/${userName}`} alt="" />

                <div className="card-info">
                    <strong>{fullName}</strong>
                    <p>@{userName}</p>
                </div>
            </header>

            <div>
                <button className={className} onClick={handleClick}>
                    <span className="in-follow">{text}</span>
                    <span className="un-follow">Un follow</span>
                </button>
            </div>
        </article>
    )
}
