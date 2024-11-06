import React from 'react';

// Komponen untuk menampilkan riwayat pendidikan atau skill
function RowRiwayat(props: any) {
  return (
    <div className="border-2 border-black/75 bg-blue-300 rounded-lg p-1 my-2 shadow-md hover:shadow-xl transition duration-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-4 text-sm">{props.jenjang || props.skill}</div> {/* Konsisten dengan ukuran teks */}
          <div className="col-span-12 md:col-span-4 text-sm">{props.sekolah || ''}</div>
          <div className="col-span-12 md:col-span-4 text-sm">{props.tahun || ''}</div>
        </div>
      </div>
    </div>
  );
}

// Komponen untuk Riwayat Pendidikan
export default function RiwayatPendidikan() {
  return (
    <section>
      {/* Riwayat Pendidikan */}
      <div className="container mx-auto p-2 text-center">
        <h2 className="text-lg font-semibold mb-4">Riwayat Pendidikan</h2>

        <RowRiwayat jenjang="SD" sekolah="SDN 2 Pilangsari" tahun="2010" />
        <RowRiwayat jenjang="MTS" sekolah="Daarul Uluum Pui Majalengka" tahun="2016" />
        <RowRiwayat jenjang="SMA" sekolah="SMAS Islam Al-Mizan Jatiwangi" tahun="2019" />
        <RowRiwayat jenjang="Diploma" sekolah="Masoem University" tahun="2022" />
      </div>
      {/* End Riwayat Pendidikan */}
    </section>
  );
}

// Komponen untuk Skills
export function Skills() {
  return (
    <section>
      {/* Skills */}
      <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-lg font-semibold mb-4">My Skills</h2>

        <RowRiwayat skill="Programming" />
        <RowRiwayat skill="Web Development" />
        <RowRiwayat skill="Data Analysis" />
        <RowRiwayat skill="Project Management" />
      </div>
      {/* End Skills */}
    </section>
  );
}
