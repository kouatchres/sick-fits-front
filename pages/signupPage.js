import Signup from '../components/Signup';
import Signin from '../components/Signin';
import RequestReset from '../components/RequestReset';
import styled from 'styled-components';

const SignupSections = styled.div `
display:grid;
grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
grid-gap:10px;
padding:10px;
`;

const signupPage = (props) => (
    <SignupSections>
        <Signup/>
        <Signin/>
        <RequestReset/>
    </SignupSections>
);

export default signupPage;