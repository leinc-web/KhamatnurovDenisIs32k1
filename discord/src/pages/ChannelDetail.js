import React from 'react';
import { useParams } from 'react-router-dom';

const ChannelDetail = () => {
    const { channelId } = useParams();

    // Пример: данные канала могут быть загружены через API
    const channels = {
        1: { name: 'General', description: 'This is the General channel.' },
        2: { name: 'Gaming', description: 'Talk about games here.' },
        3: { name: 'Music', description: 'Share your favorite music.' },
    };

    const channel = channels[channelId];

    if (!channel) {
        return <h1>Channel not found</h1>;
    }

    return (
        <div>
            <h1>{channel.name}</h1>
            <p>{channel.description}</p>
        </div>
    );
};

export default ChannelDetail;
