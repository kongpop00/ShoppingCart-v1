type Hemberger ={
    on_of_Hemberger : ()=>void
  }
  const Hemberger = (props: Hemberger) => {
    const { on_of_Hemberger } = props;
  
    return (
      <button onClick={on_of_Hemberger} className="z-50">
        <label className="btn btn-circle swap swap-rotate ">
          {/* close icon */}
  
          <svg
            className=" fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
      </button>
    );
  };
  
  export default Hemberger;
  