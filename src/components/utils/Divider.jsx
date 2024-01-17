import divider from "../../assets/underline.svg";

function Divider() {
    return (
        <div className="flex items-center space-x-6 justify-center my-9">
            <img src={divider}  alt="" />
            <p className="or">OR</p>
            <img src={divider} alt="" />
        </div>
    )
}

export default Divider