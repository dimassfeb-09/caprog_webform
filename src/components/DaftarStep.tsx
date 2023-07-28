import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { Dispatch } from "react";

type DaftarProps = {
  npm: string;
  location: string;
  major: string;
  setNpm: Dispatch<React.SetStateAction<string>>;
  setLocation: Dispatch<React.SetStateAction<string>>;
  setMajor: Dispatch<React.SetStateAction<string>>;
};

const DaftarStep = (props: DaftarProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-center items-center text-3xl font-bold my-5">
        Daftar
      </div>

      <div className="flex flex-col gap-2 mb-3 w-auto">
        <label htmlFor="name" className="required">
          NPM
        </label>
        <TextField
          className="border bg-white h-12 rounded-md"
          onChange={(e) => props.setNpm(e.target.value)}
          value={props.npm}
          type="number"
        ></TextField>
        <span
          className={
            props.npm.length < 8 ? "block text-sm text-red-500" : "hidden"
          }
        >
          NPM harus 8 angka
        </span>
      </div>

      <FormControl fullWidth className="flex flex-col gap-2">
        <label htmlFor="Lokasi Kuliah" className="required">
          Lokasi Kuliah
        </label>
        <Select
          defaultValue="Select"
          value={props.location}
          onChange={(e) => props.setLocation(e.target.value)}
        >
          <MenuItem value={"Kalimalang"}>Kalimalang</MenuItem>
          <MenuItem value={"Depok"}>Depok</MenuItem>
          <MenuItem value={"Karawaci"}>Karawaci</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth className="flex flex-col gap-2">
        <label htmlFor="Lokasi Kuliah" className="required">
          Jurusan
        </label>
        <Select
          defaultValue="Select"
          value={props.major}
          onChange={(e) => props.setMajor(e.target.value)}
        >
          <MenuItem value={"Teknik Informatika"}>Teknik Informatika</MenuItem>
          <MenuItem value={"Sistem Informasi"}>Sistem Informasi</MenuItem>
          <MenuItem value={"Psikolog"}>Psikolog</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default DaftarStep;
