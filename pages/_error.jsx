
import Error from "next/error";

const App = (props) => {
    return (
        <Error statusCode={props.statusCode} />
    );
};

App.getInitialProps = ({res, err}) => {
    let statusCode = 404;

    if(res){
        statusCode = res.statusCode;
    }
    else if(err){
        statusCode = err.statusCode;
    }

    return {
        statusCode: statusCode
    };
};

export default App;
