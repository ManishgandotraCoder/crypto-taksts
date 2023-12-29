import * as React from "react";
const CurrencyconvertorComponentHelper = React.lazy(() => import("../pages/currency-convertor/currency-convertor.helper"));
const routes = [
    {
        path: "/",
        element: (<CurrencyconvertorComponentHelper />
        ),
    },

]
export default routes