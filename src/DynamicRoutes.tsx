import { Route } from "react-router-dom";
// import { RouteComponentProps } from "react-router";

import { useCallback, useEffect, useRef, useState } from "react";
import { routes_config } from "./routes_config";
import { IonRouterOutlet } from "@ionic/react";
const DynamicRoutes: React.FC = () => {
  // const RouteWithSubRoutes = (route: any) => {
  //   console.log("React router without callback cache");
  //   return (
  //     <Route
  //       path={route.path}
  //       render={(props) => (
  //         // pass the sub-routes down to keep nesting
  //         <route.component {...props} routes={route.routes} />
  //       )}
  //     />
  //   );
  // };
  // console.log(routes_config);
  // const RouteWithSubRoutes = useCallback((route) => {
  //   return (
  //       <Route
  //         path={route.path}
  //         render={(props) => (
  //           <route.component {...props} routes={route.routes} />
  //         )}
  //       />
  //   );
  // }, []);

  return (
    <IonRouterOutlet>
      {routes_config.map((route, i) => (
        <>

          <Route
            path={route.path}
            key={i}
            render={(props) => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
        </>
      ))}
    </IonRouterOutlet>
  );
};

export default DynamicRoutes;
