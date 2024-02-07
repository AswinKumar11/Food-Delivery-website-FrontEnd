Syntax of class based component

class classComp extends React.component{
    constructor(props){
        super(props);
        this.state{
            count:0
        }
    }
    render(){
        return(
            ........jsx.......
        )
    }
}

this.setState({
    count:whatever you want
})

we have to use render function for rendering the component.
we have to use constructor and add super(props) to get props from parent
we have to initialize state inside constructor
we have to initialize this.setState to update state variables.
constructor will execute first and then render will execute followed by componentDidMount.
componentDidMount is used to make an apicalls. (similar to useEffect) it is done in such a way because in react first ui will render then hit api and then fill the data.

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


componentDidUpdate will be called once the dataChange happens with some state Change. (on reconcilation update cycle will be called for updating state variable)

componentWillUnmount will be called when the component is removed from dom.
