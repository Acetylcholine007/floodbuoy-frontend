import requestAxios from "../../utils/requestAxios";

const getReports = async (loadingDispatch, snackbarDispatch, callback, target, isToday) => {
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: true } });
  let response = await requestAxios(`/reports?serialKey=${target}&isToday=${isToday}`);
  if (response.status === 200) {
    callback(response.reports);
  } else {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Failed to fetch reports",
        isOpen: true,
        severity: "error",
      },
    });
  }
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
};

const getReport = async (
  loadingDispatch,
  snackbarDispatch,
  callback,
  reportId
) => {
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: true } });
  let response = await requestAxios(`/reports/${reportId}`);
  if (response.status === 200) {
    callback();
  } else {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Failed to get report",
        isOpen: true,
        severity: "error",
      },
    });
  }
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
};

const postReport = async (
  loadingDispatch,
  snackbarDispatch,
  callback,
  data
) => {
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: true } });
  let response = await requestAxios(`/reports`, data, "POST");
  if (response.status === 200) {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Report added",
        isOpen: true,
        severity: "success",
      },
    });
    callback();
  } else {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Failed to Add report",
        isOpen: true,
        severity: "error",
      },
    });
  }
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
};

const patchReport = async (
  loadingDispatch,
  snackbarDispatch,
  callback,
  reportId,
  data
) => {
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: true } });
  let response = await requestAxios(`/reports/${reportId}`, data, "PATCH");
  if (response.status === 200) {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Report Edited",
        isOpen: true,
        severity: "success",
      },
    });
    callback();
  } else {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Failed to Edit Report",
        isOpen: true,
        severity: "error",
      },
    });
  }
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
};

const deleteReport = async (
  loadingDispatch,
  snackbarDispatch,
  callback,
  reportId
) => {
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: true } });
  let response = await requestAxios(`/reports/${reportId}`, {}, "DELETE");
  if (response.status === 200) {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Report deleted",
        isOpen: true,
        severity: "success",
      },
    });
    callback();
  } else {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Failed to Delete Report",
        isOpen: true,
        severity: "error",
      },
    });
  }
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
};

const ReportAPI = {
  getReports,
  getReport,
  postReport,
  patchReport,
  deleteReport,
};

export default ReportAPI;
