import React from "react";

// Class Component
// class Card extends React.Component {
//   render() {
//     return (
//       <div
//         style={{
//           background: "white",
//           display: "flex",
//           flexDirection: "column",
//           width: 300,
//           height: 420,
//           border: "1px solid #292f36",
//         }}
//       >
//         <div>{this.props.title}</div>
//         <div>{this.props.description}</div>
//       </div>
//     );
//   }
// }

// Functional Component
const Card = ({ title, description }) => {
  return (
    <div
      style={{
        background: "white",
        display: "flex",
        flexDirection: "column",
        width: 300,
        height: 420,
        border: "1px solid #292f36",
      }}
    >
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default Card;
