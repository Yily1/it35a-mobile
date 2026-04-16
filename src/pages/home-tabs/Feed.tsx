

import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonSearchbar } from '@ionic/react';

const Feed: React.FC = () =>{

  const labels = [ 
    {name: 'Pokémon Yellow'},
     {name: 'Mega Man X'},
      {name: 'The Legend of Zelda'},
       {name: 'Pac-Man'},
       {name: 'Super Mario World'}
       
  ]

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
                <h1>Naa lgi ka deri?</h1>
                <IonSearchbar value="Search"></IonSearchbar>
                 {/**/}
           {labels.map((item, index) =>(
                <IonList>
                  <IonListHeader>
                    <IonLabel>{item.name}</IonLabel>
                  </IonListHeader>
             </IonList>

           ))}

              </IonContent>
              </IonPage>
      );

};
export default Feed;
