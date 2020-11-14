import React, { Component } from 'react';
import $ from "jquery";
class ModalMovie extends Component {
	componentDidMount(){
		$('#myModalLabel').on('hidden.bs.modal', function (e) {
			console.log("test");

		  })
	}
	test = () => {
		console.log(123);

	  }
	render() {
		return (
			<div
				className="modal fade"
				id="movie-modal"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="myModalLabel"
				aria-hidden="true"
				onHide={this.test}
			>
				<div className="modal-dialog modal-lg" role="document">
					{/*Content*/}
					<div className="modal-content"  onBlur={this.test}>
						{/*Body*/}
						<div className="modal-body mb-0 p-0">
							<div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
								<iframe
									className="embed-responsive-item"
									src={this.props.srcModalMovie}
									allowFullScreen
									title={"iframe-movie"}
								/>
							</div>
						</div>
						{/*Footer*/}
						<div className="modal-footer justify-content-center flex-column flex-md-row">
							<span className="mr-4">Spread the word!</span>
							<div>
								<a type="button" className="btn-floating btn-sm btn-fb" href="#xx">
									<i className="fab fa-facebook-f" />
								</a>
								{/*Twitter*/}
								<a type="button" className="btn-floating btn-sm btn-tw" href="#xx">
									<i className="fab fa-twitter" />
								</a>
								{/*Google +*/}
								<a type="button" className="btn-floating btn-sm btn-gplus" href="#xx">
									<i className="fab fa-google-plus-g" />
								</a>
								{/*Linkedin*/}
								<a type="button" className="btn-floating btn-sm btn-ins" href="#xx">
									<i className="fab fa-linkedin-in" />
								</a>
							</div>
							<button
								type="button"
								className="btn btn-outline-primary btn-rounded btn-md ml-4"
                data-dismiss="modal"
                onClick={() => this.props.handleSrcModalMovie("")}
							>
								Close
        </button>
						</div>
					</div>
					{/*/.Content*/}
				</div>
			</div>
		);
	}
}

export default ModalMovie;