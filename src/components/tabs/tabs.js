import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import RatingContainer from './components/rating/ratingContainer'
import CommentsContainer from './components/comments/commentsContainer'

const TabsProfile = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Комментарии</Tab>
                <Tab>Оценки</Tab>
            </TabList>
            <TabPanel>
                <CommentsContainer />
            </TabPanel>
            <TabPanel>
                <RatingContainer />
            </TabPanel>
        </Tabs>
  );
}

export default TabsProfile;