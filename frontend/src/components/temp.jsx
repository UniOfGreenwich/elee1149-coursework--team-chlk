// import React, { useState, useEffect } from "react";

// import closeIcon from "../assets/close-icon.png";

// // importing styles
// import "../styles/quick-action-buttons.css";

// const AddExpense = ({ closeModal, userId, groupId }) => {
//   const [users, setUsers] = useState([]); // Store fetched users
//   const [selectedUsers, setSelectedUsers] = useState([]); // Store selected users
//   const [shareOption, setShareOption] = useState("equal"); // Radio button selection
//   const [customAmounts, setCustomAmounts] = useState({}); // Store custom amounts for each user
//   const [splitAmounts, setSplitAmounts] = useState({}); // Stores split amounts per user
//   const [amount, setAmount] = useState(0); // Store the total expense amount

//   // getting the users in the group
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8080/group/${groupId}/${userId}/users`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // handling user selection from the dropdown
//   const handleUserSelection = (e) => {
//     const selectedUserIds = Array.from(e.target.selectedOptions, (option) =>
//       parseInt(option.value)
//     );

//     // Get full user objects from selected IDs
//     const selectedUserObjects = users.filter((user) =>
//       selectedUserIds.includes(user.userId)
//     );

//     setSelectedUsers(selectedUserObjects);

//     // If "Equal" is selected, update the split amounts
//     if (shareOption === "equal") {
//       splitEqually(selectedUserObjects, amount);
//     }
//   };

//   // handling the share option (Equal or custom)
//   const handleShareOptionChange = (e) => {
//     setShareOption(e.target.value);

//     if (e.target.value === "equal") {
//       splitEqually(selectedUsers, amount);
//     }
//   };

//   // Handling custom amount input for each user
//   const handleCustomAmountChange = (userId, amount) => {
//     setCustomAmounts((prev) => ({
//       ...prev,
//       [userId]: amount,
//     }));
//   };

//   // handling amount input change
//   const handleAmountChange = (e) => {
//     const newAmount = parseFloat(e.target.value) || 0;
//     setAmount(newAmount);

//     if (shareOption === "equal") {
//       splitEqually(selectedUsers, newAmount);
//     }
//   };

//   // Function to split amount equally
//   const splitEqually = (selectedUsers, totalAmount) => {
//     if (selectedUsers.length === 0 || totalAmount === 0) {
//       setSplitAmounts({});
//       return;
//     }

//     const equalShare = (totalAmount / (selectedUsers.length + 1)).toFixed(2);
//     const splitData = {};
//     selectedUsers.forEach((user) => {
//       splitData[user.userId] = equalShare;
//     });

//     setSplitAmounts(splitData);
//   };

//   // Handling form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const expenseData = {
//       // Collect necessary data and prepare it for backend
//       users: selectedUsers.map((user) => ({
//         userId: user.userId,
//         amount:
//           shareOption === "equal"
//             ? amount / selectedUsers.length
//             : customAmounts[user.userId] || 0,
//       })),
//     };
//     console.log(expenseData);
//   };

//   return (
//     <div className="modal-overlay" onClick={closeModal}>
//       <div className="modal-box" onClick={(e) => e.stopPropagation()}>
//         <h3 className="action-title">Add Expense</h3>
//         <div className="modal-content">
//           <form action="#" className="expense-form" onSubmit={handleSubmit}>
//             <div className="form-row">
//               <label htmlFor="user" className="expense-user">
//                 Select Users:
//               </label>
//               <select
//                 className="expense-user-field"
//                 multiple
//                 onChange={handleUserSelection}
//               >
//                 {users.map((user) => (
//                   <option key={user.userId} value={user.userId}>
//                     {user.firstName} {user.lastName}
//                   </option>
//                 ))}
//               </select>
//               {console.log(
//                 selectedUsers
//                   .map((user) => `${user.firstName} ${user.lastName}`)
//                   .join(", ")
//               )}
//             </div>

//             <div className="form-row settle-container">
//               <p className="settlement-option">Share Option:</p>
//               <div className="radio-inputs">
//                 <div className="radio-input">
//                   <input
//                     type="radio"
//                     id="equal"
//                     value="equal"
//                     name="share"
//                     checked={shareOption === "equal"}
//                     onChange={handleShareOptionChange}
//                   />
//                   <label htmlFor="equal">Equal</label>
//                 </div>

//                 <div className="radio-input">
//                   <input
//                     type="radio"
//                     id="custom"
//                     value="custom"
//                     name="share"
//                     checked={shareOption === "custom"}
//                     onChange={handleShareOptionChange}
//                   />
//                   <label htmlFor="custom">Custom</label>
//                 </div>
//               </div>
//             </div>

//             <div className="form-row">
//               <label htmlFor="name" className="expense-name">
//                 Expense Name:
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Enter Expense Name"
//                 required
//               />
//             </div>
//             <div className="form-row">
//               <label htmlFor="description" className="expense-description">
//                 Description:
//               </label>
//               <input
//                 type="text"
//                 id="description "
//                 placeholder="Enter Description"
//                 required
//               />
//             </div>
//             <div className="form-row">
//               <label htmlFor="category">Choose Category: </label>
//               <select
//                 name="category"
//                 id="category"
//                 className="expense-category"
//                 required
//               >
//                 <option selected disabled value="">
//                   Select Category
//                 </option>
//                 <option value="Transportation">Transportation</option>
//                 <option value="Entertainment">Entertainment</option>
//                 <option value="Food and Drink">Food and Drink</option>
//                 <option value="Utilities">Utilities</option>
//                 <option value="Miscellaneous">Miscellaneous</option>
//               </select>
//             </div>
//             <div className="form-row">
//               <label htmlFor="amount" className="expense-description">
//                 Amount:
//               </label>
//               <input
//                 type="number"
//                 id="amount"
//                 placeholder="Enter Amount"
//                 value={amount}
//                 onChange={handleAmountChange}
//                 required
//               />
//             </div>

//             {/* Show Custom Inputs if Custom option is selected */}
//             {shareOption === "custom" && selectedUsers.length > 0 && (
//               <div className="custom-amounts">
//                 <h4 className="action-title">Custom Amounts</h4>
//                 {selectedUsers.map((user) => (
//                   <div key={user.userId} className="custom-amount-input">
//                     <label className="custom-user-name">
//                       {user.firstName} {user.lastName}
//                     </label>
//                     <input
//                       className="custom-amount-field"
//                       type="number"
//                       placeholder="Enter Custom Amount"
//                       value={customAmounts[user.userId] || ""}
//                       onChange={(e) =>
//                         handleCustomAmountChange(user.userId, e.target.value)
//                       }
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}

//             <div className="form-row">
//               <p className="selected-users">
//                 <span className="selected-users-title">Selected Users:</span>{" "}
//                 {selectedUsers
//                   .map((user) => `${user.firstName} ${user.lastName}`)
//                   .join(", ")}
//               </p>
//             </div>

//             {shareOption === "equal" && selectedUsers.length > 0 && (
//               <div className="selected-users">
//                 <p className="selected-users-title">Equal Split:</p>
//                 <ul>
//                   {selectedUsers.map((user) => (
//                     <li key={user.userId}>
//                       {user.firstName} {user.lastName}: £
//                       {splitAmounts[user.userId]
//                         ? splitAmounts[user.userId]
//                         : "0.00"}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             <div className="form-row">
//               <input type="submit" value="Add Expense" />
//             </div>
//           </form>
//         </div>
//         <img
//           onClick={closeModal}
//           src={closeIcon}
//           alt=""
//           className="close-icon"
//         />
//       </div>
//     </div>
//   );
// };

// export default AddExpense;
