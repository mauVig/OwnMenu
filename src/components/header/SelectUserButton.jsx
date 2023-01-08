export default function SelectUserButton({widthSelect}) {
  return (
    <>
      <ul 
        className= ' bg-Orange-300 text-white'
        style={{width: `${widthSelect}px`}}
        >
        <li>Cerrar Sesion</li>
      </ul>
    </>
  );
}
