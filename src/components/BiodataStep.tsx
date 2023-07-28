import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { ChangeEvent, Dispatch, useState } from "react";

type BiodataProps = {
  nama: string;
  kelas: string;
  jenisKelamin: string;
  tempatLahir: string;
  tanggalLahir?: Date;
  alamat: string;
  phone: string;
  email: string;
  positionApply: string;
  ipk: number | null;
  setNama: Dispatch<React.SetStateAction<string>>;
  setKelas: Dispatch<React.SetStateAction<string>>;
  setJenisKelamin: Dispatch<React.SetStateAction<string>>;
  setTempatLahir: Dispatch<React.SetStateAction<string>>;
  setTanggalLahir: Dispatch<React.SetStateAction<Date | undefined>>;
  setAlamat: Dispatch<React.SetStateAction<string>>;
  setPhone: Dispatch<React.SetStateAction<string>>;
  setEmail: Dispatch<React.SetStateAction<string>>;
  setPositionApply: Dispatch<React.SetStateAction<string>>;
  setIpk: Dispatch<React.SetStateAction<number | null>>;
};

const BiodataStep = (props: BiodataProps) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-center items-center text-3xl font-bold my-5">
        Kelengkapan Biodata
      </div>
      <div className="flex justify-between gap-3">
        <div className="flex flex-col w-1/2 gap-1">
          <label htmlFor="name" className="required">
            Nama
          </label>
          <TextField
            type="text"
            className="border bg-white w-auto px-2 rounded-md"
            value={props.nama}
            onChange={(e) => props.setNama(e.target.value)}
          ></TextField>
        </div>
        <div className="flex flex-col w-1/2 gap-1">
          <label htmlFor="class" className="required">
            Kelas
          </label>
          <TextField
            type="text"
            className="border bg-white w-auto px-2 rounded-md"
            value={props.kelas}
            onChange={(e) => props.setKelas(e.target.value)}
          ></TextField>
        </div>
      </div>
      <FormControl fullWidth className="flex flex-col gap-2">
        <label htmlFor="jenis_kelamin" className="required">
          Jenis Kelamin
        </label>
        <Select
          defaultValue="Select"
          value={props.jenisKelamin}
          onChange={(e) => props.setJenisKelamin(e.target.value)}
        >
          <MenuItem value={"Select"} disabled>
            Pilih Jenis Kelamin
          </MenuItem>
          <MenuItem value={"L"}>Laki-Laki</MenuItem>
          <MenuItem value={"P"}>Perempuan</MenuItem>
        </Select>
      </FormControl>
      <div className="flex w-full gap-3">
        <div className="flex flex-col w-1/2 gap-1">
          <label htmlFor="tempat_lahir" className="required">
            Tempat Lahir
          </label>
          <TextField
            type="text"
            className="border bg-white w-auto px-2 rounded-md"
            value={props.tempatLahir}
            onChange={(e) => props.setTempatLahir(e.target.value)}
          ></TextField>
        </div>
        <div className="flex flex-col w-1/2 gap-1">
          <label htmlFor="tanggal_lahir" className="required">
            Tanggal Lahir
          </label>
          <DatePicker
            defaultValue={dayjs(new Date().getDate())}
            value={dayjs(props.tanggalLahir?.toDateString())}
            onChange={(e) => {
              if (e?.toDate != null) {
                props.setTanggalLahir(e.toDate());
              }
            }}
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-1">
        <label htmlFor="alamat" className="required">
          Alamat
        </label>
        <TextField
          type="text"
          className="border bg-white w-auto px-2 rounded-md"
          value={props.alamat}
          onChange={(e) => props.setAlamat(e.target.value)}
        ></TextField>
      </div>

      <div className="flex flex-col w-full gap-1">
        <label htmlFor="phone" className="required">
          No HP
        </label>
        <TextField
          type="number"
          className="border bg-white rounded-md w-full"
          value={props.phone}
          onChange={(e) => props.setPhone(e.target.value)}
        ></TextField>
      </div>

      <div className="flex flex-col w-full gap-1">
        <label htmlFor="email" className="required">
          Email
        </label>
        <TextField
          type="email"
          className="border bg-white rounded-md w-full"
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)}
        ></TextField>
      </div>
      <FormControl fullWidth className="flex flex-col gap-2">
        <label htmlFor="position_apply" className="required">
          Posisi Daftar
        </label>
        <Select
          defaultValue="Select"
          value={props.positionApply}
          onChange={(e) => props.setPositionApply(e.target.value)}
        >
          <MenuItem value={"Select"} disabled>
            Pilih Posisi Daftar
          </MenuItem>
          <MenuItem value={"Asisten"}>Asisten Lab</MenuItem>
          <MenuItem value={"Programmer"}>Programmer</MenuItem>
        </Select>
      </FormControl>
      <div className="flex flex-col w-full gap-1">
        <label htmlFor="email" className="required">
          IPK Terakhir
        </label>
        <TextField
          type="number"
          className="border bg-white rounded-md w-full"
          value={props.ipk}
          onChange={(e) => {
            if (Number(e.target.value) < 0) {
              props.setIpk(0);
              return;
            } else if (Number(e.target.value) > 4) {
              props.setIpk(4);
              return;
            }

            props.setIpk(Number(e.target.value) || null);
          }}
        ></TextField>
      </div>
    </div>
  );
};

export default BiodataStep;
