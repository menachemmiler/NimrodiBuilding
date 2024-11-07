import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { RootState } from "../store/store";

export default function ({ children }: PropsWithChildren) {
  const floorAccess = useSelector(
    (state: RootState) => state.floorAccess.floorAccess
  );

  const { index } = useParams<{ index: string }>();

  if (!index) return <Navigate to="/forbidden" />;

  const the_index = Number(index);

  if (!floorAccess[the_index]) {
    return <Navigate to="/forbidden" />;
  }

  return children;
}
