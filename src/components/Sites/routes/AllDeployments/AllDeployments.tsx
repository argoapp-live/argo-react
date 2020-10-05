import React, { useContext } from "react";
import "./AllDeployments.scss";
import Skeleton from "react-loading-skeleton";
import { ProjectTopCard } from "../_SharedComponent";
// import Switch from "react-switch";
import { ActionContext, StateContext } from "../../../../hooks";
import { IActionModel, IStateModel } from "../../../../model/hooks.model";
import { DeploymentItem } from "./components";
import moment from "moment";
import { useHistory } from "react-router-dom";

const AllDeployments = () => {
  const history = useHistory();
  // const [autoDeployment, setAutoDeployment] = useState<boolean>(true);
  const { projectLoading, selectedProject } = useContext<IStateModel>(StateContext);
  const { setRepoForTriggerDeployment } = useContext<IActionModel>(ActionContext);

  const sortedDeployments = projectLoading
    ? []
    : selectedProject?.deployments.sort((a, b) =>
        moment(b.createdAt).diff(moment(a.createdAt)),
      );

  const triggerDeployment = () => {
    setRepoForTriggerDeployment({
      github_url: selectedProject?.url,
      branch: selectedProject?.branch,
      publish_dir: selectedProject?.publish_dir,
      package_manager: selectedProject?.package_manager,
      build_command: selectedProject?.build_command,
    });
    history.push("/deploy/new");
  };

  return (
    <div className="AllDeployments">
      <ProjectTopCard />
      <div className="site-deployment-card-container deploy-container">
        <div className="site-deployment-header-title">Deploy Info</div>
        <div className="deploy-summary-item">
          <div className="deploy-summary-body-item">
            <label>Total Deployments:</label>
            <span>
              {!projectLoading ? (
                selectedProject?.deployments?.length
              ) : (
                <Skeleton width={20} duration={2} />
              )}
            </span>
          </div>
          <div className="deploy-summary-body-item">
            <label>Pending Deployments:</label>
            <span>
              {!projectLoading ? (
                selectedProject?.deployments?.filter(
                  (deployment) =>
                    deployment.deploymentStatus.toLowerCase() === "pending",
                ).length
              ) : (
                <Skeleton width={20} duration={2} />
              )}
            </span>
          </div>
          <div className="deploy-summary-body-item">
            <label>Successful Deployments:</label>
            <span>
              {!projectLoading ? (
                selectedProject?.deployments?.filter(
                  (deployment) =>
                    deployment.deploymentStatus.toLowerCase() === "deployed",
                ).length
              ) : (
                <Skeleton width={20} duration={2} />
              )}
            </span>
          </div>
          <div className="deploy-summary-body-item">
            <label>Failed Deployments:</label>
            <span>
              {!projectLoading ? (
                selectedProject?.deployments?.filter(
                  (deployment) =>
                    deployment.deploymentStatus.toLowerCase() === "failed",
                ).length
              ) : (
                <Skeleton width={20} duration={2} />
              )}
            </span>
          </div>
          {/* <div className="deploy-summary-body-item">
            <label>
              Auto Deployment:
              <br />
              <label>(Deploys from master are published automatically.)</label>
            </label>
            <Switch
              checked={autoDeployment}
              onChange={(checked) => setAutoDeployment(checked)}
              onColor="#3677e9"
              onHandleColor="#0a3669"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              className="react-switch"
            />
          </div> */}
        </div>
      </div>
      <div className="site-deployment-card-container deploy-container">
        <div className="site-deployment-header-title">
          <span>Deployments</span>
          <button className="trigger-deploy-button" onClick={triggerDeployment}>
            Trigger deploy
          </button>
        </div>
        <div className="deploy-summary-item">
          {!projectLoading ? (
            (sortedDeployments ? sortedDeployments : []).map((deployment, index) => (
              <DeploymentItem index={index} type="filled" deployment={deployment} />
            ))
          ) : (
            <>
              <DeploymentItem index={1} type="skeleton" deployment={null} />
              <DeploymentItem index={2} type="skeleton" deployment={null} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllDeployments;
