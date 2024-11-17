import React from 'react';
import { Link } from 'react-router-dom';

const channels = [
    { id: 1, name: 'General' },
    { id: 2, name: 'Gaming' },
    { id: 3, name: 'Music' },
];

const ChannelList = () => {
    return (
        <div>
            <h1>Channel List</h1>
            <ul>
                {channels.map((channel) => (
                    <li key={channel.id}>
                        <Link to={`/channels/${channel.id}`}>{channel.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChannelList;
