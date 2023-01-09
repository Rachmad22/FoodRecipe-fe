import React from "react";

function ModalVideos(props) {
  let { title, video } = props
  return (
    <div>
      <button type="button" className="btn btn-warning btn-step" data-bs-toggle="modal" data-bs-target=".video">
        <img src="/image/detail/play.png" alt="play-icon" />
      </button>

      <div className="modal fade video" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header align-items-baseline">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">{title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe src={video} title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
export default ModalVideos;