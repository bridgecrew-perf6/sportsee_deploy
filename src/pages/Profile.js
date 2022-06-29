
import { Navigate, useParams } from 'react-router-dom';
import BarChartRender from '../components/BarChartRender';
import KeyData from '../components/KeyData';
import LineChartRender from '../components/LineChartRender';
import PieChartRender from '../components/PieChartRender';
import RadarChartRender from '../components/RadarChartRender';
import { urlMock } from '../utils/const/urlMock';
import { useApi } from '../utils/useApi/useApi';
import { useContext } from "react";
import { ModeContext } from "../utils/context"



/**
 * Page profil with all charts and infos
 * @returns {JSX} - React component - Page 
 */
const Profile = () => {
    const { id } = useParams()
    const { mode } = useContext(ModeContext)

    const url = mode

    const dataMain = useApi(url.userMainData(id))
    const dataActivity = useApi(url.userActivity(id))
    const dataAverageSessions = useApi(url.userAverageSessions(id))
    const dataPerformances = useApi(url.userPerformances(id))


    if (dataMain.errorUrl || dataActivity.errorUrl || dataAverageSessions.errorUrl || dataPerformances.errorUrl) {
        return <Navigate to="/error" />
    }

    return (
        <div className='Profile'>
            <header>
                <h1 className='title'>Bonjour <span className='firstname'>{dataMain?.data?.userInfos?.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </header>
            <div className='container-graph'>
                <div className='container-graph-recharts'>
                    <BarChartRender dataActivity={dataActivity?.data?.sessions} />
                    <div className='container-small-graph'>
                        <LineChartRender dataAverageSessions={dataAverageSessions?.data?.sessions} />
                        {dataPerformances && <RadarChartRender dataPerformances={dataPerformances.data.data} />}
                        <PieChartRender dataTodayScore={dataMain?.data} />
                    </div>
                </div>
                <KeyData keyData={dataMain?.data?.keyData} />
            </div>
            <span className='data-type'>{mode === urlMock ? "--- Données Mockées ---" : "--- Données de l'API ---"}</span>
        </div>
    );
};

export default Profile;