import "../styles/quick-action-buttons.css";
import closeIcon from "../assets/close-icon.png";

export default function AddMember({ userId, groupId, closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="action-title">Add New User</h3>
        <div className="modal-content">
          <form className="action-form new-group-form">
            <div className="form-row">
              <label htmlFor="new-user">Select User</label>
              {/* need to users dynamically */}
              <select name="new-user" id="new-user">
                <option value="Hamza">Hamza</option>
                <option value="Kyle">Kyle</option>
                <option value="Lewis">Lewis</option>
              </select>
            </div>
            <input type="submit" value="Add User to Group" id="submit" />
          </form>
        </div>
        <img
          onClick={closeModal}
          src={closeIcon}
          alt=""
          className="close-icon"
        />
      </div>
    </div>
  );
}
