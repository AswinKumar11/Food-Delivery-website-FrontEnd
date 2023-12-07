USE Effect :
    If there is no dependency array it will trigger on every render of that component.
    If it have empty dependency array it will call only on initial render (only once).

Use State:
    It should be defined only inside the component.If we define outside it'll throw error.
    Never use useState in conditions.(if else)

React router dom
    We need to use createBrowserRouter for setting path configuration.
    We need to use RouterProvider for providing the route to render.
    https://reactrouter.com/en/main doc.
    there are different router config for different purpose. refer doc for that.
    We can set up errorMessages if they provide some wrong url.
    React router dom gives one hook for getting more information of error useRouterError.
    outlet is a key in react router dom which will fill the children component of the route accordingly.
    we should not use anchor tag for routing in react because it'll refresh the whole page.
    link is a component provided by react router dom which will work as same as anchor tag but it'll not refresh the whole page.


Two types of routing.
    client side (react router dom)
    server side



    UseParams is a hooks which will give the dynamic value of the current route