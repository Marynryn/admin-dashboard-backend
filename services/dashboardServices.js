import { Dashboard } from "../model/dashboardModel.js";

export const fetchDashboard = async () => {
  try {
    const dashboard = await Dashboard.findOne();
    console.log("Fetched dashboard:", dashboard);
    return dashboard;
  } catch (error) {
    console.error("Error fetching dashboard:", error);
    throw error;
  }
};
