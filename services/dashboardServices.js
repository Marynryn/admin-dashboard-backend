import { Dashboard } from "../model/dashboardModel.js";

export const fetchDashboard = async () => {
  try {
    const dashboard = await Dashboard.findOne();

    return dashboard;
  } catch (error) {
    throw error;
  }
};
