import "../styles/dashboard.css";
import { GroupsList } from "../components/groups-list";
import { useParams } from "react-router-dom";
import { GroupsData } from "../methods/use-axios.ts";
import { TopBar } from "../components/dashboard-topbar";
import React, { useState } from "react";

import AddNewGroup from "../components/add-new-group";

export function Groups() {
  const [modalType, setModalType] = useState(null); // null means no modal is open

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);
  let params = useParams();
  const [loading, data, error, request] = GroupsData(params.id);

  console.log(data.entries());
  return (
    <div className="dashboard-content">
      <div className="topbar">
        <TopBar pageName="Groups" />
      </div>
      <div className="groups-wrapper">
        <div className="groups-header">
          <h1 className="groups-title">Groups</h1>
          <button
            onClick={() => openModal("AddNewGroup")}
            className="add-group-button"
          >
            + New Group
          </button>
        </div>
        <div className="groups-list-wrapper">
          <p className="group-members-title">No. of Members</p>
          <ul className="groups-component">
            <li className="groups-component-list">
              <GroupsList
                userId={params.id}
                loading={loading}
                data={data}
                error={error}
              />
            </li>
          </ul>
        </div>
        {modalType === "AddNewGroup" && (
          <AddNewGroup
            userId={params.id}
            groupId={params.groupId}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}
