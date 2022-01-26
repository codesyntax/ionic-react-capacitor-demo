import { Component, FunctionComponent } from "react";
import Tab1 from "./pages/Tab1";
import Tab3 from "./pages/Tab3";
import TextPage from "./pages/TextPage";
import Tab2 from "./pages/Tab2";
export interface RouteInterface {
    path: string;
    component: FunctionComponent<any> | Component<any, any> | any;
    routes?: RouteInterface[];
}
// export interface RoutesInterface {
//     name: string;
// }
export const routes_config: RouteInterface[] = [
    {
        path: "/tab1",
        component: Tab1,
    },
    {
        path: "/tab2",
        component: Tab2,
    },
    {
        path: "/tab2/test",
        component: TextPage,
    },
    {
        path: "/tab3",
        component: Tab3,
    },
];