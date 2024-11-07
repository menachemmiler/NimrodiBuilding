import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

interface IPrivateRoute {
  component: ReactNode;
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
  return component;
};

export default PrivateRoute;
