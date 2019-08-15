import {Query} from 'react-apollo';
import Signin from './Signin';
import {CURRENT_USER_QUERY} from './User';

const PleaseSignIn = (props) => (
    <Query query={CURRENT_USER_QUERY}>
        {({data, loading}) => {
            if (loading) 
                return <p>Loading...</p>;
            if (!data.me) {
            console.log(data);
                return (
                    <div>
                        <p>Please Signin before coninuing!</p>
                        <Signin />
                    </div>
                );
            }
            return props.children;

        }}
    </Query>
);
export default PleaseSignIn;