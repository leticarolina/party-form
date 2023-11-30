export function Modal() {
  return (
    <div id="modal" className="modal fade" data-bs-backdrop="static">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Our First Modal</h5>
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              doloremque cum eius vitae at hic modi, molestiae minus. Iusto,
              quidem dignissimos ad voluptatem praesentium non nam ea aut nemo.
              A!
            </p>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button className="btn btn-outline-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
