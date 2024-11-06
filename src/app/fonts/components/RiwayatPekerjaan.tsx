function RowRiwayat(props: any) {
  return (
    <div className="border-2 border-black/75 rounded-lg bg-blue-300 p-1 my-3">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-4 text-sm">{props.sebagai}</div>
          <div className="col-span-12 md:col-span-4 text-sm">{props.instansi}</div>
          <div className="col-span-12 md:col-span-4 text-sm">{props.tahun}</div>
        </div>
      </div>
    </div>
  );
}

export default function riwayatpekerjaan() {
  return (
    <section >
      {/* Riwayat Pekerjaan */}
      <div className="container mx-auto p-2 text-center pt-19">
        <h2 className="text-xl font-bold mb-4">Riwayat Pekerjaan</h2>

        <RowRiwayat sebagai="Akuntan" instansi="PT Spectra" tahun="2019" />
        <RowRiwayat sebagai="Perpajakan" instansi="PT Spectra Consultans" tahun="2020" />
        <RowRiwayat sebagai="Programer" instansi="CVGMedia" tahun="2022" />
        <RowRiwayat sebagai="Affiliator" instansi="Tiktok" tahun="2023" />
      </div>
      {/* End Riwayat Pekerjaan */}
    </section>
  );
}
