import './Dashboard.css';
import { useTranslation} from "react-i18next";


const Dashboard = ()=>{
  const {t} = useTranslation();
    return(
  <div class="d-flex" id="wrapper">
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="list-group list-group-flush">
        <a  class="list-group-item list-group-item-action bg-light">Dashboard</a>
        <a href="/developers" class="list-group-item list-group-item-action bg-light">{t('developers')}</a>
        <a  href ="/pipeline"class="list-group-item list-group-item-action bg-light">Pipelines</a>
        <a  href ="/pull-requests"class="list-group-item list-group-item-action bg-light">Pull Requests</a>
        <a class="list-group-item list-group-item-action bg-light">{t('sideBar_settings')}</a>
      </div>
    </div>
    <div id="page-content-wrapper">
      <div class="container-fluid" >

      </div>
    </div>


  </div>

    )
}
export default Dashboard