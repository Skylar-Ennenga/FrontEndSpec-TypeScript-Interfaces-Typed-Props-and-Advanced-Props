import React, { ReactNode } from "react";
import { CardProps } from "../interfaces/CardInfo";
import "../App.css";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
<div className="card">
  <div className="card-header">Top Of the Component</div>
  <div className="card-content">{children}</div>
  <div className="card-footer">The bottom of the Component</div>
</div>
  );
};

export default Card;
