import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState ([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);

    return (
    <>
    <GlobalStyle />
    <StoriesContainerWrapper data-test-id="stories-container">
    <h1>Hacker News</h1>
    {storyIds.map(storyId => (
        <Story storyId={storyId} />
    ))};
    </StoriesContainerWrapper>
    </>
  );
};