import React from 'react';

function RowRiwayat(props: any) {
  return (
    <div className="border-2 border-black/75 rounded-lg bg-blue-300 p-1 my-3">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 text-sm">{props.skill}</div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section >
      {/* Skills */}
      <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-xl font-bold mb-4">My Skills</h2>

        <RowRiwayat skill="Desain Merchandise" />
        <RowRiwayat skill="Pemrograman WEB (HTML, CSS)" />
        <RowRiwayat skill="Content Creation" />
        
      </div>
      {/* End Skills */}
    </section>
  );
}
