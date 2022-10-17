import { createSlice } from "@reduxjs/toolkit";
import { ApartmentKey } from "../../constants";
import { GetItem, SetItem } from "../../hooks/Localstorage";

const initialState = {
  apartment: [],
  status: null,
  statusoneapartment: false,
};

const AllDataApartment = createSlice({
  name: "apartment",
  initialState,
  reducers: {
    getAllApartment: (state) => {
      state.apartment = GetItem({ key: ApartmentKey }) || [];
    },
    setAPartment: (state, action) => {
      state.apartment.push(action.payload);
      SetItem({ key: ApartmentKey, body: state.apartment });
    },
    deleteApartment: (state, action) => {
      console.log(action.payload);
      SetItem({
        key: ApartmentKey,
        body: action.payload,
      });
      state.apartment = action.payload
    },
  },
});
export const apartmentActions = AllDataApartment.actions;
export default AllDataApartment;
