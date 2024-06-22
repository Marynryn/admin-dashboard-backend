import { catchAsync } from "../helpers/catchAsync.js";
import { fetchDashboard } from "../services/dashboardServices.js";

export const getDashboard = catchAsync(async (req, res) => {
  const dashboard = await fetchDashboard();
  res.status(200).json(dashboard);
});
