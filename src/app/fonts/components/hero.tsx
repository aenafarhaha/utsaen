import foto from "../../aen.jpeg";


function Profile() {
  return <img src={foto.src} alt="aen" className="fotoku" />;
}

export default function hero() {
    return (
        <div>
          <h1 className="text-black-400 font-bold text-center">CV ONLINE</h1>
          <h2 className="text-center">Aena Farhatul Lael</h2>
          <Profile />
          <p className="text-black-300  text-center text-sm max-w-4xl mx-auto break-words">
            I'm a Computerized Accounting student at Masoem University degan minat besar dalam bidang bisnis. Sebagai seorang affiliator Tiktok serta clothing designer, saya berkomitmen untuk terus berkembang dalam bidang ini
            saya memiliki keterampilan dasar dalam pembuatan website dan pemrograman,
            serta antusias belajar banyak bahasa untuk memperluas wawasan.
          </p>


        </div>
    );
}

