import { useEffect } from "react";

/* eslint-disable react/prop-types */
function AddUser({ setModalOpen }) {

    useEffect(() => {
        document.getElementById('addUserModal').showModal()
    }, [])
    return (
        <>
            <button className="btn">open modal</button>
            <dialog id="addUserModal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => setModalOpen(false)} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default AddUser;