import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { phonePortraitOutline, cubeOutline, mapOutline } from "ionicons/icons";
// import Tab1 from './pages/Tab1';
// import Tab2 from './pages/Tab2';
// import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

// import DynamicRoutes from "./DynamicRoutes";
// import { routes_config } from "./routes_config";
import TextPage from "./pages/TextPage";
import Tab3 from "./pages/Tab3";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import { useDarkMode } from "./hooks/useDarkMode";

setupIonicReact();
const App: React.FC = () => {
  useDarkMode(true);
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/* {routes_config.map((route, i) => (
              <Route
                path={route.path}
                key={i}
                component={(props: any) => (
                  // pass the sub-routes down to keep nesting
                  <route.component {...props} />
                )}
              />
            ))} */}

            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>


            <Route exact path="/tab1" render={(props) => <Tab1 {...props} />} />
            <Route exact path="/tab2" render={(props) => <Tab2 {...props} />} />
            <Route path="/tab2/:name"  component={(props:any) => <TextPage {...props} />}/>
            <Route exact path="/tab3" render={(props) => <Tab3 {...props} />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={mapOutline} />
              <IonLabel>Map</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={cubeOutline} />
              <IonLabel>Components</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={phonePortraitOutline} />
              <IonLabel>Native</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
