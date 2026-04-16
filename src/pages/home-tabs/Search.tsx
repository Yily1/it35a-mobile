
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonSearchbar, IonItem } from '@ionic/react';
import { useState } from 'react';

const Search: React.FC = () =>{
 
    const data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  let [results, setResults] = useState([...data]);

  const handleInput = (event: Event) => {
    let query = '';
    const target = event.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(data.filter((d) => d.toLowerCase().indexOf(query) > -1));
  };

      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                    <IonMenuButton></IonMenuButton>
                     <IonTitle>Search</IonTitle>
                  </IonButtons>
                </IonToolbar>
                <IonSearchbar debounce={1000} onIonInput={(event) => handleInput(event)}></IonSearchbar>
              </IonHeader>
               <IonContent className="ion-padding">
                 {results.map((result) => (
                 <IonItem>{result}</IonItem>
                ))}
                
              </IonContent>
              </IonPage>
      );

};
export default Search;