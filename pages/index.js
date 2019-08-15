import Items from '../components/Items';
// import {perPage} from '../config';

const Home = (props) => (
    <div>
        <Items page={parseFloat(props.query.page) || 1 }/>
    </div>

);

export default Home;
 