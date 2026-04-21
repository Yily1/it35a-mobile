

import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonSearchbar, IonButton, IonAlert } from '@ionic/react';

const Feed: React.FC = () =>{

      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                    <IonMenuButton></IonMenuButton>
                     <IonTitle>Feed</IonTitle>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                <h1>Feed</h1>
                  <IonButton id="present-alert">Click Me</IonButton>
                  <IonAlert
        trigger="present-alert"
        header="Naa sad lgi ka deri?"
        buttons={['Back kana']}
      ></IonAlert>
              </IonContent>
              </IonPage>
      );
    

};
export default Feed;
