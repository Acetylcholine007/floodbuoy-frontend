import requestAxios from "../../utils/requestAxios";

const getReading = async (
  loadingDispatch,
  snackbarDispatch,
  callback,
  serialKey
) => {
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: true } });
  let response = await requestAxios(`/readings/${serialKey}`);
  if (response.status === 200) {
    console.log(response)
    callback(response.reading);
  } else {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Failed to get Reading",
        isOpen: true,
        severity: "error",
      },
    });
  }
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
};

const getBuoys = async (loadingDispatch, snackbarDispatch, callback) => {
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: true } });
  let response = await requestAxios(`/buoys`);
  if (response.status === 200) {
    callback(response.buoys);
  } else {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Failed to fetch buoys",
        isOpen: true,
        severity: "error",
      },
    });
  }
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
};

const getBuoy = async (loadingDispatch, snackbarDispatch, callback, buoyId) => {
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: true } });
  let response = await requestAxios(`/buoys/${buoyId}`);
  if (response.status === 200) {
    callback();
  } else {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Failed to get Buoy",
        isOpen: true,
        severity: "error",
      },
    });
  }
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
};

const postBuoy = async (loadingDispatch, snackbarDispatch, callback, data) => {
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: true } });
  let response = await requestAxios(`/buoys`, data, "POST");
  if (response.status === 200) {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Buoy added",
        isOpen: true,
        severity: "success",
      },
    });
    callback();
  } else {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Failed to Add Buoy",
        isOpen: true,
        severity: "error",
      },
    });
  }
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
};

const patchBuoy = async (
  loadingDispatch,
  snackbarDispatch,
  callback,
  buoyId,
  data
) => {
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: true } });
  let response = await requestAxios(`/buoys/${buoyId}`, data, "PATCH");
  if (response.status === 200) {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Buoy Edited",
        isOpen: true,
        severity: "success",
      },
    });
    callback();
  } else {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Failed to Edit Buoy",
        isOpen: true,
        severity: "error",
      },
    });
  }
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
};

const deleteBuoy = async (
  loadingDispatch,
  snackbarDispatch,
  callback,
  buoyId
) => {
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: true } });
  let response = await requestAxios(`/buoys/${buoyId}`, {}, "DELETE");
  if (response.status === 200) {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Buoy deleted",
        isOpen: true,
        severity: "success",
      },
    });
    callback();
  } else {
    snackbarDispatch({
      type: "SET_PARAMS",
      payload: {
        message: "Failed to Delete Buoy",
        isOpen: true,
        severity: "error",
      },
    });
  }
  loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
};

const BuoyAPI = {
  getReading,
  getBuoys,
  getBuoy,
  postBuoy,
  patchBuoy,
  deleteBuoy,
};

export default BuoyAPI;
