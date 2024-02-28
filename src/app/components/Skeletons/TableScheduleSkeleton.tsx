
export function TableScheduleSkeleton() {
  return (
    // <div className="w-full flex flex-col gap-4 relative overflow-x-auto px-2 bg-gray-300 rounded-sm animate-pulse" >
    //   <div className="w-full flex flex-col gap-4 relative overflow-x-auto bg-white p-4">
    //     <div className="w-full grid items-center grid-cols-3">
    //       <div className="w-max ml-3 flex flex-col gap-2 items-center">
    //         <span className="text-center bg-gray-300 rounded-sm w-20 h-4 animate-pulse">
    //         </span>
    //         <hr className="block w-64 border border-zinc-500" />
    //         <strong className="bg-gray-300 rounded-sm w-40 h-4 animate-pulse">
    //         </strong>
    //       </div>
    //       <div className="w-full flex flex-col text-center items-center justify-center uppercase">
    //         <div className="rounded-full bg bg-gray-300 w-20 h-20 animate-pulse ">  </div>
    //         <h1 className="bg-gray-300 rounded-sm w-20 h-4 animate-pulse mt-2">  
    //           <span className="bg-gray-300 rounded-sm w-20 h-4 animate-pulse"></span>
    //         </h1>
    //       </div>
    //     </div>
    //     <table className="w-full border-collapse border border-gray-400 uppercase">
    //       <tr className="border border-gray-400 text-center font-bold">
    //         <td className="border border-gray-400 py-6 bg-gray-300 rounded-sm w-4 h-4 animate-pulse">
              
    //         </td>
    //         <td className="w-full border border-gray-400 py-6 bg-gray-300 rounded-sm w-4 h-4 animate-pulse">
    //           <h1 className="bg-gray-300 rounded-sm w-4 h-4 animate-pulse">
    //           </h1>
    //           <p className="bg-gray-300 rounded-sm w-4 h-4 animate-pulse"></p>
    //         </td>
    //         <td className="bg-gray-300 rounded-sm w-4 h-4 animate-pulse border border-gray-400 py-6 px-12">
              
    //         </td>
    //       </tr>
    //       <tr className="w-full border border-gray-400 font-semibold ">
    //         <td className="px-4 py-2 flex ">
    //           <h2 className="w-max bg-gray-300 rounded-sm animate-pulse ">
    //             Area de formação
    //           </h2>
    //         </td>
    //       </tr>
    //       <tr className="border border-gray-400 font-semibold">
    //         <td className="px-4 py-2">
    //           <h2 className="w-max bg-gray-300 rounded-sm w-4 h-4 animate-pulse ">
    //           </h2>
    //         </td>
    //       </tr>
    //       <tr className="w-full border border-gray-400 font-semibold">
    //         <td className="border border-gray-400 px-4 py-2">
    //           <h2 className="w-max">Turma: <span className="text-red-500">grade</span></h2>
    //         </td>
    //         <td className="border border-gray-400 px-4 py-2">
    //           <h2 className="w-max">Sala:  <span className="text-red-500">56</span></h2>
    //         </td>
    //         <td className="w-max border border-gray-400 px-8 py-2 ">
    //           <h2 className="w-max">Período: <span className="text-red-500">period</span></h2>
    //         </td>
    //       </tr>
    //     </table>
    //     <table className="w-full text-sm  font-medium border-collapse border border-gray-400 bg-white">
    //       <thead className="text-xs uppercase">
    //         <tr className="border border-gray-400">
    //           <th scope="col" className="px-6 py-3 text-center border border-gray-400">
    //             Tempo
    //           </th>
    //           <th scope="col" className="px-6 py-3 text-center border border-gray-400">
    //             Hora
    //           </th>
    //           <th scope="col" className="px-6 py-3 text-center border border-gray-400">
    //             2ª Feira
    //           </th>
    //           <th scope="col" className="px-6 py-3 text-center border border-gray-400">
    //             3ª Feira
    //           </th>
    //           <th scope="col" className="px-6 py-3 text-center border border-gray-400">
    //             4ª Feira
    //           </th>
    //           <th scope="col" className="px-6 py-3 text-center border border-gray-400">
    //             5ª Feira
    //           </th>
    //           <th scope="col" className="px-6 py-3 text-center border border-gray-400">
    //             6ª Feira
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>

    //         <tr className="border border-gray-400">
    //           <td className="px-2 py-4 text-center border border-gray-400">
    //             time
    //           </td>

    //           <td className="px-2 py-4 text-center border border-gray-400">
    //           </td>
    //           <td className="px-6 py-4 text-center border border-gray-400">
    //             subject
    //           </td>

    //           <td className="px-6 py-4 text-center border border-gray-400">
    //             subject
    //           </td>
    //           <td className="px-6 py-4 text-center border border-gray-400">
    //             subject
    //           </td>
    //           <td className="px-6 py-4 text-center border border-gray-400">
    //             subject
    //           </td>
    //           <td className="px-6 py-4  text-center border border-gray-400">
    //             subject
    //           </td>
    //         </tr>

    //       </tbody>
    //     </table>
    //     <h1 className="mx-auto font-medium">LISTAGEM DE PROFESSORES DA TURMA</h1>
    //     <table className="w-full border-collapse border border-gray-400 uppercase">
    //       <thead className="border border-gray-400 text-center font-bold">
    //         <th className="w-max border border-gray-400 text-center">
    //           <h1>Nº</h1>
    //         </th>
    //         <th className="border border-gray-400">
    //           <h1>Disciplinas</h1>
    //         </th>
    //         <th className="border border-gray-400">
    //           <h1>Nome completo do professor</h1>
    //         </th>
    //         <th className="border border-gray-400">
    //           <h1>Contactos</h1>
    //         </th>
    //       </thead>
    //       <tr className="border border-gray-400 text-start">
    //         <td className="border border-gray-400 text-center">
    //           <h1>01</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Pagantologia</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Sousa Eduardo</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1></h1>
    //         </td>
    //       </tr>
    //       <tr className="border border-gray-400 text-start">
    //         <td className="border border-gray-400 text-center">
    //           <h1>02</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>L. Portuguesa</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Jesus Fernando</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1></h1>
    //         </td>
    //       </tr>
    //       <tr className="border border-gray-400 text-start">
    //         <td className="border border-gray-400 text-center">
    //           <h1>03</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Empreendedorismo</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Afonso da Silva Vicente</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1></h1>
    //         </td>
    //       </tr>
    //       <tr className="border border-gray-400 text-start">
    //         <td className="border border-gray-400 text-center">
    //           <h1>04</h1>
    //         </td>ww
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Fisica</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>John Cardoso</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1></h1>
    //         </td>
    //       </tr>
    //       <tr className="border border-gray-400 text-start">
    //         <td className="border border-gray-400 text-center">
    //           <h1>05</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Matemática</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Mauro Dinis Raimundo</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1></h1>
    //         </td>
    //       </tr>
    //       <tr className="border border-gray-400 text-start">
    //         <td className="border border-gray-400 text-center">
    //           <h1>06</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Quimica</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Angelo Domingos</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1></h1>
    //         </td>
    //       </tr>
    //       <tr className="border border-gray-400 text-start">
    //         <td className="border border-gray-400 text-center">
    //           <h1>07</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>FAI</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Hilária Fonseca</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1></h1>
    //         </td>
    //       </tr>
    //       <tr className="border border-gray-400 text-start">
    //         <td className="border border-gray-400 text-center">
    //           <h1>08</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Redes</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Rosário Timóteo</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1></h1>
    //         </td>
    //       </tr>
    //       <tr className="border border-gray-400 text-start">
    //         <td className="border border-gray-400 text-center">
    //           <h1>09</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>TLP</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Java Simon Script</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1></h1>
    //         </td>
    //       </tr>
    //       <tr className="border border-gray-400 text-start">
    //         <td className="border border-gray-400 text-center">
    //           <h1>10</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Seac</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Dennis Seven</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1></h1>
    //         </td>
    //       </tr>
    //       <tr className="border border-gray-400 text-start">
    //         <td className="border border-gray-400 text-center">
    //           <h1>11</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Disciplinas</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Miguel Nanga Manuel</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1></h1>
    //         </td>
    //       </tr>
    //       <tr className="border border-gray-400 text-start">
    //         <td className="border border-gray-400 text-center">
    //           <h1>12</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Machine Learning</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1>Débora Pombal</h1>
    //         </td>
    //         <td className="border border-gray-400 pl-2">
    //           <h1></h1>
    //         </td>
    //       </tr>
    //     </table>
    //   </div>
    // </div>
    <div className="w-full h-full flex items-center justify-center mt-40">
      <h1 className="text-xl text-gray-400 animate-pulse">Carregando horários...</h1>
    </div>
  );
}