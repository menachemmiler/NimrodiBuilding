import roles from "../data/roles.json";
import allRoles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({
  activity,
  role,
  activities,
}: IuseActivityParams): boolean => {
  const indexActivity = activities.findIndex((a) => a == activity);
  const indexRole = allRoles.findIndex((r) => r == role);
  return indexRole >= indexActivity;
};

export default useIsVerified;
