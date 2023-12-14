type Hemberger ={
    on_of_Hemberger : ()=>void
  }
  
  const Close = (props: Hemberger) => {
    const { on_of_Hemberger } = props;
  
    return (
      <button onClick={on_of_Hemberger} className="z-50">
        <label className="btn btn-circle swap swap-rotate ">
          {/* close icon */}
  
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </button>
    );
  };
  
  export default Close;
  