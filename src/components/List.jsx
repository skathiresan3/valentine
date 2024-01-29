import React from "react";

function List(props) {
  return (
    <div>
      <section id="top-five-list">
        <div className="row list-reasons">
          <div className="col-lg-4">
            <button
              type="button"
              class="reason-button"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <img className="img-wrapper" src={props.img} alt="" />
              <br />
              {props.title}
            </button>

            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">
                      {props.title}
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>{props.text}</p>
                  </div>
                  <div class="modal-footer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default List;
