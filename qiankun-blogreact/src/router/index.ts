/*
 * @Author: your name
 * @Date: 2021-03-05 16:36:31
 * @LastEditTime: 2021-03-09 13:28:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/router/router.tsx
 */
import Home from '../views/Home/Home';
// import Details from '../views/Details/Details';
import Details from '../views/Details/Details'
import Messages from '../views/Messages/Messages';
import Resumes from '../views/Resumes/Resumes';
// import NoMatch from '../views/NoMatch/NoMatch';

const routers = [{
  path:'/',
  exact: true,
  component: Home
},
{
  path:'/Details',
  exact: false,// 严格匹配
  component: Details
},
{
  path:'/Messages',
  exact: false,
  component: Messages
},
{
  path:'/Resumes',
  exact: false,
  component: Resumes
},
// {
//   path: '',
//   exact: false,
//   component: NoMatch
// }
];
export default routers;