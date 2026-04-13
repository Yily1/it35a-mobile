import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import Feed from './home-tabs/Feed';
import Search from './home-tabs/Search';
import Favorites from './home-tabs/Favorites';
import { bookOutline, search, star } from 'ionicons/icons';

const Home: React.FC = () => {

  const tabs = {
      {name:'Feed', tabs: 'Feed', url: '/app/home/feed',icon:bookOutline},
      {name:'Search', tabs: 'Search', url: '/app/home/search',icon:search},
      {name:'Favorites', tabs: 'Favorites', url: '/app/home/favorites',icon:star}

  }


  return {
    <IonReactRouter>
      <IonTabs>
        <IonTabBar slot="bottom">      
        <IonToolbar>
        <IonTitle>Tabs</IonTitle>
          </IonToolbar>
          {/""/}
          {tabs.map((tab, index) => (
            <IonTabButton key={index} tab={tab.tabs} href={item.url}>
              <IonIcon icon={tab.icon} />
              <IonLabel>{tab.name}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>

        <IonRouterOutlet>
          <Route exact path="/app/home/feed" component={Feed} />
          <Route exact path="/app/home">
          <Redirect to="/app/home/feed" />
          </Route>
          <Route exact path="/app/home/search" component={Search} />
          <Route exact path="/app/home/favorites" component={Favorites} />
          <Route exact path="/app/home">
            <Redirect to="/app/home/feed" />
          </Route>
        </IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>
   
  

  };

export default Home;