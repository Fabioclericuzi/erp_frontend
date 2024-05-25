import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageTitle from "src/components/PageTitle";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import { PermissionMiddleware } from "src/middlewares/PermissionMiddleware";
import { GroupDetail } from "src/models/Group";
import { useRequests } from "src/utils/requests";


const Groups = () => {
    const [requestLoading, setRequestLoading] = useState(true);
    const [groupsData, setGroupsData] = useState<GroupDetail[]>([])

    const { getGroups } = useRequests();

    const handleGetGroups = async () => {
        const response = await getGroups();

        setGroupsData(response.data.groups)
        setRequestLoading(false)
    }

    useEffect(() => {
        handleGetGroups();
    }, [])
    
    
    return (
       <PermissionMiddleware codeName="view_group">
            <Helmet>
                <title>Cargos</title>
            </Helmet>

            <PageTitleWrapper>
                <PageTitle 
                    heading="Cargos"
                    subHeading="Consulte os cargos da empresa e execute ações"
                />

                
            </PageTitleWrapper>

       </PermissionMiddleware>
    );
}

export default Groups;