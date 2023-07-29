import { ChangeEvent, useEffect } from "react";

interface BerkasProps {
  cv: string | null;
  krs: string | null;
  ktm: string | null;
  ktp: string | null;
  pasFoto: string | null;
  dns: string | null;
  sertifikat: string | null;
  handleFileChangeCV: (file: File) => void;
  handleFileChangeKRS: (file: File) => void;
  handleFileChangeKTM: (file: File) => void;
  handleFileChangeKTP: (file: File) => void;
  handleFileChangePasFoto: (file: File) => void;
  handleFileChangeDNS: (file: File) => void;
  handleFileChangeSertifikat: (file: File) => void;
}

const BerkasStep = (props: BerkasProps) => {
  const handleFileChangeCV = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      props.handleFileChangeCV(file);
    }
  };
  const handleFileChangeKRS = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      props.handleFileChangeKRS(file);
    }
  };
  const handleFileChangePasFoto = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      props.handleFileChangePasFoto(file);
    }
  };
  const handleFileChangeKTM = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      props.handleFileChangeKTM(file);
    }
  };
  const handleFileChangeKTP = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      props.handleFileChangeKTP(file);
    }
  };
  const handleFileChangeDNS = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      props.handleFileChangeDNS(file);
    }
  };

  const handleFileChangeSertifikat = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      props.handleFileChangeSertifikat(file);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-center items-center text-3xl font-bold my-5">
        Kelengkapan Berkas
      </div>
      <div className="flex flex-col gap-5 mb-3 w-auto">
        <div className="flex w-full flex-col gap-2">
          <label className="required">Unggah CV</label>
          <div>
            <div className="flex items-center gap-2 border  border-gray-300 rounded-md">
              <label
                htmlFor="input-file-cv"
                className="bg-black text-white w-[7em] text-center py-1 border-r border-r-black rounded-l-md"
              >
                Pilih File
              </label>
              <input
                type="file"
                name="input-file-cv"
                id="input-file-cv"
                onChange={handleFileChangeCV}
                accept="application/pdf"
                hidden
              />
              <div className="text-sm text-gray-900 truncate">
                {props?.cv ?? "Tidak ada file dipilih"}
              </div>
            </div>
            <span className="text-xs">.pdf</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="required">Unggah KRS</label>
          <div>
            <div className="flex items-center gap-2 border  border-gray-300 rounded-md">
              <label
                htmlFor="file-input-krs"
                className="bg-black text-white w-[7em] text-center py-1 border-r border-r-black rounded-l-md"
              >
                Pilih File
              </label>
              <input
                type="file"
                name="file-input-krs"
                id="file-input-krs"
                onChange={handleFileChangeKRS}
                accept="application/pdf"
                hidden
              />
              <div className="text-sm text-gray-900 truncate">
                {props.krs ?? "Tidak ada file dipilih"}
              </div>
            </div>
            <span className="text-xs">.pdf</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="required">Unggah Pas Foto</label>
          <div>
            <div className="flex items-center gap-2 border rounded-md">
              <label
                htmlFor="file-input-pas-foto"
                className="bg-black text-white w-[7em] text-center py-1 border-r border-r-black rounded-l-md"
              >
                Pilih File
              </label>
              <input
                type="file"
                name="file-input-pas-foto"
                id="file-input-pas-foto"
                onChange={handleFileChangePasFoto}
                accept="image/png, image/jpg, image/jpeg"
                hidden
              />
              <div className="text-sm">
                {props?.pasFoto ?? "Tidak ada file dipilih"}
              </div>
            </div>
            <span className="text-xs">.png .jpeg .jpg</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="required">Unggah KTM</label>
          <div>
            <div className="flex items-center gap-2 border rounded-md">
              <label
                htmlFor="file-input-ktm"
                className="bg-black text-white w-[7em] text-center py-1 border-r border-r-black rounded-l-md"
              >
                Pilih File
              </label>
              <input
                type="file"
                name="file-input-ktm"
                id="file-input-ktm"
                onChange={handleFileChangeKTM}
                accept="image/png, image/jpeg, image/jpg"
                hidden
              />
              <div className="text-sm">
                {props?.ktm ?? "Tidak ada file dipilih"}
              </div>
            </div>
            <span className="text-xs">.png .jpeg .jpg</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="required">Unggah KTP</label>
          <div>
            <div className="flex items-center gap-2 border rounded-md">
              <label
                htmlFor="file-input-ktp"
                className="bg-black text-white w-[7em] text-center py-1 border-r border-r-black rounded-l-md"
              >
                Pilih File
              </label>
              <input
                type="file"
                name="file-input-ktp"
                id="file-input-ktp"
                onChange={handleFileChangeKTP}
                accept="image/png, image/jpg, image/jpeg"
                hidden
              />
              <div className="text-sm">
                {props?.ktp ?? "Tidak ada file dipilih"}
              </div>
            </div>
            <span className="text-xs">.png .jpeg .jpg</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="required">Unggah Rangkuman Nilai</label>
          <div>
            <div className="flex items-center gap-2 border rounded-md">
              <label
                htmlFor="file-input-dns"
                className="bg-black text-white w-[7em] text-center py-1 border-r border-r-black rounded-l-md"
              >
                Pilih File
              </label>
              <input
                type="file"
                name="file-input-dns"
                id="file-input-dns"
                onChange={handleFileChangeDNS}
                accept="application/pdf"
                hidden
              />
              <div className="text-sm">
                {props?.dns ?? "Tidak ada file dipilih"}
              </div>
            </div>
            <span className="text-xs">.pdf</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label>Unggah Sertifikat (Opsional)</label>
          <div>
            <div className="flex items-center gap-2 border rounded-md">
              <label
                htmlFor="file-input-sertifikat"
                className="bg-black text-white w-[7em] text-center py-1 border-r border-r-black rounded-l-md"
              >
                Pilih File
              </label>
              <input
                type="file"
                name="file-input-sertifikat"
                id="file-input-sertifikat"
                onChange={handleFileChangeSertifikat}
                accept="application/pdf"
                hidden
              />
              <div className="text-sm">
                {props?.sertifikat ?? "Tidak ada file dipilih"}
              </div>
            </div>
            <span className="text-xs">
              .pdf, <b>gabungkan sertifikat jika lebih dari 1</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BerkasStep;
