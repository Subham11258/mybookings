import {Tabs} from 'antd';
import MovieList from './MovieList';
function Admin(){
    const tabItems = [
        {
            key:'1',
            label:'Movies',
             children:<div><MovieList/></div>
        },
        {
            key:'2',
            label:'Theatres',
             children:<div>Theatres</div>
        }
    ]
    return (
        <div>
            <h1>Admin page</h1>
            <Tabs items={tabItems}/>
        </div>
    )
}

export default Admin;